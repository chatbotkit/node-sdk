import { stream } from '@chatbotkit/next/edge'
import { ChatBotKit } from '@chatbotkit/sdk'

// First, let's create a global instance of the ChatBotKit SDK client. You can
// put it in a separate library file and reuse it elsewhere in your project.

const cbk = new ChatBotKit({
  secret: process.env.CHATBOTKIT_API_SECRET,
})

// This method completes a a conversation in a stateful way. It uses the
// conversationId parameter to identify the conversation and the text parameter
// to send the user input to the ChatbotKit API.

export default async function handler(req) {
  const { text } = await req.json()

  return stream(
    cbk.conversation.complete(req.nextUrl.searchParams.get('conversationId'), {
      // You can pass any other parmters here.

      text,
    })
  )
}

export const config = {
  runtime: 'edge',
}
