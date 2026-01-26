/* eslint-disable no-console */
import * as dotenv from 'dotenv'

import { ConversationClient } from '@chatbotkit/sdk/conversation/index.js'

dotenv.config()

/**
 * This example demonstrates how to manually drive the agentic loop using the
 * stateless complete method with `limits.iterations` set to 1.
 *
 * Normally, when you use conversation.complete(), the server handles multiple
 * agentic iterations automatically (tool calls, function executions, and
 * continued responses). This is convenient and efficient for most use cases.
 *
 * However, there are scenarios where you might want full control over each
 * iteration step:
 *
 * 1. **Observability** - You want to log, monitor, or audit each step
 * 2. **Custom logic** - You need to inject custom logic between iterations
 * 3. **Rate limiting** - You want to add delays or rate limiting between calls
 * 4. **Early termination** - You want custom conditions to stop the loop
 * 5. **State persistence** - You need to persist state between iterations
 *
 * By setting `limits.iterations` to 1, the server will return after each
 * agentic iteration with `end.reason: 'iteration'`, allowing you to decide
 * whether to continue the loop.
 */
async function main() {
  const client = new ConversationClient({
    secret: process.env.CHATBOTKIT_API_SECRET,
  })

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

  /** @type {import('@chatbotkit/sdk/conversation/v1').Message[]} */
  const messages = [
    {
      type: 'user',
      text: 'What is the weather in San Francisco and what time is it in Los Angeles?',
    },
  ]

  let iterationCount = 0
  const maxIterations = 10 // Safety limit to prevent infinite loops

  console.log('Starting manually-driven agentic loop...')
  console.log('User:', messages[0].text)
  console.log('---')

  // The manual agentic loop
  while (iterationCount < maxIterations) {
    iterationCount++

    console.log(`\n[Iteration ${iterationCount}]`)

    let response

    // Call complete with iterations limit of 1
    // This ensures we get control back after each agentic step
    for await (const item of client
      .complete(null, {
        model: 'claude-4.5-sonnet',
        messages,
        functions,
        limits: {
          iterations: 1, // Return after each iteration
        },
      })
      .stream()) {
      if (item.type === 'result') {
        response = item.data
      } else if (item.type === 'message') {
        messages.push(item.data)
      }
    }

    if (!response) {
      return // @note should not happen
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
    console.log('\n⚠️ Reached maximum iteration limit')
  }

  console.log('\n---')
  console.log('Final conversation:')

  for (const msg of messages) {
    if (msg.type !== 'user' && msg.type !== 'bot') {
      continue
    }

    const prefix = msg.type === 'user' ? 'User' : 'Bot'

    console.log(`${prefix}: ${msg.text}`)
  }
}

main().catch((error) => {
  console.error('Error:', error)

  process.exit(1)
})
