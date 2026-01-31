import { readFile, readdir, stat } from 'fs/promises'
import { join, extname } from 'path'

/**
 * @typedef {{
 *   name: string,
 *   description: string,
 *   instruction: string,
 *   secretId?: string,
 *   meta?: Record<string, unknown>
 * }} Ability
 *
 * @typedef {{
 *   name?: string,
 *   description?: string,
 *   abilities: Ability[]
 * }} Skillset
 *
 * @typedef {{
 *   skillsets: Skillset[]
 * }} Skills
 */

/**
 * Parses a skill file content based on file extension.
 *
 * @param {string} content - The file content
 * @param {string} ext - The file extension (.json, .yaml, .yml)
 * @returns {Record<string, any>}
 */
function parseSkillFile(content, ext) {
  if (ext === '.json') {
    return JSON.parse(content)
  }

  if (ext === '.yaml' || ext === '.yml') {
    // @note simple YAML parser without external dependencies
    return parseSimpleYaml(content)
  }

  throw new Error(`Unsupported skill file extension: ${ext}`)
}

/**
 * Simple YAML parser for skill files.
 * Handles basic YAML structures needed for skill definitions.
 *
 * @param {string} content - YAML content to parse
 * @returns {Record<string, any>}
 */
function parseSimpleYaml(content) {
  const result = /** @type {Record<string, any>} */ ({})
  const lines = content.split('\n')

  let currentIndent = 0
  let inMultilineString = false
  let multilineValue = ''
  let multilineKey = ''
  let arrayStack = /** @type {{ key: string, items: any[], indent: number }[]} */ (
    []
  )

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    const trimmedLine = line.trim()

    // Skip empty lines and comments
    if (!trimmedLine || trimmedLine.startsWith('#')) {
      if (inMultilineString) {
        multilineValue += '\n'
      }
      continue
    }

    // Calculate indentation
    const indent = line.length - line.trimStart().length

    // Handle multiline strings
    if (inMultilineString) {
      if (indent > currentIndent) {
        multilineValue += (multilineValue ? '\n' : '') + trimmedLine
        continue
      } else {
        // End multiline
        result[multilineKey] = multilineValue.trim()
        inMultilineString = false
        multilineValue = ''
      }
    }

    // Handle array items
    if (trimmedLine.startsWith('- ')) {
      const itemContent = trimmedLine.slice(2).trim()

      // Check if it's a simple value or an object start
      if (itemContent.includes(':')) {
        // It's an object, parse it
        const colonIdx = itemContent.indexOf(':')
        const key = itemContent.slice(0, colonIdx).trim()
        const value = itemContent.slice(colonIdx + 1).trim()

        const obj = /** @type {Record<string, any>} */ ({ [key]: value || '' })

        // Read following indented lines as part of this object
        let j = i + 1
        while (j < lines.length) {
          const nextLine = lines[j]
          const nextTrimmed = nextLine.trim()
          const nextIndent = nextLine.length - nextLine.trimStart().length

          if (!nextTrimmed || nextTrimmed.startsWith('#')) {
            j++
            continue
          }

          if (nextIndent <= indent) {
            break
          }

          if (nextTrimmed.startsWith('- ')) {
            break
          }

          if (nextTrimmed.includes(':')) {
            const nextColonIdx = nextTrimmed.indexOf(':')
            const nextKey = nextTrimmed.slice(0, nextColonIdx).trim()
            let nextValue = nextTrimmed.slice(nextColonIdx + 1).trim()

            // Check for multiline indicator
            if (nextValue === '|' || nextValue === '>') {
              // Collect multiline value
              let mlValue = ''
              let k = j + 1
              while (k < lines.length) {
                const mlLine = lines[k]
                const mlTrimmed = mlLine.trim()
                const mlIndent = mlLine.length - mlLine.trimStart().length

                if (!mlTrimmed) {
                  mlValue += '\n'
                  k++
                  continue
                }

                if (mlIndent <= nextIndent) {
                  break
                }

                mlValue += (mlValue ? '\n' : '') + mlTrimmed
                k++
              }
              nextValue = mlValue.trim()
              j = k - 1
            }

            obj[nextKey] = nextValue
          }
          j++
        }
        i = j - 1

        if (arrayStack.length > 0) {
          arrayStack[arrayStack.length - 1].items.push(obj)
        }
      } else {
        // Simple array item
        if (arrayStack.length > 0) {
          arrayStack[arrayStack.length - 1].items.push(itemContent)
        }
      }
      continue
    }

    // Handle key-value pairs
    if (trimmedLine.includes(':')) {
      const colonIdx = trimmedLine.indexOf(':')
      const key = trimmedLine.slice(0, colonIdx).trim()
      const value = trimmedLine.slice(colonIdx + 1).trim()

      currentIndent = indent

      // Check for multiline indicators
      if (value === '|' || value === '>') {
        inMultilineString = true
        multilineKey = key
        multilineValue = ''
        continue
      }

      // Check if this starts an array
      if (!value) {
        // Look ahead to see if next line is an array
        const nextLine = lines[i + 1]
        if (nextLine && nextLine.trim().startsWith('- ')) {
          arrayStack.push({ key, items: [], indent })
          continue
        }
      }

      // Process array stack if indentation decreases
      while (
        arrayStack.length > 0 &&
        indent <= arrayStack[arrayStack.length - 1].indent
      ) {
        const arr = arrayStack.pop()
        if (arr) {
          result[arr.key] = arr.items
        }
      }

      result[key] = value
    }
  }

  // Handle any remaining multiline
  if (inMultilineString && multilineKey) {
    result[multilineKey] = multilineValue.trim()
  }

  // Process any remaining arrays
  while (arrayStack.length > 0) {
    const arr = arrayStack.pop()
    if (arr) {
      result[arr.key] = arr.items
    }
  }

  return result
}

