import { readFile } from 'fs/promises'
import yaml from 'js-yaml'
import { resolve } from 'path'

/**
 * @typedef {{
 *   name?: string,
 *   description?: string,
 *   backstory?: string,
 *   model?: string,
 *   botId?: string,
 *   skillsetId?: string,
 *   datasetId?: string
 * }} AgentDefinition
 */

/**
 * Parses YAML front matter from markdown content and returns the parsed fields
 * along with the remaining body text.
 *
 * @param {string} content
 * @returns {{ frontMatter: Record<string, unknown>, body: string }}
 */
function parseAgentFile(content) {
  const frontMatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)/

  const match = content.match(frontMatterRegex)

  if (!match) {
    return { frontMatter: {}, body: content.trim() }
  }

  let frontMatter = /** @type {Record<string, unknown>} */ ({})

  try {
    const parsed = yaml.load(match[1])

    if (typeof parsed === 'object' && parsed !== null) {
      frontMatter = /** @type {Record<string, unknown>} */ (parsed)
    }
  } catch {
    // @note yaml parsing failed - treat as no front matter
  }

  return { frontMatter, body: match[2].trim() }
}

/**
 * Loads an agent definition from a markdown file. The file may contain an
 * optional YAML front matter block with `backstory`, `model`, `name`, and
 * `description` fields. The markdown body is appended to `backstory` (if any)
 * to form the final backstory string.
 *
 * @param {string} filePath - Path to the agent markdown file (absolute or relative to cwd)
 * @returns {Promise<AgentDefinition>}
 */
export async function loadAgent(filePath) {
  const resolvedPath = resolve(process.cwd(), filePath)

  const content = await readFile(resolvedPath, 'utf-8')

  const { frontMatter, body } = parseAgentFile(content)

  const name =
    typeof frontMatter.name === 'string' ? frontMatter.name : undefined

  const description =
    typeof frontMatter.description === 'string'
      ? frontMatter.description
      : undefined

  const model =
    typeof frontMatter.model === 'string' ? frontMatter.model : undefined

  const botId =
    typeof frontMatter.botId === 'string' ? frontMatter.botId : undefined

  const skillsetId =
    typeof frontMatter.skillsetId === 'string'
      ? frontMatter.skillsetId
      : undefined

  const datasetId =
    typeof frontMatter.datasetId === 'string'
      ? frontMatter.datasetId
      : undefined

  const frontMatterBackstory =
    typeof frontMatter.backstory === 'string' ? frontMatter.backstory : ''

  const backstoryParts = [frontMatterBackstory, body].filter(Boolean)

  const backstory =
    backstoryParts.length > 0 ? backstoryParts.join('\n\n') : undefined

  return { name, description, backstory, model, botId, skillsetId, datasetId }
}
