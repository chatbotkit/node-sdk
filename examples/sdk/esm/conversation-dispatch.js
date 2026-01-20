/* eslint-disable no-console */
import * as dotenv from 'dotenv'

import { ChatBotKit } from '@chatbotkit/sdk/index.js'

dotenv.config()

/**
 * This example demonstrates the conversation.dispatch() and channel.subscribe()
 * pattern for background AI task execution. This is useful when you want to:
 *
 * 1. Start an AI conversation that runs in the background
 * 2. Subscribe to real-time events as the AI works
 * 3. Capture structured output when the AI completes its task
 *
 * The key difference from conversation.complete() is that dispatch() returns
 * immediately with a channel ID, allowing the conversation to continue running
 * independently while you subscribe to its events.
 *
 * In this example, we ask the AI to analyze a topic and return key insights
 * in a structured format using a function call.
 */
async function main() {
  // Initialize the ChatBotKit client
  const client = new ChatBotKit({
    secret: process.env.CHATBOTKIT_API_SECRET,
  })

  console.log('Starting background AI analysis...\n')

  // Step 1: Dispatch the conversation to run in the background
  // This returns immediately with a channel ID
  const { channelId } = await client.conversation.dispatch(null, {
    // The AI's system prompt - defines its role and behavior
    backstory:
      'You are an expert analyst who provides clear, structured insights on any topic. Always think carefully before submitting your analysis.',

    // The user's request
    messages: [
      {
        type: 'user',
        text: 'Analyze the topic "artificial intelligence in healthcare" and provide 3-5 key insights about its current impact and future potential.',
      },
    ],

    // Define a function that the AI will call with structured results
    functions: [
      {
        name: 'submit_analysis',
        description:
          'Submit the completed analysis with structured insights. Call this function when your analysis is complete.',
        parameters: {
          type: 'object',
          properties: {
            topic: {
              type: 'string',
              description: 'The topic that was analyzed',
            },
            insights: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  title: {
                    type: 'string',
                    description: 'A brief title for this insight',
                  },
                  description: {
                    type: 'string',
                    description: 'A detailed explanation of this insight',
                  },
                  category: {
                    type: 'string',
                    enum: ['current-impact', 'future-potential', 'challenges'],
                    description: 'The category of this insight',
                  },
                },
                required: ['title', 'description', 'category'],
              },
              description:
                'An array of 3-5 key insights about the topic, covering current impact, future potential, and challenges',
            },
          },
          required: ['topic', 'insights'],
        },
        // Static result to return to the AI when it calls this function
        result: {
          data: {
            status: 'received',
            message: 'Analysis submitted successfully',
          },
        },
        // Setting end: true means the conversation ends when this function is called
        call: {
          end: true,
        },
      },
    ],
  })

  console.log(`✓ Conversation dispatched to channel: ${channelId}`)
  console.log('✓ Subscribing to events...\n')

  // Step 2: Subscribe to the channel to receive streaming events
  // This allows us to see what's happening as the AI works
  for await (const event of client.channel.subscribe(channelId).stream()) {
    // Handle different types of events

    // Message events - complete messages and activities
    if (event.type === 'message') {
      /** @type {{ type: string, data: { type: string, text?: string, meta?: { activity?: { type: string, function?: { name: string, arguments: { topic: string, insights: Array<{ title: string, description: string, category: string }> } } } } } }} */
      const messageData = /** @type {*} */ (event.data)

      // Check if this is the activity message containing our function call
      if (
        messageData.type === 'message' &&
        messageData.data.type === 'activity' &&
        messageData.data.meta?.activity?.type === 'response' &&
        messageData.data.meta?.activity?.function?.name === 'submit_analysis'
      ) {
        // Extract the structured arguments from the function call
        const args = messageData.data.meta.activity.function.arguments

        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
        console.log('📊 Analysis Complete!')
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')

        console.log(`Topic: ${args.topic}\n`)

        console.log('Key Insights:\n')
        args.insights.forEach(
          (
            /** @type {{ title: string, description: string, category: string }} */ insight,
            /** @type {number} */ index
          ) => {
            console.log(`${index + 1}. ${insight.title}`)
            console.log(`   Category: ${insight.category}`)
            console.log(`   ${insight.description}\n`)
          }
        )
      }

      // Regular text messages from the AI (thinking out loud)
      if (
        messageData.type === 'message' &&
        messageData.data.type === 'bot' &&
        messageData.data.text
      ) {
        console.log(`🤖 AI: ${messageData.data.text}\n`)
      }
    }

    // Result event - the conversation has completed
    // @ts-expect-error - The stream may emit 'result' events not typed in the SDK
    if (event.type === 'result') {
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
      console.log('✓ Conversation completed successfully')
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
      break
    }
  }
}

main().catch((error) => {
  console.error('Error:', error)
  process.exit(1)
})
