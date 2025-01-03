import { ChatBotKit } from '@chatbotkit/sdk'

// First, let's create a global instance of the ChatBotKit SDK client. You can
// put it in a separate library file and reuse it elsewhere in your project.

const cbk = new ChatBotKit({
  secret: process.env.CHATBOTKIT_API_SECRET,
})

// This method creates a conversation id and returns it to the front-end.

export default async function handler(req, res) {
  // Step 1: create a conversation

  const { id: conversationId } = await cbk.conversation.create({
    // You can pass any botId or a combination between backstory, model,
    // datasetId and skillsetId parameters here.
  })

  // Step 2: pass the conversationId the front-end

  return res.status(200).json({ conversationId })
}
