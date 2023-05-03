require('dotenv').config()

const { ConversationClient } = require('@chatbotkit/sdk/conversation/index.js')

/**
 * Retrieves a list of conversations from the Chatbotkit Conversation API using
 * the ChatbotKit SDK and prints each conversation's ID and backstory to the
 * console.
 */
async function main() {
  const client = new ConversationClient({
    secret: process.env.CHATBOTKIT_API_SECRET,
  })

  for (const conversation of (await client.list()).items) {
    console.log(`id: ${JSON.stringify(conversation.id)}`)
    console.log(`backstory: ${JSON.stringify(conversation.backstory)}`)
    console.log(`---`)
  }
}

main()
