#!/usr/bin/env node

/* eslint-disable */
import fs from 'fs'
import path from 'path'
import ts from 'typescript'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const SDK_SRC_PATH = path.join(__dirname, '../src')
const OPENAPI_SPEC_PATH = path.join(SDK_SRC_PATH, 'types/api/v1.json')

const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  gray: '\x1b[90m',
  bold: '\x1b[1m',
}

/**
 * Load and parse the OpenAPI specification
 */
function loadOpenAPISpec() {
  const spec = JSON.parse(fs.readFileSync(OPENAPI_SPEC_PATH, 'utf8'))

  return spec
}

/**
 * Extract all endpoints from the OpenAPI spec
 */
function extractEndpoints(spec) {
  const endpoints = []

  for (const [path, methods] of Object.entries(spec.paths || {})) {
    for (const [method, operation] of Object.entries(methods)) {
      if (method === 'parameters') continue

      const operationId = operation.operationId
      if (!operationId) continue

      // Extract response schema
      const responseSchema =
        operation.responses?.['200']?.content?.['application/json']?.schema
      const requestSchema =
        operation.requestBody?.content?.['application/json']?.schema

      endpoints.push({
        path,
        method: method.toUpperCase(),
        operationId,
        tags: operation.tags || [],
        summary: operation.summary || '',
        parameters: operation.parameters || [],
        requestSchema,
        responseSchema,
      })
    }
  }

  return endpoints
}

/**
 * Group endpoints by resource (e.g., bot, conversation, dataset)
 */
function groupEndpointsByResource(endpoints) {
  const groups = {}

  for (const endpoint of endpoints) {
    // Extract resource from path (e.g., /bot/list -> bot, /integration/discord/list -> integration/discord)
    // Handle nested resources like /dataset/{datasetId}/record/list -> dataset/record
    const pathParts = endpoint.path.split('/').filter(Boolean)

    // Find the resource parts, including those after dynamic parameters
    const resourceParts = []
    let skipNext = false

    for (let i = 0; i < pathParts.length; i++) {
      const part = pathParts[i]

      // Skip dynamic parts like {id}
      if (part.startsWith('{')) {
        skipNext = true
        continue
      }

      // If we just skipped a dynamic part, the next part might be a nested resource
      if (skipNext) {
        skipNext = false
        
        // List of known action words that indicate endpoint actions, not nested resources
        const actionWords = [
          'create', 'list', 'fetch', 'update', 'delete', 'export', 'search', 'ensure',
          'attach', 'detach', 'sync', 'setup', 'clone', 'upsert', 'upload',
          'authenticate', 'revoke', 'verify', 'downvote', 'upvote', 'synthesize',
          'generate', 'invoke', 'complete', 'usage'
        ]
        
        const isAction = actionWords.includes(part)

        if (!isAction) {
          // This is a nested resource (e.g., 'record', 'file', 'ability', 'message', 'token')
          // These typically have their own subdirectories with index.js and v1.js
          resourceParts.push(part)
          continue
        } else {
          // This is an action word after a dynamic param (e.g., /trigger/{id}/invoke)
          // This is just a method on the parent resource, not a nested resource
          // Stop here - don't include the action in the resource path
          break
        }
      }

      // Stop at action words at the end of paths (e.g., /bot/list)
      const isAction = [
        'create',
        'list',
        'fetch',
        'update',
        'delete',
        'export',
        'search',
        'ensure',
      ].includes(part)
      if (isAction && resourceParts.length > 0) break

      resourceParts.push(part)
    }

    const resource = resourceParts.join('/')

    if (!groups[resource]) {
      groups[resource] = []
    }

    groups[resource].push(endpoint)
  }

  return groups
}

/**
 * Check if a client exists in the SDK
 */
function checkClientExists(resourcePath) {
  const clientPath = path.join(SDK_SRC_PATH, resourcePath, 'index.js')
  return fs.existsSync(clientPath)
}

/**
 * Extract methods from a client file
 */
