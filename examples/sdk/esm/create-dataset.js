/* eslint-disable no-console */

import * as dotenv from 'dotenv'

dotenv.config()

import { DatasetClient } from '@chatbotkit/sdk/dataset/index.js'

async function main() {
  const client = new DatasetClient({
    secret: process.env.CHATBOTKIT_API_SECRET,
  })

  const { id } = await client.create({
    name: 'random',
    description: 'purely random dataset',
    store: 'ada-loom',
  })

  console.log(`* dataset ${id} created`)

  await client.delete(id)

  console.log(`* dataset ${id} deleted`)
}

main()
