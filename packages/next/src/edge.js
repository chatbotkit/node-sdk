/**
 * @typedef {Generator<object>|AsyncGenerator<object>} IterableObject
 */

/**
 * This function can be used to stream any ChatBotKit streaming response to the
 * client. It will automatically encode the response as JSONL and it is fully
 * compatible with the @chatbotkit/react useConversationManager hook.
 *
 * @example
 * ```js
 * // on the server
 *
 * import { ChatBotKit } from '@chatbotkit/sdk'
 * import { stream } from '@chatbotkit/next/edge'
 *
 * const cbk = new ChatBotKit({
 *  secret: process.env.CHATBOTKIT_API_SECRET,
 * })
 *
 * export default async function handler(req) {
 *  const { messages } = await req.json()
 *
 *  return stream(cbk.conversation.complete(null, { messages }))
 * }
 *
 * export const config = {
 *  runtime: 'edge',
 * }
 *
 * // on the client
 * import { useConversationManager } from '@chatbotkit/react'
 *
 * const { thinking, text, setText, messages, submit } = useConversationManager({
 *   endpoint: '/api/conversation/complete',
 * })
 * ```
 *
 * @param {IterableObject|{stream: () => IterableObject}} source
 * @returns {Response}
 */
export function stream(source) {
  const encoder = new TextEncoder()

  return new Response(
    new ReadableStream({
      async start(controller) {
        /** @type {IterableObject} */
        let it

        if ('next' in source && typeof source.next === 'function') {
          it = source
        } else if ('stream' in source && typeof source.stream === 'function') {
          it = source.stream()
        } else {
          throw new Error('Invald source')
        }

        try {
          for await (const event of it) {
            controller.enqueue(encoder.encode(`${JSON.stringify(event)}\n`))
          }
        } catch (e) {
          controller.error(e)
        }

        controller.close()
      },
    }),
    { headers: { 'Content-Type': 'application/jsonl' } }
  )
}