function extractClientMethods(resourcePath) {
  const v1Path = path.join(SDK_SRC_PATH, resourcePath, 'v1.js')

  if (!fs.existsSync(v1Path)) {
    return []
  }

  const content = fs.readFileSync(v1Path, 'utf8')

  // Extract function names (e.g., export function listBots, export function fetchBot)
  const functionRegex = /export\s+(?:async\s+)?function\s+(\w+)/g
  const methods = []
  let match

  while ((match = functionRegex.exec(content)) !== null) {
    methods.push(match[1])
  }

  return methods
}

/**
 * Extract typedef fields from JSDoc comments using TypeScript compiler API
 */
function extractTypedefFields(resourcePath, typeName) {
  const v1Path = path.join(SDK_SRC_PATH, resourcePath, 'v1.js')

  if (!fs.existsSync(v1Path)) {
    return []
  }

  const sourceCode = fs.readFileSync(v1Path, 'utf8')

  // Create a source file using TypeScript compiler API
  const sourceFile = ts.createSourceFile(
    v1Path,
    sourceCode,
    ts.ScriptTarget.Latest,
    true
  )

  const typedefs = new Map()

  // Visit all nodes to find JSDoc typedef tags
  function visit(node) {
    // Check for JSDoc comments
    if (node.jsDoc) {
      for (const jsDoc of node.jsDoc) {
        if (jsDoc.tags) {
          for (const tag of jsDoc.tags) {
            if (
              tag.kind === ts.SyntaxKind.JSDocTypedefTag &&
              tag.name?.getText()
            ) {
              const typedefName = tag.name.getText()
              const fields = extractFieldsFromTypeNode(
                tag.typeExpression,
                typedefs
              )
              typedefs.set(typedefName, fields)
            }
          }
        }
      }
    }

    ts.forEachChild(node, visit)
  }

  /**
   * Extract fields from a TypeScript type node (handles JSDoc types)
   */
  function extractFieldsFromTypeNode(typeNode, typedefs) {
    if (!typeNode) return []

    const fields = []

    // Handle JSDocTypeExpression wrapper
    if (typeNode.kind === ts.SyntaxKind.JSDocTypeExpression) {
      return extractFieldsFromTypeNode(typeNode.type, typedefs)
    }

    // Handle TypeLiteral (object with properties)
    if (typeNode.kind === ts.SyntaxKind.TypeLiteral) {
      for (const member of typeNode.members) {
        if (member.kind === ts.SyntaxKind.PropertySignature) {
          fields.push({
            name: member.name.getText(),
            optional: !!member.questionToken,
            type: member.type ? member.type.getText() : 'any',
          })
        }
      }
    }

    // Handle IntersectionType (BaseType & { ... })
    if (typeNode.kind === ts.SyntaxKind.IntersectionType) {
      for (const type of typeNode.types) {
        // If it's a reference to another typedef, resolve it
        if (type.kind === ts.SyntaxKind.TypeReference) {
          const referencedTypeName = type.typeName.getText()
          // Check if we've already parsed this type
          if (typedefs.has(referencedTypeName)) {
            fields.push(...typedefs.get(referencedTypeName))
          } else {
            // Will be resolved in second pass
            fields.push({ _reference: referencedTypeName })
          }
        } else {
          // Extract fields from inline type
          fields.push(...extractFieldsFromTypeNode(type, typedefs))
        }
      }
    }

    // Handle TypeReference (references to other types)
    if (typeNode.kind === ts.SyntaxKind.TypeReference) {
      const referencedTypeName = typeNode.typeName.getText()
      if (typedefs.has(referencedTypeName)) {
        fields.push(...typedefs.get(referencedTypeName))
      }
    }

    return fields
  }

  // First pass: collect all typedefs
  visit(sourceFile)

  // Second pass: resolve references
  function resolveReferences(fields) {
    const resolved = []
    for (const field of fields) {
      if (field._reference) {
        if (typedefs.has(field._reference)) {
          resolved.push(...resolveReferences(typedefs.get(field._reference)))
        }
      } else {
        resolved.push(field)
      }
    }
    return resolved
  }

  // Get the requested typedef
  if (!typedefs.has(typeName)) {
    return []
  }

  const fields = resolveReferences(typedefs.get(typeName))

  // Remove duplicates (can happen with intersection types)
  const uniqueFields = []
  const seen = new Set()
  for (const field of fields) {
    if (!seen.has(field.name)) {
      seen.add(field.name)
      uniqueFields.push(field)
    }
  }

  return uniqueFields
}

