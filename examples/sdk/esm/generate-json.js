/* eslint-disable no-console */
import * as dotenv from 'dotenv'

import { MagicClient } from '@chatbotkit/sdk/magic/index.js'

import readline from 'node:readline/promises'

dotenv.config()

async function main() {
  const client = new MagicClient({
    secret: process.env.CHATBOTKIT_API_SECRET,
    host: 'congenial-waffle-rwxw775pg6fxjrr-8080.app.github.dev',
  })

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  for (;;) {
    const prompt = await rl.question('prompt: ')

    const { text: result } = await client.generate('@json', {
      text: prompt,
    })

    console.log(`result: ${result}`)
  }
}

main()
