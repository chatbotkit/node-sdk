const dotenv = require('dotenv')
const readline = require('node:readline/promises')

dotenv.config()

const { ConversationClient } = require('@chatbotkit/sdk/conversation/index.js')

/**
 * Main function that implements a chatbot using the ChatBotKit SDK and the
 * GPT-3.5 Turbo model. It creates a conversation client, prompts the user for
 * input, sends the input to the chatbot model, and displays the bot's response.
 * The conversation continues until the program is terminated.
 */
async function main() {
  const client = new ConversationClient({
    secret: process.env.CHATBOTKIT_API_SECRET,
  })

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  /**
   * Create a dedicated conversation.
   */
  const conversation = await client.create({ model: 'gpt-3.5-turbo' })

  for (;;) {
    const user = await rl.question('user: ')

    process.stdout.write('bot: ')

    for await (const { type, data } of client
      .complete(conversation.id, { text: user })
      .stream()) {
      if (type === 'token') {
        process.stdout.write(data.token)
      }
    }

    process.stdout.write('\n')
  }
}

main()
