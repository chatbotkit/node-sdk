import * as dotenv from 'dotenv'

dotenv.config()

import fs from 'fs/promises'
import { ConversationClient } from '@chatbotkit/sdk/conversation/index.js'

/**
 * Retrieves conversations and their messages from the Chatbotkit Conversation
 * API using the ChatbotKit SDK's stream() method. It exports the conversations
 * to a JSON file named "conversations.json" with their respective messages.
 */
async function main() {
  const client = new ConversationClient({
    secret: process.env.CHATBOTKIT_API_SECRET,
  })

  const conversations = []

  for await (const { data: conversationData } of client.list().stream()) {
    console.log(`* exporting conversation ${conversationData.id}`)

    /** @type {{ id: string, createdAt: number, messages: {id: string, type: string, text: string, createdAt: number}[]}} */
    const conversation = {
      id: conversationData.id,

      createdAt: conversationData.createdAt,

      messages: [],
    }

    for await (const { data: messageData } of client.message
      .list(conversationData.id)
      .stream()) {
      conversation.messages.push({
        id: messageData.id,

        type: messageData.type,
        text: messageData.text,

        createdAt: messageData.createdAt,
      })
    }

    conversations.push(conversation)
  }

  const jsonContent = JSON.stringify(conversations, null, 2)

  await fs.writeFile('conversations.json', jsonContent)
}

main()
