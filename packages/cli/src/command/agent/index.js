import { getRUNAS_USERID, getSECRET } from '../../env.js'
import { Spinner } from '../../spinner.js'

import { complete } from '@chatbotkit/agent'
import { ChatBotKit } from '@chatbotkit/sdk'

import { exec } from 'child_process'
import { Command, Option } from 'commander'
import { readFile, writeFile } from 'fs/promises'
import readline from 'readline/promises'
import { promisify } from 'util'
import { z } from 'zod'

const execAsync = promisify(exec)

function getClient() {
  return new ChatBotKit({
    secret: getSECRET(),
    runAsUserId: getRUNAS_USERID(),
  })
}

export const command = new Command()
  .name('agent')
  .description('Start an agent session with tools')
  .addOption(new Option('-b, --bot <bot>', 'Bot id'))
  .addOption(new Option('-m, --model <model>', 'Model name'))
  .addOption(
    new Option('-t, --tools <tools...>', 'Specific tools to enable').choices([
      'read',
      'write',
      'search',
      'exec',
    ])
  )
  .action(async (options) => {
    const client = getClient()

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    })

    /** @type {{type: 'user'|'bot', text: string}[]} */
    const messages = []

    const allTools = {
      read: {
        description: 'Read the contents of a file',
        input: z.object({
          path: z.string().describe('The file path to read'),
        }),
        handler: async (/** @type {any} */ input) => {
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
        handler: async (/** @type {any} */ input) => {
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
        handler: async (/** @type {any} */ input) => {
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
        handler: async (/** @type {any} */ input) => {
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

    const tools = options.tools
      ? Object.fromEntries(
          Object.entries(allTools).filter(([name]) =>
            options.tools.includes(name)
          )
        )
      : allTools

    const colors = {
      reset: '\x1b[0m',
      bold: '\x1b[1m',
      cyan: '\x1b[36m',
      green: '\x1b[32m',
    }

    for (;;) {
      process.stdout.write('\n')

      const user = await rl.question(
        `${colors.cyan}●${colors.reset} ${colors.bold}You${colors.reset}\n\n> `
      )

      messages.push({ type: 'user', text: user })

      process.stdout.write(
        `\n${colors.green}●${colors.reset} ${colors.bold}Agent${colors.reset}\n\n  `
      )

      const spinner = new Spinner('')

      spinner.start()

      let firstToken = true

      for await (const { type, data } of complete({
        client,
        botId: options.bot,
        model: options.model,
        messages,
        tools,
      })) {
        if (type === 'token') {
          if (firstToken) {
            spinner.stop()

            firstToken = false
          }

          process.stdout.write(data.token)
        } else if (type === 'result') {
          messages.push({ type: 'bot', text: data.text })
        }
      }

      spinner.stop()

      process.stdout.write('\n')
    }
  })

export default command
