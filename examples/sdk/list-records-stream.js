/* eslint-disable no-console */
import * as dotenv from 'dotenv'

import { DatasetRecordClient } from '@chatbotkit/sdk/dataset/record/index.js'

dotenv.config()

async function main() {
  if (!process.env.CHATBOTKIT_API_TOKEN) {
    console.log(`Please set the CHATBOTKIT_API_TOKEN environment variable.`)

    process.exit(1)
  }

  if (!process.env.CHATBOTKIT_DATASET_ID) {
    console.log(`Please set the CHATBOTKIT_DATASET_ID environment variable.`)

    process.exit(1)
  }

  const client = new DatasetRecordClient({
    token: process.env.CHATBOTKIT_API_TOKEN,
  })

  for await (const { data } of client
    .list(process.env.CHATBOTKIT_DATASET_ID)
    .stream()) {
    console.log(`id: ${JSON.stringify(data.id)}`)
    console.log(`text: ${JSON.stringify(data.text)}`)
    console.log(`---`)
  }
}

main()
