import { getToken } from 'next-auth/jwt'

import { stream } from '@chatbotkit/next/edge'
import { ChatBotKit } from '@chatbotkit/sdk'

export default async function handler(req) {
  const session = await getToken({ req })

  if (!session) {
    throw new Error(`Not authenticated`)
  }

  const cbk = new ChatBotKit({
    secret: process.env.CHATBOTKIT_API_SECRET,
    runAsUserId: session.user.id,
  })

  const { messages } = await req.json()

  return stream(
    cbk.conversation.complete(null, {
      messages,
    })
  )
}

export const config = {
  runtime: 'edge',
}
