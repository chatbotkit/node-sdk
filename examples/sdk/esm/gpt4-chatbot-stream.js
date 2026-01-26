import * as dotenv from 'dotenv'

import { ConversationClient } from '@chatbotkit/sdk/conversation/index.js'

import readline from 'node:readline/promises'

dotenv.config()

/**
 * The main function serves as the entry point of the application. It
 * initializes a ConversationClient instance, creates a readline Interface to
 * obtain user input, and repeatedly sends user input to the model in GPT-4o on
 * ChatBotKit servers for processing. The ConversationClient automatically
 * handles messages and trims them to fit into the model context size. The bot's
 * response is then printed to the console. The messages are processed using the
 * stream API of the ConversationClient, which allows for handling the messages
 * in real-time without having to wait for the entire request to be processed.
 */
async function main() {
  const client = new ConversationClient({
    secret: process.env.CHATBOTKIT_API_SECRET,
  })

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

    /**
     * ChatBotKit automatically handles messages and trims to length to fit into
     * the model context size.
     */
    for await (const { type, data } of client
      .complete(null, { model: 'gpt-4o', messages })
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