/**
 * Compare SDK fields with OpenAPI schema fields
 */
function compareFields(sdkFields, apiFields) {
  const missing = []
  const extra = []

  const sdkFieldNames = new Set(sdkFields.map((f) => f.name))
  const apiFieldNames = new Set(apiFields.map((f) => f.name))

  // Find missing fields (in API but not in SDK)
  for (const apiField of apiFields) {
    if (!sdkFieldNames.has(apiField.name)) {
      missing.push(apiField)
    }
  }

  // Find extra fields (in SDK but not in API)
  for (const sdkField of sdkFields) {
    if (!apiFieldNames.has(sdkField.name)) {
      extra.push(sdkField)
    }
  }

  return { missing, extra }
}

/**
 * Extract fields from request/response schemas
 */
function extractSchemaFields(schema, spec, visited = new Set()) {
  if (!schema) return []

  const fields = []

  // Handle $ref
  if (schema.$ref || schema.$$ref) {
    const ref = schema.$ref || schema.$$ref
    const refPath = ref.replace('#/', '').split('/')

    if (visited.has(ref)) return [] // Prevent circular references
    visited.add(ref)

    let refSchema = spec
    for (const part of refPath) {
      refSchema = refSchema?.[part]
    }

    if (refSchema) {
      return extractSchemaFields(refSchema, spec, visited)
    }
  }

  // Handle allOf
  if (schema.allOf) {
    for (const subSchema of schema.allOf) {
      fields.push(...extractSchemaFields(subSchema, spec, visited))
    }
  }

  // Handle properties
  if (schema.properties) {
    for (const [fieldName, fieldSchema] of Object.entries(schema.properties)) {
      fields.push({
        name: fieldName,
        type: fieldSchema.type,
        description: fieldSchema.description,
        required: schema.required?.includes(fieldName) || false,
      })
    }
  }

  return fields
}

/**
 * Map operation ID to expected SDK function name
 */
function operationIdToFunctionName(operationId) {
  // The operationId from OpenAPI should match the function name in v1.js
  return operationId
}

/**
 * Generate coverage report
 */
