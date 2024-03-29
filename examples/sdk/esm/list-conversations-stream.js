/* eslint-disable no-console */
import * as dotenv from 'dotenv'

import { ConversationClient } from '@chatbotkit/sdk/conversation/index.js'

dotenv.config()

/**
 * Retrieves a list of conversations from the Chatbotkit Conversation API using
 * the ChatbotKit SDK's stream() method, which will automatically paginate the
 * results, and prints each conversation's ID and backstory to the console.
 */
async function main() {
  const client = new ConversationClient({
    secret: process.env.CHATBOTKIT_API_SECRET,
  })

  for await (const { data } of client.list().stream()) {
    console.log(`id: ${JSON.stringify(data.id)}`)
    console.log(`backstory: ${JSON.stringify(data.backstory)}`)
    console.log(`---`)
  }
}

main()
