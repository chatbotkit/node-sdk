// Import the ConversationClient class from the ChatBotKit SDK

import { ConversationClient } from '@chatbotkit/sdk/conversation/index.js'

export default {
  // Define a Cloudflare Worker function to handle incoming requests

  async fetch(request) {
    // Parse the incoming request as JSON

    const body = await request.json()

    // Create a new ChatBotKit ConversationClient

    const client = new ConversationClient({
      secret: CHATBOTKIT_API_SECRET,
    })

    // Add previous bot and user messages to the messages array

    const messages = [...body.messages, { type: 'user', text: body.input }]

    const response = new Response(
      // Use a ReadableStream to send the bot response to the client one token at a time

      new ReadableStream({
        async start(controller) {
          for await (const { type, ...data } of client
            .complete({ model: 'gpt-4', messages })
            .stream()) {
            if (type === 'token') {
              // If a token is received, enqueue it to the controller for streaming to the client

              controller.enqueue(data.token)
            }
          }

          controller.close()
        },
      }),
      {
        headers: { 'content-type': 'text/plain' },
      }
    )

    return response
  },
}
