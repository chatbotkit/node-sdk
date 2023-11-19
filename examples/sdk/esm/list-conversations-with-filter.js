/* eslint-disable no-console */

import * as dotenv from 'dotenv'

dotenv.config()

import { ConversationClient } from '@chatbotkit/sdk/conversation/index.js'

async function main() {
  const client = new ConversationClient({
    secret: process.env.CHATBOTKIT_API_SECRET,
  })

  for await (const { data } of client
    .list({ meta: { app: 'algo' } })
    .stream()) {
    console.log(`id: ${JSON.stringify(data.id)}`)
    console.log(`backstory: ${JSON.stringify(data.backstory)}`)
    console.log(`---`)
  }
}

main()
