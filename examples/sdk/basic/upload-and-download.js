import * as dotenv from 'dotenv'

dotenv.config()

import { FileClient } from '@chatbotkit/sdk/file/index.js'

/**
 * The following method creates a file, uploads it and subsequently downloads it.
 */
async function main() {
  const client = new FileClient({
    secret: process.env.CHATBOTKIT_API_SECRET,
  })

  const { id } = await client.create({ name: 'TEST' })

  await client.upload(id, {
    name: 'doc.csv',
    type: 'text/csv',
    data: 'field1,field2,field3',
  })

  const { data } = await client.download(id)

  console.log(Buffer.from(data).toString())
}

main()
