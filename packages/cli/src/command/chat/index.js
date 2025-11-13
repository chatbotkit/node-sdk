import { getRUNAS_USERID, getSECRET } from '../../env.js'
import { Spinner } from '../../spinner.js'

import { ConversationClient } from '@chatbotkit/sdk/conversation/index.js'

import { Command, Option } from 'commander'
import readline from 'readline/promises'

function getClient() {
  return new ConversationClient({
    secret: getSECRET(),
    runAsUserId: getRUNAS_USERID(),
  })
}

export const command = new Command()
  .name('chat')
  .description('Start a chat session')
  .addOption(new Option('-b, --bot <bot>', 'Bot id'))
  .addOption(new Option('-m, --model <model>', 'Model name'))
  .action(async (options) => {
    const client = getClient()

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    })

    /** @type {{type: 'user'|'bot', text: string}[]} */
    const messages = []

    // ANSI colors and formatting
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
        `\n${colors.green}●${colors.reset} ${colors.bold}Assistant${colors.reset}\n\n  `
      )

      const spinner = new Spinner('')

      spinner.start()

      let firstToken = true

      for await (const { type, data } of client
        .complete(null, { botId: options.bot, model: options.model, messages })
        .stream()) {
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
