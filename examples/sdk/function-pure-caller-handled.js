/* eslint-disable no-console */
import * as dotenv from 'dotenv'

import { ConversationClient } from '@chatbotkit/sdk/conversation/index.js'

dotenv.config()

/**
 * This example demonstrates "pure" function definitions - functions without
 * handlers or static results where the **caller is responsible** for handling
 * function calls externally.
 *
 * When a function has no `handler` and no `result` (neither `data` nor `channel`),
 * the conversation will pause at the function call with `end.reason: 'activity'`.
 * This gives the caller full control to:
 *
 * 1. Inspect the function call and arguments
 * 2. Execute the function using their own logic
 * 3. Manually add the response as an activity message
 * 4. Continue the conversation with the response
 *
 * This pattern is useful when:
 * - You need complete control over function execution flow
 * - Functions require complex orchestration or approval workflows
 * - You want to persist function calls/results to external systems
 * - You're building a multi-step workflow with human-in-the-loop
 * - Functions need to run in a different process or service
 */
async function main() {
  const client = new ConversationClient({
    secret: process.env.CHATBOTKIT_API_SECRET,
  })

  console.log('Starting pure function calling example...')
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')

  // Define pure functions - no handler, no result
  const functions = [
    {
      name: 'search_products',
      description: 'Search for products in the catalog',
      parameters: {
        type: /** @type {const} */ ('object'),
        properties: {
          query: {
            type: 'string',
            description: 'The search query',
          },
          category: {
            type: 'string',
            description: 'Optional product category filter',
          },
          maxResults: {
            type: 'number',
            description: 'Maximum number of results to return',
          },
        },
        required: ['query'],
      },
      // No result property - caller handles this function
    },
    {
      name: 'add_to_cart',
      description: 'Add a product to the shopping cart',
      parameters: {
        type: /** @type {const} */ ('object'),
        properties: {
          productId: {
            type: 'string',
            description: 'The product ID to add',
          },
          quantity: {
            type: 'number',
            description: 'Quantity to add',
          },
        },
        required: ['productId'],
      },
      // No result property - caller handles this function
    },
  ]

  /** @type {import('@chatbotkit/sdk/conversation/v1').Message[]} */
  const messages = [
    {
      type: 'user',
      text: 'I want to find some wireless headphones and add the best one to my cart.',
    },
  ]

  console.log('User:', messages[0].text)
  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')

  let continueLoop = true
  let iteration = 0

  const maxIterations = 10

  // Manual conversation loop - we handle each function call ourselves

  while (continueLoop && iteration < maxIterations) {
    iteration++

    let response

    // Stream the completion

    for await (const item of client
      .complete(null, {
        model: 'claude-4.5-sonnet',
        backstory:
          'You are a helpful shopping assistant. Use the available functions to help customers find and purchase products.',
        messages,
        functions,
      })
      .stream()) {
      if (item.type === 'token') {
        // Optionally handle streaming tokens
      } else if (item.type === 'message') {
        messages.push(item.data)
      } else if (item.type === 'result') {
        response = item.data
      }
    }

    if (!response) {
      throw new Error('No response received')
    }

    console.log(`[Iteration ${iteration}] End reason: ${response.end.reason}`)

    // Check if the conversation ended due to a function call (activity)

    if (response.end.reason === 'activity') {
      // Find the last activity message (function call)

      const lastMessage = messages[messages.length - 1]

      if (lastMessage.type === 'activity' && lastMessage.meta?.activity) {
        const activity = lastMessage.meta.activity

        if (activity.type === 'request') {
          const functionName = activity.function?.name
          const functionArgs = activity.function?.arguments

          console.log(`\n🔧 Function call detected: ${functionName}`)
          console.log(`   Arguments: ${JSON.stringify(functionArgs, null, 2)}`)

          // Execute the function based on its name

          const functionResult = await executeFunction(
            functionName,
            functionArgs
          )

          console.log(`   Result: ${JSON.stringify(functionResult)}\n`)

          // Add the response as an activity message
          // This is the key part - we manually construct the response activity

          messages.push({
            type: 'activity',
            text: 'response',
            meta: {
              activity: {
                type: 'response',
                function: {
                  name: functionName,
                  arguments: functionArgs,
                  result: JSON.stringify(functionResult),
                },
              },
            },
          })

          // Continue the loop to let the AI process the result

          continue
        }
      }
    }

    // If we got a text response or stopped for another reason, we're done

    if (response.text) {
      console.log(`\n🤖 Bot: ${response.text}`)
    }

    if (response.end.reason === 'stop') {
      console.log('\n✓ Conversation completed naturally')
      continueLoop = false
    } else if (response.end.reason === 'error') {
      console.log('\n✗ Conversation ended with error')
      continueLoop = false
    } else if (response.end.reason !== 'activity') {
      console.log(`\n⚠ Unexpected end reason: ${response.end.reason}`)
      continueLoop = false
    }
  }

  if (iteration >= maxIterations) {
    console.log('\n⚠ Reached maximum iteration limit')
  }

  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
  console.log('Conversation complete')
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
}

/**
 * Executes a function by name. In a real application, this would connect
 * to your actual product database, cart service, etc.
 *
 * @param {string} [functionName]
 * @param {Record<string, any>} [args]
 * @returns {Promise<any>}
 */
async function executeFunction(functionName, args) {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 300))

  switch (functionName) {
    case 'search_products':
      // Simulated product search
      return {
        products: [
          {
            id: 'WH-1000XM5',
            name: 'Sony WH-1000XM5 Wireless Headphones',
            price: 349.99,
            rating: 4.8,
            features: ['Noise canceling', '30hr battery', 'Bluetooth 5.2'],
          },
          {
            id: 'AirPods-Max',
            name: 'Apple AirPods Max',
            price: 549.0,
            rating: 4.7,
            features: [
              'Active noise cancellation',
              '20hr battery',
              'Spatial audio',
            ],
          },
          {
            id: 'QC45',
            name: 'Bose QuietComfort 45',
            price: 279.0,
            rating: 4.6,
            features: ['Noise canceling', '24hr battery', 'Comfortable fit'],
          },
        ],
        totalResults: 3,
        query: args?.query,
      }

    case 'add_to_cart':
      // Simulated cart addition
      return {
        success: true,
        cartId: 'cart-abc123',
        productId: args?.productId,
        quantity: args?.quantity || 1,
        message: `Added ${args?.quantity || 1}x ${args?.productId} to cart`,
      }

    default:
      return {
        error: `Unknown function: ${functionName}`,
      }
  }
}

main().catch((error) => {
  console.error('Error:', error)
  process.exit(1)
})