/**
 * Loads a single skill file and returns it as an Ability.
 *
 * @param {string} filePath - Path to the skill file
 * @returns {Promise<Ability>}
 */
export async function loadSkillFile(filePath) {
  const content = await readFile(filePath, 'utf-8')
  const ext = extname(filePath).toLowerCase()
  const parsed = parseSkillFile(content, ext)

  // Validate required fields
  if (!parsed.name || typeof parsed.name !== 'string') {
    throw new Error(`Skill file ${filePath} is missing required field: name`)
  }
  if (!parsed.description || typeof parsed.description !== 'string') {
    throw new Error(
      `Skill file ${filePath} is missing required field: description`
    )
  }
  if (!parsed.instruction || typeof parsed.instruction !== 'string') {
    throw new Error(
      `Skill file ${filePath} is missing required field: instruction`
    )
  }

  return /** @type {Ability} */ ({
    name: parsed.name,
    description: parsed.description,
    instruction: parsed.instruction,
    ...(parsed.secretId ? { secretId: parsed.secretId } : {}),
    ...(parsed.meta ? { meta: parsed.meta } : {}),
  })
}

/**
 * Loads all skill files from a directory.
 * Supports .json, .yaml, and .yml files.
 *
 * @param {string} dirPath - Path to the skills directory
 * @returns {Promise<Ability[]>}
 */
export async function loadSkillsFromDirectory(dirPath) {
  const abilities = /** @type {Ability[]} */ ([])
  const entries = await readdir(dirPath)

  for (const entry of entries) {
    const ext = extname(entry).toLowerCase()

    if (ext !== '.json' && ext !== '.yaml' && ext !== '.yml') {
      continue
    }

    const filePath = join(dirPath, entry)
    const fileStat = await stat(filePath)

    if (!fileStat.isFile()) {
      continue
    }

    try {
      const ability = await loadSkillFile(filePath)
      abilities.push(ability)
    } catch {
      // @note skip files that can't be parsed as skills
    }
  }

  return abilities
}

/**
 * Loads skills from multiple paths (files or directories).
 * Returns a Skills object that can be passed to agent options.
 *
 * @param {string[]} paths - Array of file or directory paths
 * @param {object} [options] - Options for loading skills
 * @param {string} [options.name] - Name for the skillset
 * @param {string} [options.description] - Description for the skillset
 * @returns {Promise<Skills>}
 */
export async function loadSkills(paths, options = {}) {
  const abilities = /** @type {Ability[]} */ ([])

  for (const path of paths) {
    const pathStat = await stat(path)

    if (pathStat.isDirectory()) {
      const dirAbilities = await loadSkillsFromDirectory(path)
      abilities.push(...dirAbilities)
    } else if (pathStat.isFile()) {
      const ability = await loadSkillFile(path)
      abilities.push(ability)
    }
  }

  return {
    skillsets: [
      {
        name: options.name || 'Local Skills',
        description:
          options.description || 'Skills loaded from local file system',
        abilities,
      },
    ],
  }
}

/**
 * Creates a skillset from an array of inline ability definitions.
 * This is useful when you want to define skills programmatically.
 *
 * @param {Ability[]} abilities - Array of ability definitions
 * @param {object} [options] - Options for the skillset
 * @param {string} [options.name] - Name for the skillset
 * @param {string} [options.description] - Description for the skillset
 * @returns {Skills}
 */
export function createSkills(abilities, options = {}) {
  return {
    skillsets: [
      {
        name: options.name || 'Custom Skills',
        description: options.description || 'Programmatically defined skills',
        abilities,
      },
    ],
  }
}

/**
 * Merges multiple Skills objects into one.
 *
 * @param  {...Skills} skillsArray - Skills objects to merge
 * @returns {Skills}
 */
export function mergeSkills(...skillsArray) {
  const skillsets = /** @type {Skillset[]} */ ([])

  for (const skills of skillsArray) {
    if (skills && skills.skillsets) {
      skillsets.push(...skills.skillsets)
    }
  }

  return { skillsets }
}
