/* globals globalThis */
import { useMemo } from 'react'

import { cloneAndExtend } from '../utils/object.js'
import { consume } from '../utils/stream.js'

import { ConversationClient } from '@chatbotkit/sdk'

/**
 * @typedef {import('@chatbotkit/sdk/conversation/v1').Message} Message
 *
 * @typedef {import('@chatbotkit/sdk/model/v1').Model} Model
 */

/**
 * @typedef {string} EndpointURL
 * @typedef {(options: any) => AsyncGenerator<any>} EndpointFunction
 */

/**
 * @typedef {{
 *   client?: ConversationClient,
 *   endpoint?: EndpointURL|EndpointFunction,
 *   conversationId?: string,
 *   token?: string,
 *   backstory?: string,
 *   model?: Model,
 *   datasetId?: string,
 *   skillsetId?: string,
 *   privacy?: boolean,
 *   moderation?: boolean
 * }} UseConversationManagerRemoteOptions
 *
 * @typedef {(messages: Message[]) => AsyncGenerator<any,void,any>} UseConversationManagerRemoteResult
 */

/**
 * This hook is used to create a remote function that can be used to complete
 * a conversation.
 *
 * @param {UseConversationManagerRemoteOptions} options
 * @returns {UseConversationManagerRemoteResult}
 * @todo requires refactoring
 */
export function useConversationManagerRemote({
  client: _client,

  endpoint,

  conversationId,
  token,

  backstory,
  model,
  datasetId,
  skillsetId,
  privacy,
  moderation,

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
              yield* consume(endpoint(options))
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

  /** @type {UseConversationManagerRemoteResult} */
  const remote = useMemo(() => {
    if (conversationId) {
      return /** @type {UseConversationManagerRemoteResult} */ (
        async function* (messages) {
          const lastUserMessage = [...messages]
            .reverse()
            .find((message) => message.type === 'user')

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
  }, [
    client,
    conversationId,
    backstory,
    model,
    datasetId,
    skillsetId,
    privacy,
    moderation,
  ])

  return remote
}

export default useConversationManagerRemote
