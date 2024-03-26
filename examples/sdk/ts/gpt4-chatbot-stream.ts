import * as dotenv from 'dotenv'

import { ConversationClient } from '@chatbotkit/sdk/conversation/index.js'

import readline from 'node:readline/promises'

dotenv.config()

async function main() {
  const client = new ConversationClient({
    secret: process.env.CHATBOTKIT_API_SECRET,
  })

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  const messages: { type: 'bot' | 'user'; text: string }[] = []

  for (;;) {
    const user = await rl.question('user: ')

    messages.push({ type: 'user', text: user })

    process.stdout.write('bot: ')

    for await (const { type, data } of client
      .complete(null, { model: 'gpt-4', messages })
      .stream()) {
      if (type === 'token') {
        process.stdout.write(data.token)
      } else if (type === 'result') {
        messages.push({ type: 'bot', text: data.text })
      }
    }

    process.stdout.write('\n')
  }
}

main()
