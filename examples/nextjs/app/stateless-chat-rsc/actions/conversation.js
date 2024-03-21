'use server'

import { ChatBotKit } from '@chatbotkit/sdk'
import { stream } from '@chatbotkit/react/utils/stream'

// First, let's create a global instance of the ChatBotKit SDK client. You can
// put it in a separate library file and reuse it elsewhere in your project.

const cbk = new ChatBotKit({
  secret: process.env.CHATBOTKIT_API_SECRET,
})

// Now let's define a server action that will be called by the client to start a
// new conversation. We accept some initial input from the client and allow for
// further configuration of the conversation. Finally the response is streamed
// back to the client.

export async function complete(_, { messages }) {
  return stream(
    cbk.conversation.complete(null, {
      // You can pass any botId or a combination between backstory, model,
      // datasetId and skillsetId parameters here

      messages,
    })
  )
}
