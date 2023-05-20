import * as dotenv from 'dotenv'
import readline from 'node:readline/promises'

dotenv.config()

import { ConversationClient } from '@chatbotkit/sdk/conversation/index.js'

/**
 * The main() function creates a new ConversationClient object, which uses a
 * provided CHAKBOTKIT_API_SECRET to authenticate with ChatBotKit's API. It then
 * initializes a readline interface for the user to input text.
 *
 * The function creates an empty array called messages and enters an infinite
 * loop to prompt the user for input. The user's text is added to the messages
 * array as an object with properties type: 'user' and text: user (where user is
 * the user's input).
 *
 * Next, the loop calls the client.complete() method, passing it an object with
 * properties model: 'gpt-4' and messages: messages. This sends the messages
 * array to ChatBotKit's API, which uses the GPT-4 model to generate a response.
 * The response is then added to the messages array as another object with
 * properties type: 'bot' and text: bot (where bot is the generated response).
 *
 * Finally, the function logs the response to the console and the loop repeats,
 * prompting the user for input again. Ultimately creating a text-based
 * conversation between a human and a machine.
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

    /**
     * ChatBotKit automatically handles messages and trims to length to fit into
     * the model context size.
     */
    const { text: bot } = await client.complete(null, {
      model: 'gpt-4',
      messages,
    })

    messages.push({ type: 'bot', text: bot })

    console.log(`bot: ${bot}`)
  }
}

main()
