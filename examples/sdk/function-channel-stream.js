/* eslint-disable no-console */
import * as dotenv from 'dotenv'

import { ChatBotKit } from '@chatbotkit/sdk/index.js'

import { randomBytes } from 'node:crypto'

dotenv.config()

/**
 * This example demonstrates channel-based function calling using the
 * `complete().stream()` method for **inline/synchronous conversation execution**.
 *
 * ## How Complete Stream Works
 *
 * The `complete().stream()` method processes a conversation inline, streaming
 * events directly to your code as they occur. You iterate over the stream
 * and handle events in real-time within the same execution context.
 *
 * This pattern is ideal for:
 * - Interactive conversations where you need immediate feedback
 * - Chat interfaces that display tokens as they arrive
 * - Scenarios where you want direct control over the conversation flow
 * - Applications that need to process each event synchronously
 *
 * ## Function Calling Approaches Demonstrated
 *
 * 1. **Static Results** (`result.data`) - Predetermined responses returned
 *    immediately to the AI without external execution.
 *
 * 2. **Channel-Based Results** (`result.channel`) - The AI waits for you to
 *    execute the function and publish the result back via a channel.
 *
 * ## Key Events
 *
 * When streaming from complete(), watch for:
 * - `waitForChannelMessageBegin` - Signals you need to execute a function
 *   and publish the result to the specified channel
 * - `token` - Individual tokens for real-time display
 * - `message` - Complete messages (bot responses, activities)
 * - `result` - Final result with conversation metadata
 *
 * ## Comparison with Dispatch
 *
 * | Aspect | complete().stream() | dispatch() |
 * |--------|---------------------|------------|
 * | Execution | Inline, blocking | Background, async |
 * | Event source | Direct from stream | Via channel.subscribe() |
 * | Use case | Interactive chat | Background tasks |
 * | Control | Direct in your loop | Requires subscription |
 */
async function main() {
  const client = new ChatBotKit({
    secret: process.env.CHATBOTKIT_API_SECRET,
  })

  // Generate unique channel IDs (must be at least 16 characters)

  const weatherChannelId = `weather-${randomBytes(16).toString('hex')}`

  console.log('Starting function calling example (stream)...')
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')

  // Use complete().stream() for inline conversation processing

  const stream = client.conversation
    .complete(null, {
      model: 'claude-4.5-sonnet',

      backstory:
        'You are a helpful assistant that provides weather and time information.',

      messages: [
        {
          type: 'user',
          text: 'What time is it in New York, and what is the weather like there?',
        },
      ],

      functions: [
        // Static result function - returns immediately without external execution
        {
          name: 'get_current_time',
          description: 'Get the current time for a specified timezone',
          parameters: {
            type: /** @type {const} */ ('object'),
            properties: {
              timezone: {
                type: 'string',
                description: 'The timezone, e.g. America/New_York',
              },
            },
            required: ['timezone'],
          },
          // Static result: The AI receives this data immediately when it calls the function
          result: {
            data: {
              time: '10:30 AM',
              date: 'Monday, January 26, 2026',
              timezone: 'America/New_York',
            },
          },
        },

        // Channel-based function - requires caller to execute and publish result
        {
          name: 'get_weather',
          description: 'Get the current weather for a location',
          parameters: {
            type: /** @type {const} */ ('object'),
            properties: {
              location: {
                type: 'string',
                description: 'The city name, e.g. New York',
              },
            },
            required: ['location'],
          },
          // Channel result: The caller must execute this function and publish the result
          result: {
            channel: weatherChannelId,
          },
        },
      ],
    })
    .stream()

  console.log(`✓ Starting conversation stream`)
  console.log(`✓ Weather function channel: ${weatherChannelId}`)
  console.log('✓ Processing events...\n')

  // Process events from the stream
  // Events come directly from complete().stream() - no subscription needed

  for await (const event of stream) {
    // Handle waitForChannelMessageBegin - this is when we need to execute
    // the function and publish the result to the channel

    if (event.type === 'waitForChannelMessageBegin') {
      /** @type {{ channel: string, function: { name: string, args: Record<string,any> } }} */
      const waitData = /** @type {*} */ (event.data)

      const functionName = waitData.function.name
      const functionArgs = waitData.function.args
      const resultChannel = waitData.channel

      console.log(`🔧 Channel function call: ${functionName}`)
      console.log(`   Arguments: ${JSON.stringify(functionArgs)}`)
      console.log(`   Channel: ${resultChannel}`)
      console.log(`   → Executing function locally...`)

      // Execute the function based on its name

      let functionResult

      if (functionName === 'get_weather') {
        functionResult = await simulateWeatherAPI(functionArgs?.location)
      } else {
        functionResult = { error: `Unknown function: ${functionName}` }
      }

      console.log(`   → Publishing result to channel...`)

      // Publish the result back to the channel

      await client.channel.publish(resultChannel, {
        message: functionResult,
      })

      console.log(`   ✓ Result published\n`)
    }

    // Handle message events (bot messages, activity messages)

    if (event.type === 'message') {
      /** @type {{ type: string, text?: string, meta?: { activity?: { type: string, function?: { name: string, arguments: Record<string,any> } } } }} */
      const messageData = /** @type {*} */ (event.data)

      // Log function calls (request activity)

      if (
        messageData.type === 'activity' &&
        messageData.meta?.activity?.type === 'request'
      ) {
        const activity = messageData.meta.activity
        const functionName = activity.function?.name
        const functionArgs = activity.function?.arguments

        console.log(`🔧 Function call detected: ${functionName}`)
        console.log(`   Arguments: ${JSON.stringify(functionArgs)}`)
      }

      // Regular bot text messages

      if (messageData.type === 'bot' && messageData.text) {
        console.log(`🤖 Bot: ${messageData.text}\n`)
      }
    }

    // Optionally handle tokens for real-time display
    // if (event.type === 'token') {
    //   process.stdout.write(event.data.token)
    // }

    // Result event - conversation completed
    if (event.type === 'result') {
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
      console.log('✓ Conversation completed')
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    }
  }
}

/**
 * Simulates a weather API call. In production, this would call a real weather service.
 *
 * @param {string} [location]
 * @returns {Promise<{temperature: number, conditions: string, humidity: number, location: string}>}
 */
async function simulateWeatherAPI(location) {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  return {
    temperature: 42,
    conditions: 'partly cloudy',
    humidity: 65,
    location: location || 'Unknown',
  }
}

main().catch((error) => {
  console.error('Error:', error)
  process.exit(1)
})
