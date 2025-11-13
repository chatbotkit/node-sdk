import { exec } from 'child_process'
import { readFile, writeFile } from 'fs/promises'
import { promisify } from 'util'
import { z } from 'zod'

const execAsync = promisify(exec)

/**
 * Available tools for agent CLI
 *
 * @type {Record<string, {description: string, input: z.ZodObject<any>, handler: (input: any) => Promise<any>}>}
 */
export const tools = {
  read: {
    description: 'Read the contents of a file',
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
  search: {
    description: 'Search for files matching a pattern',
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
    description: 'Execute a shell command',
    input: z.object({
      command: z.string().describe('The command to execute'),
    }),
    handler: async (input) => {
      try {
        const { stdout, stderr } = await execAsync(input.command)

        return { success: true, stdout, stderr }
      } catch (error) {
        return {
          success: false,
          error: error instanceof Error ? error.message : 'Unknown error',
        }
      }
    },
  },
}

/**
 * Get specific tools based on selected tool names
 *
 * @param {string[]} [selectedTools] - Array of tool names to include. If not provided, returns all tools
 * @returns {Record<string, {description: string, input: z.ZodObject<any>, handler: (input: any) => Promise<any>}>}
 */
export function getTools(selectedTools) {
  if (!selectedTools || selectedTools.length === 0) {
    return tools
  }

  return Object.fromEntries(
    Object.entries(tools).filter(([name]) => selectedTools.includes(name))
  )
}

/**
 * Get available tool names
 *
 * @returns {string[]}
 */
export function getToolNames() {
  return Object.keys(tools)
}
