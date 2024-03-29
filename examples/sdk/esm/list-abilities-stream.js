/* eslint-disable no-console */
import * as dotenv from 'dotenv'

import { SkillsetAbilityClient } from '@chatbotkit/sdk/skillset/ability/index.js'

dotenv.config()

async function main() {
  if (!process.env.CHATBOTKIT_API_SECRET) {
    console.log(`Please set the CHATBOTKIT_API_SECRET environment variable.`)

    process.exit(1)
  }

  if (!process.env.CHATBOTKIT_SKILLSET_ID) {
    console.log(`Please set the CHATBOTKIT_SKILLSET_ID environment variable.`)

    process.exit(1)
  }

  const client = new SkillsetAbilityClient({
    secret: process.env.CHATBOTKIT_API_SECRET,
  })

  for await (const { data } of client
    .list(process.env.CHATBOTKIT_SKILLSET_ID)
    .stream()) {
    console.log(`id: ${JSON.stringify(data.id)}`)
    console.log(`instruction: ${JSON.stringify(data.instruction)}`)
    console.log(`---`)
  }
}

main()
