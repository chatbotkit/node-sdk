/* globals globalThis */
import { useMemo } from 'react'

import { cloneAndExtend } from '../utils/object.js'
import { consume } from '../utils/stream.js'

import { ConversationClient } from '@chatbotkit/sdk'

/**
 * @typedef {{
 *   maxTokens?: number,
 *   temperature?: number,
 *   frequencyPenalty?: number,
 *   presencePenalty?: number,
 *   seed?: number,
 *   interactionMaxMessages?: number,
 *   region?: 'us'|'eu'
 * }} ModelConfig
 *
 * @typedef {string|{name: string, config?: ModelConfig}} Model
 */

/**
 * @typedef {{
 *   id?: string,
 *   type: 'bot'|'user'|'context'|'instruction'|'backstory'|'activity',
 *   text: string,
 *   meta?: Record<string,any>
 * }} Message
 */

/**
 * @typedef {string} EndpointURL
 * @typedef {(conversationId: any, request: any) => AsyncGenerator<any>} EndpointFunction
 */

/**
 * @typedef {{
 *   client?: ConversationClient,
 *   endpoint?: EndpointURL|EndpointFunction,
 *   token?: string,
 *   conversationId?: string,
 *   backstory?: string,
 *   model?: Model,
 *   datasetId?: string,
 *   skillsetId?: string,
 *   privacy?: boolean,
 *   moderation?: boolean
 * }} UseConversationManagerRemoteOptions
 *
 * @typedef {(messages: Message[]) => AsyncGenerator<any,null,any>} UseConversationManagerRemoteResult
 */

/**
 * @param {UseConversationManagerRemoteOptions} options
 * @returns {UseConversationManagerRemoteResult}
 */
export function useConversationManagerRemote({
  client: _client,
  endpoint,
  conversationId,
  backstory,
  model,
  datasetId,
  skillsetId,
  privacy,
  moderation,
  token,
  ...rest
}) {
  const client = useMemo(() => {
    if (typeof endpoint === 'function') {
      return {
        complete(
          /** @type {null|string} */ conversationId,
          /** @type {any} */ options
        ) {
          return {
            async *stream() {
              yield* consume(endpoint(conversationId, options))
            },
          }
        },
      }
    }

    const options = { ...rest, secret: token || '' }

    let thisClient = _client || new ConversationClient(options)

    const extension = {}

    if (typeof endpoint === 'string') {
      extension.url = new URL(
        globalThis.window?.location?.origin || 'about:blank'
      )

      extension.endpoints = {
        '/api/v1/conversation/complete': endpoint,
      }
    }

    if (token) {
      extension.secret = token
    }

    if (Object.keys(extension).length === 0) {
      return thisClient
    } else {
      return cloneAndExtend(thisClient, extension)
    }
  }, [_client, endpoint, token])

  const remote = useMemo(() => {
    if (conversationId) {
      return /** @type {UseConversationManagerRemoteResult} */ (
        async function* (messages) {
          const lastUserMessage = messages.findLast(
            (message) => message.type === 'user'
          )

          if (!lastUserMessage) {
            throw new Error('No user message found')
          }

          yield* client
            .complete(conversationId, { text: lastUserMessage.text })
            .stream()
        }
      )
    } else {
      return /** @type {UseConversationManagerRemoteResult} */ (
        async function* (messages) {
          yield* client
            .complete(null, {
              // @todo uncomment once supported
              // botId: botId,
              backstory: backstory,
              model: model,
              datasetId: datasetId,
              skillsetId: skillsetId,
              privacy: privacy,
              moderation: moderation,
              messages: messages,
            })
            .stream()
        }
      )
    }
  }, [client])

  return remote
}

export default useConversationManagerRemote
