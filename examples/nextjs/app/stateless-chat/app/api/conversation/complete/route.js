import { stream } from '@chatbotkit/next/edge'
import { ChatBotKit } from '@chatbotkit/sdk'

// First, let's create a global instance of the ChatBotKit SDK client. You can
// put it in a separate library file and reuse it elsewhere in your project.

const cbk = new ChatBotKit({
  secret: process.env.CHATBOTKIT_API_SECRET,
})

// This method completes a conversation provided a list of messages. It is
// completely stateless, i.e. the messages are not stored. However, all CBK
// features are available. It can be combined with datasets, skillsets and other
// platform features. In this example, we also utilise a convenience
// method from the ChatBotKit Next SDK to stream the response back to the
// client.

export async function POST(req) {
  const { messages } = await req.json()

  return stream(
    cbk.conversation.complete(null, {
      // You can pass any botId or a combination between backstory, model,
      // datasetId and skillsetId parameters here

      messages,
    })
  )
}
