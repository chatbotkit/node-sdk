import { getRUNAS_USERID, getSECRET } from '../../env.js'

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
  .addOption(new Option('-m, --model <model>', 'Model name').default('gpt-4'))
  .action(async (_arg, options) => {
    const client = getClient()

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    })

    /** @type {{type: 'user'|'bot', text: string}[]} */
    const messages = []

    for (;;) {
      const user = await rl.question('user: ')

      messages.push({ type: 'user', text: user })

      process.stdout.write('bot: ')

      for await (const { type, data } of client
        .complete(null, { model: options.model, messages })
        .stream()) {
        if (type === 'token') {
          process.stdout.write(data.token)
        } else if (type === 'result') {
          messages.push({ type: 'bot', text: data.text })
        }
      }

      process.stdout.write('\n')
    }
  })

export default command
