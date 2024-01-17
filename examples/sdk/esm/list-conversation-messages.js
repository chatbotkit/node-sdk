/* eslint-disable no-console */

import * as dotenv from 'dotenv'

dotenv.config()

import { ConversationClient } from '@chatbotkit/sdk/conversation/index.js'

async function main() {
  const client = new ConversationClient({
    secret: process.env.CHATBOTKIT_API_SECRET,
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
