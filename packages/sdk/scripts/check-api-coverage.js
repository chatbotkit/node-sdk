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
          'create',
          'list',
          'fetch',
          'update',
          'delete',
          'export',
          'search',
          'ensure',
          'attach',
          'detach',
          'sync',
          'setup',
          'clone',
          'upsert',
          'trigger',
          'upload',
          'authenticate',
          'revoke',
          'verify',
          'downvote',
          'upvote',
          'synthesize',
          'generate',
          'invoke',
          'complete',
          'usage',
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
  if (missingClients.length > 0 || missingMethods.length > 0) {
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
