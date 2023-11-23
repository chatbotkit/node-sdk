/* eslint-disable no-console */

import * as dotenv from 'dotenv'

dotenv.config()

import { DatasetRecordClient } from '@chatbotkit/sdk/dataset/record/index.js'

async function main() {
  if (!process.env.CHATBOTKIT_API_SECRET) {
    console.log(`Please set the CHATBOTKIT_API_SECRET environment variable.`)

    process.exit(1)
  }

  if (!process.env.CHATBOTKIT_DATASET_ID) {
    console.log(`Please set the CHATBOTKIT_DATASET_ID environment variable.`)

    process.exit(1)
  }

  const client = new DatasetRecordClient({
    secret: process.env.CHATBOTKIT_API_SECRET,
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
