import { getToken } from 'next-auth/jwt'
import { ChatBotKit } from '@chatbotkit/sdk'
import { stream } from '@chatbotkit/next/edge'

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
