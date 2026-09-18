/* eslint-disable no-console */
import * as dotenv from 'dotenv'

import { DatasetClient } from '@chatbotkit/sdk/dataset/index.js'

dotenv.config()

async function main() {
  const client = new DatasetClient({
    token: process.env.CHATBOTKIT_API_TOKEN,
  })

  const { id } = await client.create({
    name: 'random',
    description: 'purely random dataset',
  })

  console.log(`* dataset ${id} created`)

  await client.delete(id)

  console.log(`* dataset ${id} deleted`)
}

main()
