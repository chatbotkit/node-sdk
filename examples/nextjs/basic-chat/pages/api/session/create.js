import { ChatBotKit } from '@chatbotkit/sdk'

// First, let's create a global instance of the ChatBotKit SDK client. You can
// put it in a separate library file and reuse it elsewhere in your project.

const cbk = new ChatBotKit({
  secret: process.env.CHATBOTKIT_API_SECRET,
})

// This method creates a conversation and a session token. We can use the
// session token to initialise the React SDK. This way we do not need to build
// our own backend but we can leverage ChatBotKit API directly and with that all
// other goodies such globally distributed endpoints on the edge and streaming.

export default async function handler(req, res) {
  // Step 1: create a conversation

  const { id: conversationId } = await cbk.conversation.create({
    // You can pass any botId or a combination between backstory, model,
    // datasetId and skillsetId parameters here
  })

  // Step 2: create an authentication token for this conversation

  const { token } = await cbk.conversation.session.create(conversationId, {
    durationInSeconds: 3600, // 1 hour
  })

  // Step 3: pass the conversationId and the token to the front-end

  return res.status(200).json({ conversationId, token })
}
