/* eslint-disable no-console */
import * as dotenv from 'dotenv'

import { ConversationClient } from '@chatbotkit/sdk/conversation/index.js'

dotenv.config()

async function main() {
  const client = new ConversationClient({
    token: process.env.CHATBOTKIT_API_TOKEN,
  })

  const {
    items: [conversation],
  } = await client.list()

  for (const message of (await client.message.list(conversation.id)).items) {
    console.log(`id: ${JSON.stringify(message.id)}`)
    console.log(`type: ${JSON.stringify(message.type)}`)
    console.log(`text: ${JSON.stringify(message.text)}`)
    console.log(`---`)
  }
}

main()
