/* eslint-disable no-console */
import * as dotenv from 'dotenv'

import { ConversationClient } from '@chatbotkit/sdk/conversation/index.js'

dotenv.config()

/**
 * This example demonstrates how to manually drive the agentic loop using a
 * stateful conversation with `limits.iterations` set to 1.
 *
 * In the stateless variant, you keep the full `messages` array locally and send
 * it back on every iteration. In this stateful variant, the server owns the
 * conversation history and you continue the loop by calling
 * `complete(conversationId, ...)`.
 *
 * This is useful when you want:
 *
 * 1. **Manual iteration control** - You decide whether to continue after each step
 * 2. **Server-side state** - The conversation history lives remotely
 * 3. **Persistence** - Messages remain attached to the conversation
 * 4. **Observability** - You can inspect the saved conversation after the loop
 *
 * By setting `limits.iterations` to 1, the server will return after each
 * agentic iteration with `end.reason: 'iteration'`, allowing you to decide
 * whether to continue the loop.
 */
async function main() {
  const client = new ConversationClient({
    secret: process.env.CHATBOTKIT_API_SECRET,
  })

  const model = 'claude-4.5-sonnet'
  const userPrompt =
    'What is the weather in San Francisco and what time is it in Los Angeles?'

  // Define a simple function that the AI can call
  const functions = [
    {
      name: 'get_weather',
      description: 'Get the current weather for a location',
      parameters: {
        type: /** @type {const} */ ('object'),
        properties: {
          location: {
            type: 'string',
            description: 'The city and state, e.g. San Francisco, CA',
          },
        },
        required: ['location'],
      },
      // The result that will be returned to the AI when this function is called
      result: {
        data: {
          temperature: 72,
          conditions: 'sunny',
          humidity: 45,
        },
      },
    },
    {
      name: 'get_time',
      description: 'Get the current time for a timezone',
      parameters: {
        type: /** @type {const} */ ('object'),
        properties: {
          timezone: {
            type: 'string',
            description: 'The timezone, e.g. America/Los_Angeles',
          },
        },
        required: ['timezone'],
      },
      result: {
        data: {
          time: '2:30 PM',
          date: 'Monday, January 26, 2026',
        },
      },
    },
  ]

  const conversation = await client.create({ model })

  let iterationCount = 0
  const maxIterations = 10 // Safety limit to prevent infinite loops
  let shouldSendUserPrompt = true

  console.log('Starting manually-driven stateful agentic loop...')
  console.log(`Conversation ID: ${conversation.id}`)
  console.log('User:', userPrompt)
  console.log('---')

  // The manual agentic loop
  while (iterationCount < maxIterations) {
    iterationCount++

    console.log(`\n[Iteration ${iterationCount}]`)

    let response

    // Call complete with iterations limit of 1
    // This ensures we get control back after each agentic step.
    // After the first iteration, omit text so the server continues from the
    // persisted conversation state instead of creating a new user turn.
    for await (const item of client
      .complete(conversation.id, {
        ...(shouldSendUserPrompt ? { text: userPrompt } : {}),
        functions,
        limits: {
          iterations: 1, // Return after each iteration
        },
      })
      .stream()) {
      if (item.type === 'result') {
        response = item.data
      }
    }

    shouldSendUserPrompt = false

    if (!response) {
      throw new Error('Unexpected state') // @note should not happen
    }

    console.log(`End reason: ${response.end.reason}`)
    console.log(`Response text: ${response.text || '(activity only)'}`)

    // Here you could add custom logic between iterations:
    // - Log to a monitoring system
    // - Check for custom termination conditions
    // - Add delays for rate limiting
    // - Persist intermediate state
    // - Transform or filter the response

    // Check the end reason to determine if we should continue
    if (response.end.reason === 'iteration') {
      // The model wanted to continue but hit the iteration limit we set
      console.log('→ Model hit iteration limit, continuing manually...')
      continue
    } else if (response.end.reason === 'stop') {
      // Natural completion - the model has finished
      console.log('→ Model completed naturally')
      break
    } else if (response.end.reason === 'activity') {
      // The model stopped at an activity (function call without auto-continue)
      console.log('→ Model stopped at activity')
      break
    } else if (response.end.reason === 'error') {
      // An error occurred
      console.error('→ Error occurred during completion')
      break
    } else {
      // Unknown reason, stop to be safe
      console.log(`→ Unknown end reason: ${response.end.reason}`)
      break
    }
  }

  if (iterationCount >= maxIterations) {
    console.log('\nReached maximum iteration limit')
  }

  console.log('\n---')
  console.log('Final persisted conversation:')

  for (const message of (await client.message.list(conversation.id)).items) {
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
