import { getToken } from 'next-auth/jwt'

import { stream } from '@chatbotkit/next/edge'
import { ChatBotKit } from '@chatbotkit/sdk'

import { v5 as uuidv5 } from 'uuid'

// First, let's create a global instance of the ChatBotKit SDK client. You can
// put it in a separate library file and reuse it elsewhere in your project.

const cbk = new ChatBotKit({
  secret: process.env.CHATBOTKIT_API_SECRET,
})

// Static namespace for generating consistent UUIDs

const NAMESPACE = '6ba7b810-9dad-11d1-80b4-00c04fd430c8'

// This method completes a conversation provided a list of messages. It is
// completely stateless, i.e. the messages are not stored. However, all CBK
// features are available. It can be combined with datasets, skillsets and other
// platform features. In this example, we also utilize a convenience method from
// the ChatBotKit Next SDK to stream the response back to the client.
//
// This endpoint demonstrates the use of Contacts, which represent end-users
// who interact with your AI agents. Contacts enable conversation tracking,
// user management, and personalized experiences. By providing a fingerprint
// (a unique identifier), the system automatically creates or retrieves the
// contact, ensuring all conversations are properly associated with the user.
//
// Contacts also unlock authentication management, allowing users to authenticate
// their sessions so AI agents can connect to 3rd-party systems on their behalf
// (such as Google, Microsoft, and other integrations).
//
// @see https://chatbotkit.com/manuals/contacts.md
//
// This endpoint is protected by NextAuth session validation.

export default async function handler(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })

  if (!token) {
    return new Response('Unauthorized', { status: 401 })
  }

  const { messages } = await req.json()

  // Generate a consistent fingerprint based on user email
  const fingerprint = uuidv5(token.email, NAMESPACE)

  return stream(
    cbk.conversation.complete(null, {
      // You can pass any botId or a combination between backstory, model,
      // datasetId and skillsetId parameters here

      messages,

      contactId: {
        fingerprint,

        name: token.name,
        email: token.email,
      },
    })
  )
}

export const config = {
  runtime: 'edge',
}
