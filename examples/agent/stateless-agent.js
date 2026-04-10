/* eslint-disable no-console */
import * as dotenv from 'dotenv'

import { execute } from '@chatbotkit/agent'
import { ChatBotKit } from '@chatbotkit/sdk'

import { z } from 'zod'

dotenv.config()

const tools = {
  getWeather: {
    description: 'Get the current weather for a location',
    input: z.object({
      location: z
        .string()
        .describe('The city and state, e.g. San Francisco, CA'),
    }),
    handler: async ({ location }) => ({
      location,
      temperature: 72,
      conditions: 'sunny',
      humidity: 45,
    }),
  },
  getTime: {
    description: 'Get the current time for a timezone',
    input: z.object({
      timezone: z.string().describe('The timezone, e.g. America/Los_Angeles'),
    }),
    handler: async ({ timezone }) => ({
      timezone,
      time: '2:30 PM',
      date: 'Monday, January 26, 2026',
    }),
  },
}

async function main() {
  const client = new ChatBotKit({
    secret: process.env.CHATBOTKIT_API_SECRET,
  })

  /** @type {import('@chatbotkit/sdk/conversation/v1').Message[]} */
  const messages = [
    {
      type: 'user',
      text: 'What is the weather in San Francisco and what time is it in Los Angeles?',
    },
  ]

  console.log('Running stateless agent example...')
  console.log('User:', messages[0].text)
  console.log('---')

  for await (const event of execute({
    client,
    model: 'claude-4.5-sonnet',
    messages,
    tools,
    maxIterations: 10,
  })) {
    if (event.type === 'iteration') {
      console.log(`\n[Iteration ${event.data.iteration}]`)
    }

    if (event.type === 'toolCallStart') {
      console.log(
        `Calling ${event.data.name} with ${JSON.stringify(event.data.args)}`
      )
    }

    if (event.type === 'toolCallEnd') {
      console.log(
        `Completed ${event.data.name}: ${JSON.stringify(event.data.result)}`
      )
    }

    if (event.type === 'toolCallError') {
      console.error(`Tool error in ${event.data.name}: ${event.data.error}`)
    }

    if (event.type === 'exit') {
      console.log(`\nExit code: ${event.data.code}`)

      if (event.data.message) {
        console.log(`Exit message: ${event.data.message}`)
      }
    }
  }

  console.log('\n---')
  console.log('Final local conversation:')

  for (const message of messages) {
    if (message.type !== 'user' && message.type !== 'bot') {
      continue
    }

    const prefix = message.type === 'user' ? 'User' : 'Bot'

    console.log(`${prefix}: ${message.text}`)
  }
}

main().catch((error) => {
  console.error('Error:', error)

  process.exit(1)
})
