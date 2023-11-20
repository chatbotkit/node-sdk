import * as dotenv from 'dotenv'
import readline from 'node:readline/promises'

dotenv.config()

import { MagicClient } from '@chatbotkit/sdk/magic/index.js'

async function main() {
  const client = new MagicClient({
    secret: process.env.CHATBOTKIT_API_SECRET,
  })

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  const input = await rl.question('input: ')

  process.stdout.write('description: ')

  const { text: result } = await client.generate('@description', {
    text: input,
  })

  process.stdout.write(result)

  process.stdout.write('\n')

  rl.close()
}

main()
