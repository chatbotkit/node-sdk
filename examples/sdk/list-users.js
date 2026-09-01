/* eslint-disable no-console */
import * as dotenv from 'dotenv'

import { UserClient } from '@chatbotkit/sdk/user/index.js'

dotenv.config()

async function main() {
  if (!process.env.CHATBOTKIT_API_SECRET) {
    console.log(`Please set the CHATBOTKIT_API_SECRET environment variable.`)

    process.exit(1)
  }

  const client = new UserClient({
    secret: process.env.CHATBOTKIT_API_SECRET,
  })

  for await (const { data } of client.list().stream()) {
    console.log(`id: ${JSON.stringify(data.id)}`)
    console.log(`name: ${JSON.stringify(data.name)}`)
    console.log(`---`)
  }
}

main()