function generateCoverageReport() {
  console.log(`${colors.bold}${colors.cyan}`)
  console.log(
    '╔═══════════════════════════════════════════════════════════════╗'
  )
  console.log(
    '║           ChatBotKit SDK API Coverage Report                 ║'
  )
  console.log(
    '╚═══════════════════════════════════════════════════════════════╝'
  )
  console.log(colors.reset)

  const spec = loadOpenAPISpec()
  const endpoints = extractEndpoints(spec)
  const groups = groupEndpointsByResource(endpoints)

  let totalEndpoints = 0
  let implementedEndpoints = 0
  let missingClients = []
  let missingMethods = []
  let missingFields = []
  let implementedClients = []

  const sortedResources = Object.keys(groups).sort()

  for (const resource of sortedResources) {
    const resourceEndpoints = groups[resource]
    totalEndpoints += resourceEndpoints.length

    const clientExists = checkClientExists(resource)

    if (!clientExists) {
      missingClients.push({
        resource,
        endpoints: resourceEndpoints,
      })
      continue
    }

    const clientMethods = extractClientMethods(resource)
    implementedClients.push(resource)

    for (const endpoint of resourceEndpoints) {
      const expectedFunctionName = operationIdToFunctionName(
        endpoint.operationId
      )

      if (clientMethods.includes(expectedFunctionName)) {
        implementedEndpoints++

        // Check fields for implemented methods
        if (endpoint.requestSchema || endpoint.responseSchema) {
          // Determine the typedef name based on the operation
          // Common patterns: {Resource}CreateRequest, {Resource}FetchResponse, etc.
          const resourceName =
            resource.split('/').pop().charAt(0).toUpperCase() +
            resource.split('/').pop().slice(1)

          // Try to find request/response typedefs
          let requestTypeName = null
          let responseTypeName = null

          // Extract action from operation ID (e.g., createBot -> Create, listBots -> List)
          const actionMatch = endpoint.operationId.match(
            /^(\w+?)(?:[A-Z]\w+)?$/
          )
          if (actionMatch) {
            let action = actionMatch[1]
            // If the action contains the resource name, try to extract just the verb
            // E.g., "listBots" -> "list", "createBot" -> "create"
            const verbMatch = endpoint.operationId.match(
              new RegExp(`^(\\w+?)${resourceName}s?$`, 'i')
            )
            if (verbMatch) {
              action = verbMatch[1]
            }

            action = action.charAt(0).toUpperCase() + action.slice(1)

            // Common typedef naming patterns
            requestTypeName = `${resourceName}${action}Request`
            responseTypeName = `${resourceName}${action}Response`
          }

          // Check request fields
          if (endpoint.requestSchema && requestTypeName) {
            const apiFields = extractSchemaFields(endpoint.requestSchema, spec)
            const sdkFields = extractTypedefFields(resource, requestTypeName)

            if (sdkFields.length > 0 && apiFields.length > 0) {
              const { missing } = compareFields(sdkFields, apiFields)

              if (missing.length > 0) {
                missingFields.push({
                  resource,
                  method: expectedFunctionName,
                  typedef: requestTypeName,
                  fieldType: 'request',
                  fields: missing,
                })
              }
            }
          }

          // Check response fields
          if (endpoint.responseSchema && responseTypeName) {
            const apiFields = extractSchemaFields(endpoint.responseSchema, spec)
            const sdkFields = extractTypedefFields(resource, responseTypeName)

            if (sdkFields.length > 0 && apiFields.length > 0) {
              const { missing } = compareFields(sdkFields, apiFields)

              if (missing.length > 0) {
                missingFields.push({
                  resource,
                  method: expectedFunctionName,
                  typedef: responseTypeName,
                  fieldType: 'response',
                  fields: missing,
                })
              }
            }
          }
        }
      } else {
        missingMethods.push({
          resource,
          endpoint,
          expectedFunctionName,
        })
      }
    }
  }

  // Print summary
  console.log(`${colors.bold}Summary:${colors.reset}`)
  console.log(
    `  Total API Endpoints: ${colors.bold}${totalEndpoints}${colors.reset}`
  )
  console.log(
    `  Implemented: ${colors.green}${colors.bold}${implementedEndpoints}${colors.reset}`
  )
  console.log(
    `  Missing: ${colors.red}${colors.bold}${
      totalEndpoints - implementedEndpoints
    }${colors.reset}`
  )

  const coveragePercent = (
    (implementedEndpoints / totalEndpoints) *
    100
  ).toFixed(1)
  const coverageColor =
    Number(coveragePercent) >= 90
      ? colors.green
      : Number(coveragePercent) >= 70
      ? colors.yellow
      : colors.red
  console.log(
    `  Coverage: ${coverageColor}${colors.bold}${coveragePercent}%${colors.reset}`
  )

  if (missingFields.length > 0) {
    console.log(
      `  ${colors.yellow}Missing Fields: ${colors.bold}${missingFields.length}${colors.reset}`
    )
  }

  console.log()

  // Print missing clients
  if (missingClients.length > 0) {
    console.log(
      `${colors.bold}${colors.red}Missing Clients (${missingClients.length}):${colors.reset}`
    )
    for (const { resource, endpoints } of missingClients) {
      console.log(
        `  ${colors.red}✗${colors.reset} ${colors.bold}${resource}${colors.reset} (${endpoints.length} endpoints)`
      )
      for (const endpoint of endpoints) {
        console.log(
          `    ${colors.gray}${endpoint.method} ${endpoint.path} → ${endpoint.operationId}${colors.reset}`
        )
      }
    }
    console.log()
  }

  // Print missing methods
  if (missingMethods.length > 0) {
    console.log(
      `${colors.bold}${colors.yellow}Missing Methods (${missingMethods.length}):${colors.reset}`
    )

    // Group by resource
    const methodsByResource = {}
    for (const item of missingMethods) {
      if (!methodsByResource[item.resource]) {
        methodsByResource[item.resource] = []
      }
      methodsByResource[item.resource].push(item)
    }

    for (const [resource, methods] of Object.entries(methodsByResource)) {
      console.log(
        `  ${colors.yellow}⚠${colors.reset} ${colors.bold}${resource}${colors.reset} (${methods.length} methods)`
      )
      for (const { endpoint, expectedFunctionName } of methods) {
        console.log(
          `    ${colors.gray}${endpoint.method} ${endpoint.path} → ${expectedFunctionName}()${colors.reset}`
        )
      }
    }
    console.log()
  }

  // Print missing fields
  if (missingFields.length > 0) {
    console.log(
      `${colors.bold}${colors.magenta}Missing Fields (${missingFields.length} methods affected):${colors.reset}`
    )

    // Group by resource
    const fieldsByResource = {}
    for (const item of missingFields) {
      if (!fieldsByResource[item.resource]) {
        fieldsByResource[item.resource] = []
      }
      fieldsByResource[item.resource].push(item)
    }

    for (const [resource, items] of Object.entries(fieldsByResource)) {
      console.log(
        `  ${colors.magenta}●${colors.reset} ${colors.bold}${resource}${colors.reset}`
      )
      for (const { method, typedef, fieldType, fields } of items) {
        console.log(
          `    ${colors.gray}${method}() → ${typedef} (${fieldType})${colors.reset}`
        )
        for (const field of fields) {
          const requiredBadge = field.required
            ? `${colors.red}required${colors.reset}`
            : 'optional'
          console.log(
            `      ${colors.magenta}•${colors.reset} ${field.name} ${colors.gray}(${requiredBadge})${colors.reset}`
          )
        }
      }
    }
    console.log()
  }

  // Print implemented clients
  if (implementedClients.length > 0) {
    console.log(
      `${colors.bold}${colors.green}Implemented Clients (${implementedClients.length}):${colors.reset}`
    )
    for (const resource of implementedClients) {
      const resourceEndpoints = groups[resource]
      const clientMethods = extractClientMethods(resource)
      const implementedCount = resourceEndpoints.filter((ep) =>
        clientMethods.includes(operationIdToFunctionName(ep.operationId))
      ).length

      const resourceCoverage = (
        (implementedCount / resourceEndpoints.length) *
        100
      ).toFixed(0)
      const icon = resourceCoverage === '100' ? '✓' : '●'
      const color = resourceCoverage === '100' ? colors.green : colors.yellow

      console.log(
        `  ${color}${icon}${colors.reset} ${resource} ${colors.gray}(${implementedCount}/${resourceEndpoints.length} - ${resourceCoverage}%)${colors.reset}`
      )
    }
    console.log()
  }

  // Exit code
  if (
    missingClients.length > 0 ||
    missingMethods.length > 0 ||
    missingFields.length > 0
  ) {
    console.log(
      `${colors.yellow}${colors.bold}⚠ API coverage is incomplete${colors.reset}\n`
    )
    process.exit(1)
  } else {
    console.log(
      `${colors.green}${colors.bold}✓ Full API coverage achieved!${colors.reset}\n`
    )
    process.exit(0)
  }
}

// Run the coverage check
try {
  generateCoverageReport()
} catch (error) {
  console.error(
    `${colors.red}${colors.bold}Error:${colors.reset}`,
    error.message
  )
  console.error(error.stack)
  process.exit(1)
}
