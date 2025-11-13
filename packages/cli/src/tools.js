import { exec, spawn } from 'child_process'
import { readFile, writeFile } from 'fs/promises'
import { promisify } from 'util'
import { z } from 'zod'

const execAsync = promisify(exec)

/**
 * Available tools for agent CLI
 *
 * @type {Record<string, {
 *   description: string,
 *   input: z.ZodObject<any>,
 *   handler: (input: any) => Promise<any>,
 *   default?: boolean
 * }>}
 */
export const tools = {
  read: {
    description: 'Read the contents of a file',
    default: true,
    input: z.object({
      path: z.string().describe('The file path to read'),
    }),
    handler: async (input) => {
      try {
        const content = await readFile(input.path, 'utf-8')

        return { success: true, content }
      } catch (error) {
        return {
          success: false,
          error: error instanceof Error ? error.message : 'Unknown error',
        }
      }
    },
  },
  write: {
    description: 'Write content to a file',
    default: true,
    input: z.object({
      path: z.string().describe('The file path to write to'),
      content: z.string().describe('The content to write'),
    }),
    handler: async (input) => {
      try {
        await writeFile(input.path, input.content, 'utf-8')

        return { success: true }
      } catch (error) {
        return {
          success: false,
          error: error instanceof Error ? error.message : 'Unknown error',
        }
      }
    },
  },
  edit: {
    description:
      'Edit a file by replacing an exact string occurrence with a new string. Only one occurrence must exist.',
    default: true,
    input: z.object({
      path: z.string().describe('The file path to edit'),
      oldString: z
        .string()
        .describe('The exact string to find and replace (must match exactly)'),
      newString: z.string().describe('The new string to replace with'),
    }),
    handler: async (input) => {
      try {
        const content = await readFile(input.path, 'utf-8')

        const occurrences = content.split(input.oldString).length - 1

        if (occurrences === 0) {
          return {
            success: false,
            error: 'String not found in file',
          }
        }

        if (occurrences > 1) {
          return {
            success: false,
            error: `Multiple occurrences found (${occurrences}). The old string must match exactly one location.`,
          }
        }

        const newContent = content.replace(input.oldString, input.newString)

        await writeFile(input.path, newContent, 'utf-8')

        const oldPreview =
          input.oldString.length > 100
            ? input.oldString.substring(0, 100) + '...'
            : input.oldString
        const newPreview =
          input.newString.length > 100
            ? input.newString.substring(0, 100) + '...'
            : input.newString

        return {
          success: true,
          message: `Successfully replaced:\n  OLD: ${oldPreview}\n  NEW: ${newPreview}`,
        }
      } catch (error) {
        return {
          success: false,
          error: error instanceof Error ? error.message : 'Unknown error',
        }
      }
    },
  },
  search: {
    description: 'Search for files matching a pattern',
    default: true,
    input: z.object({
      pattern: z.string().describe('The glob pattern to search for'),
      directory: z
        .string()
        .optional()
        .describe('The directory to search in (defaults to current)'),
    }),
    handler: async (input) => {
      try {
        const dir = input.directory || '.'

        const { stdout } = await execAsync(
          `find ${dir} -name "${input.pattern}"`
        )

        const files = stdout.trim().split('\n').filter(Boolean)

        return { success: true, files }
      } catch (error) {
        return {
          success: false,
          error: error instanceof Error ? error.message : 'Unknown error',
        }
      }
    },
  },
  exec: {
    description:
      'Execute a shell command (non-interactive only). Commands timeout after the specified duration (default 30 seconds). Use only for commands that run and exit automatically.',
    default: true,
    input: z.object({
      command: z.string().describe('The command to execute'),
      timeout: z
        .number()
        .default(30)
        .describe(
          'Timeout in seconds. The command will be killed if it runs longer than this.'
        ),
    }),
    handler: async (input) => {
      const timeoutMs = input.timeout * 1000

      return new Promise((resolve) => {
        const childProcess = spawn('sh', ['-c', input.command], {
          stdio: ['ignore', 'pipe', 'pipe'], // @note close stdin to prevent interactive input
          timeout: timeoutMs,
        })

        let stdout = ''
        let stderr = ''
        let timedOut = false

        childProcess.stdout.on('data', (data) => {
          stdout += data.toString()
        })

        childProcess.stderr.on('data', (data) => {
          stderr += data.toString()
        })

        childProcess.on('close', (code) => {
          if (timedOut) {
            resolve({
              success: false,
              error: `Command timed out after ${
                timeoutMs / 1000
              } seconds. This may indicate an interactive command.`,
            })
          } else if (code === 0) {
            resolve({ success: true, stdout, stderr })
          } else {
            resolve({
              success: false,
              error: `Command exited with code ${code}`,
              stdout,
              stderr,
            })
          }
        })

        childProcess.on('error', (error) => {
          resolve({
            success: false,
            error: error.message,
          })
        })

        setTimeout(() => {
          if (!childProcess.killed) {
            timedOut = true

            childProcess.kill('SIGTERM')

            // @note force kill after 2 seconds if still running

            setTimeout(() => {
              if (!childProcess.killed) {
                childProcess.kill('SIGKILL')
              }
            }, 2000)
          }
        }, timeoutMs)
      })
    },
  },
}

/**
 * Get specific tools based on selected tool names
 *
 * @param {Array<keyof typeof tools>} [selectedTools] - Array of tool names to include. If not provided, returns only default tools
 * @returns {typeof tools}
 */
export function getTools(selectedTools) {
  if (!selectedTools || selectedTools.length === 0) {
    return Object.fromEntries(
      Object.entries(tools).filter(([, tool]) => tool.default)
    )
  }

  return Object.fromEntries(
    Object.entries(tools).filter(([name]) => selectedTools.includes(name))
  )
}

/**
 * Get available tool names
 *
 * @returns {Array<keyof typeof tools>}
 */
export function getToolNames() {
  return Object.keys(tools)
}
