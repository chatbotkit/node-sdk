/* eslint-disable no-console */
import * as dotenv from 'dotenv'

import { ChatBotKit } from '@chatbotkit/sdk/index.js'

import { randomBytes } from 'node:crypto'

dotenv.config()

/**
 * This example demonstrates channel-based function calling using the
 * `dispatch()` method for **background/async conversation execution**.
 *
 * ## How Dispatch Works
 *
 * The `dispatch()` method starts a conversation that runs in the background
 * on the server. It immediately returns a `channelId` that you can subscribe
 * to for receiving events as the conversation progresses.
 *
 * This pattern is ideal for:
 * - Long-running conversations that shouldn't block your application
 * - Background AI tasks (analysis, processing, etc.)
 * - Webhook-style integrations where you monitor progress asynchronously
 * - Scenarios where you want the server to manage the conversation lifecycle
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
 * When subscribing to the dispatch channel, watch for:
 * - `waitForChannelMessageBegin` - Signals you need to execute a function
 *   and publish the result to the specified channel
 * - `message` - Contains bot responses and activity information
 * - `result` - Indicates the conversation has completed
 */
async function main() {
  const client = new ChatBotKit({
    secret: process.env.CHATBOTKIT_API_SECRET,
  })

  // Generate unique channel IDs (must be at least 16 characters)

  const weatherChannelId = `weather-${randomBytes(16).toString('hex')}`

  console.log('Starting function calling example...')
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')

  // Dispatch a conversation with both static and channel-based functions

  const { channelId } = await client.conversation.dispatch(null, {
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

  console.log(`✓ Conversation dispatched`)
  console.log(`✓ Weather function channel: ${weatherChannelId}`)
  console.log('✓ Subscribing to events...\n')

  // Subscribe to the channel to receive streaming events - all events come as
  // type: 'subscribe' or 'message'. Events of type 'message' come  with the
  // actual event type in event.data.type

  for await (const event of client.channel.subscribe(channelId).stream()) {
    if (event.type !== 'message') {
      continue
    }

    const eventData = /** @type {{ type: string, data: any }} */ (event.data)

    // Handle waitForChannelMessageBegin - this is when we need to execute
    // the function and publish the result to the channel

    if (eventData.type === 'waitForChannelMessageBegin') {
      /** @type {{ channel: string, function: { name: string, args: Record<string,any> } }} */
      const waitData = eventData.data

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

    if (eventData.type === 'message') {
      /** @type {{ type: string, text?: string, meta?: { activity?: { type: string, function?: { name: string, arguments: Record<string,any> } } } }} */
      const messageData = eventData.data

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

    // Result event - conversation completed

    if (eventData.type === 'result') {
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
      console.log('✓ Conversation completed')
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
      break
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
