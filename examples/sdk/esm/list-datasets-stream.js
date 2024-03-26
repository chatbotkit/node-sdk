/* eslint-disable no-console */
import * as dotenv from 'dotenv'

import { DatasetClient } from '@chatbotkit/sdk/dataset/index.js'

dotenv.config()

async function main() {
  const client = new DatasetClient({
    secret: process.env.CHATBOTKIT_API_SECRET,
  })

  for await (const { data } of client.list().stream()) {
    console.log(`id: ${JSON.stringify(data.id)}`)
    console.log(`name: ${JSON.stringify(data.name)}`)
    console.log(`description: ${JSON.stringify(data.description)}`)
    console.log(`---`)
  }
}

main()
