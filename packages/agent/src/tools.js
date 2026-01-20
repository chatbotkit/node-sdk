import { spawn } from 'child_process'
import { readFile, writeFile } from 'fs/promises'
import { z } from 'zod'

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
    description:
      'Read the contents of a file. Supports optional line range to read specific sections.',
    default: true,
    input: z.object({
      path: z.string().describe('The file path to read'),
      startLine: z
        .number()
        .int()
        .min(1)
        .optional()
        .describe('The line number to start reading from (1-indexed)'),
      endLine: z
        .number()
        .int()
        .min(1)
        .optional()
        .describe('The line number to end reading at, inclusive (1-indexed)'),
    }),
    handler: async (input) => {
      try {
        const content = await readFile(input.path, 'utf-8')
        const lines = content.split('\n')
        const totalLines = lines.length

        const { startLine, endLine } = input

        // if no range specified, return full content

        if (startLine === undefined && endLine === undefined) {
          return { success: true, content, totalLines }
        }

        // convert 1-indexed to 0-indexed for array slicing
        const start = startLine !== undefined ? Math.max(0, startLine - 1) : 0

        // endLine is inclusive, so we use it directly for slice (which is exclusive on end)
        const end =
          endLine !== undefined ? Math.min(totalLines, endLine) : totalLines

        const outputContent = lines.slice(start, end).join('\n')

        return {
          success: true,
          content: outputContent,
          totalLines,
          startLine: startLine ?? 1,
          endLine: endLine ?? totalLines,
        }
      } catch (error) {
        return {
          success: false,
          error: error instanceof Error ? error.message : 'Unknown error',
        }
      }
    },
  },
  write: {
    description:
      'Write content to a file. Without line parameters, overwrites the entire file. With startLine only, inserts before that line. With startLine and endLine, replaces that range.',
    default: true,
    input: z.object({
      path: z.string().describe('The file path to write to'),
      content: z.string().describe('The content to write'),
      startLine: z
        .number()
        .int()
        .min(1)
        .optional()
        .describe(
          'The line number to start writing at (1-indexed). If only startLine is provided, content is inserted before this line.'
        ),
      endLine: z
        .number()
        .int()
        .min(1)
        .optional()
        .describe(
          'The line number to end writing at, inclusive (1-indexed). Used with startLine to replace a range of lines.'
        ),
    }),
    handler: async (input) => {
      try {
        const { path, content, startLine, endLine } = input

        let finalContent

        // determine write mode based on parameters:
        // - no startLine, no endLine: overwrite entire file
        // - startLine only: insert before that line
        // - startLine and endLine: replace lines in range

        if (startLine === undefined && endLine === undefined) {
          // overwrite entire file

          finalContent = content
        } else {
          // need to read existing content for line-based operations

          let currentContent = ''
          try {
            currentContent = await readFile(path, 'utf-8')
          } catch {
            // file doesn't exist, treat as empty for insert/replace operations

            currentContent = ''
          }

          const lines = currentContent.split('\n')
          const totalLines = lines.length
          const newLines = content ? content.split('\n') : []

          if (startLine !== undefined && endLine === undefined) {
            // insert before startLine

            const insertIndex = Math.min(startLine - 1, totalLines)

            lines.splice(insertIndex, 0, ...newLines)
          } else if (startLine !== undefined && endLine !== undefined) {
            // replace lines from startLine to endLine (inclusive)

            const start = Math.max(0, startLine - 1)
            const end = Math.min(totalLines, endLine)
            const deleteCount = end - start

            lines.splice(start, deleteCount, ...newLines)
          } else {
            // endLine without startLine - treat as overwrite
            lines.length = 0
            lines.push(...newLines)
          }

          finalContent = lines.join('\n')
        }

        await writeFile(path, finalContent, 'utf-8')

        return {
          success: true,
          startLine,
          endLine,
        }
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
  exec: {
    description:
      'Execute a shell command (non-interactive only) using the current sh shell. Commands timeout after the specified duration (default 30 seconds). Use only for commands that run and exit automatically.',
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
