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
 *
 * import { AutoTextarea, useConversationManager } from '@chatbotkit/react'
 *
 * export default function Index() {
 *   const {
 *     thinking,
 * 
 *     text,
 *     setText,
 * 
 *     messages,
 * 
 *     submit
 *   } = useConversationManager({
 *     endpoint: '/api/conversation/complete',
 *   })
 *
 *   function handleOnKeyDown(event) {
 *     if (event.keyCode === 13) {
 *       event.preventDefault()
 *
 *       submit()
 *     }
 *   }
 *
 *   return (
 *     <div style={{ fontFamily: 'monospace', padding: '10px' }}>
 *       <div>
 *         {messages.map(({ id, type, text }) => {
 *           switch (type) {
 *             case 'user':
 *               return (
 *                 <div key={id}>
 *                   <strong>user:</strong> {text}
 *                 </div>
 *               )
 *
 *             case 'bot':
 *               return (
 *                 <div key={id}>
 *                   <strong>bot:</strong> {text}
 *                 </div>
 *               )
 *           }
 *         })}
 *         {thinking ? (
 *           <div key="thinking">
 *             <strong>bot:</strong> thinking...
 *           </div>
 *         ) : null}
 *       </div>
 *       <AutoTextarea
 *         value={text}
 *         onChange={(e) => setText(e.target.value)}
 *         onKeyDown={handleOnKeyDown}
 *         placeholder="Type something..."
 *         style={{
 *           border: 0,
 *           outline: 'none',
 *           resize: 'none',
 *           width: '100%',
 *           marginTop: '10px',
 *         }}
 *       />
 *     </div>
 *   )
 * }
 * ```
 *
 * @param {IterableObject|{stream: () => IterableObject}} source
 * @returns {Response}
 */
export function stream(source: IterableObject | {
    stream: () => IterableObject;
}): Response;
export type IterableObject = Generator<object> | AsyncGenerator<object>;
