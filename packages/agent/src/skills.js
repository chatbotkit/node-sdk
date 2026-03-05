import { readFile, readdir, stat, watch } from 'fs/promises'
import yaml from 'js-yaml'
import { join, resolve } from 'path'

/**
 * @typedef {{
 *   name: string,
 *   description: string,
 *   path: string
 * }} SkillDefinition
 *
 * @typedef {{
 *   skills: SkillDefinition[],
 *   close: () => void
 * }} SkillsResult
 */

/**
 * Parses YAML front matter from markdown content.
 * Expects format:
 * ---
 * name: Skill Name
 * description: Skill description
 * ---
 *
 * @param {string} content - The markdown file content
 * @returns {{ name?: string, description?: string }}
 */
function parseFrontMatter(content) {
  const frontMatterRegex = /^---\s*\n([\s\S]*?)\n---/
  const match = content.match(frontMatterRegex)

  if (!match) {
    return {}
  }

  try {
    const frontMatter = match[1]
    const parsed = /** @type {Record<string, unknown>} */ (
      yaml.load(frontMatter)
    )

    if (typeof parsed !== 'object' || parsed === null) {
      return {}
    }

    return {
      name: typeof parsed.name === 'string' ? parsed.name : undefined,
      description:
        typeof parsed.description === 'string' ? parsed.description : undefined,
    }
  } catch {
    // @note yaml parsing failed
    return {}
  }
}

/**
 * Loads a single skill from a directory containing a SKILL.md file.
 *
 * @param {string} skillDir - Path to the skill directory
 * @returns {Promise<SkillDefinition | null>}
 */
async function loadSkillFromDirectory(skillDir) {
  const skillFilePath = join(skillDir, 'SKILL.md')

  try {
    const content = await readFile(skillFilePath, 'utf-8')
    const { name, description } = parseFrontMatter(content)

    if (!name || !description) {
      return null
    }

    return {
      name,
      description,
      path: resolve(skillDir),
    }
  } catch {
    // @note skill file doesn't exist or can't be read
    return null
  }
}

/**
 * Loads skills from multiple directories.
 * Each directory should contain subdirectories with SKILL.md files.
 *
 * @param {string[]} directories - Array of directory paths to scan for skills
 * @param {{ watch?: boolean }} [options] - Options for loading skills
 * @returns {Promise<SkillsResult>}
 */
export async function loadSkills(directories, options = {}) {
  const skills = /** @type {SkillDefinition[]} */ ([])
  const watchControllers = /** @type {AbortController[]} */ ([])

  /**
   * Scans a directory for skill subdirectories.
   *
   * @param {string} baseDir
   */
  async function scanDirectory(baseDir) {
    try {
      const entries = await readdir(baseDir)

      for (const entry of entries) {
        const entryPath = join(baseDir, entry)
        const entryStat = await stat(entryPath)

        if (entryStat.isDirectory()) {
          const skill = await loadSkillFromDirectory(entryPath)
          if (skill) {
            // Remove existing skill with same path if it exists
            const existingIdx = skills.findIndex((s) => s.path === skill.path)
            if (existingIdx !== -1) {
              skills[existingIdx] = skill
            } else {
              skills.push(skill)
            }
          }
        }
      }
    } catch {
      // @note directory doesn't exist or can't be read
    }
  }

  // Initial load
  for (const dir of directories) {
    await scanDirectory(dir)
  }

  // Set up watching if requested
  if (options.watch) {
    for (const dir of directories) {
      const controller = new AbortController()
      watchControllers.push(controller)

      // Start watching in background
      ;(async () => {
        try {
          const watcher = watch(dir, {
            recursive: true,
            signal: controller.signal,
          })

          for await (const event of watcher) {
            // Reload skills when changes detected
            if (event.filename?.endsWith('SKILL.md')) {
              await scanDirectory(dir)
            }
          }
        } catch (err) {
          // @note watcher was aborted or error occurred
          if (
            err instanceof Error &&
            err.name !== 'AbortError' &&
            !err.message.includes('AbortError')
          ) {
            // Silently ignore abort errors
          }
        }
      })()
    }
  }

  return {
    skills,
    close: () => {
      for (const controller of watchControllers) {
        controller.abort()
      }
    },
  }
}

/**
 * Creates a skills feature configuration from skill definitions.
 *
 * @param {SkillDefinition[]} skills - Array of skill definitions
 * @returns {{ name: 'skills', options: { skills: SkillDefinition[] } }}
 */
export function createSkillsFeature(skills) {
  return {
    name: /** @type {const} */ ('skills'),
    options: { skills },
  }
}
