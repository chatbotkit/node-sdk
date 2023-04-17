import { ConversationClient } from '@chatbotkit/sdk/conversation/index.js'

export default {
  async fetch(request) {
    const body = await request.json()

    const client = new ConversationClient({
      secret: CHATBOTKIT_API_SECRET,
    })

    const messages = [...body.messages, { type: 'user', text: body.input }]

    const response = new Response('', {
      headers: { 'Content-Type': 'text/plain' },
    })

    response.body = new ReadableStream({
      async start(controller) {
        for await (const { type, ...data } of client
          .complete({ model: 'gpt-4', messages })
          .stream()) {
          if (type === 'token') {
            controller.enqueue(data.token)
          }
        }

        controller.close()
      },
    })

    return response
  },
}
