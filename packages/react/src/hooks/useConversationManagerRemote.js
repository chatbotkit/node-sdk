'use any'

import { useMemo } from 'react'

import { consume } from '../utils/stream.js'

import { ConversationClient } from '@chatbotkit/sdk'

/* globals globalThis */

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
 *   token?: string,
 *   conversationId?: string,
 *   stateful?: boolean,
 *   botId?: string,
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

  token,

  conversationId,

  stateful = conversationId ? true : false,

  botId,
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
      extension.baseUrl = new URL(
        globalThis.window?.location?.origin || 'about:blank'
      )

      extension.endpoints = {
        '/api/v1/conversation/complete': endpoint,
        '/api/v1/conversation/{conversationId}/complete': endpoint,
      }
    }

    if (token) {
      extension.secret = token
    }

    if (Object.keys(extension).length === 0) {
      return thisClient
    } else {
      return thisClient.extend(extension)
    }
  }, [_client, endpoint, token])

  /** @type {UseConversationManagerRemoteResult} */
  const remote = useMemo(() => {
    if (stateful) {
      return /** @type {UseConversationManagerRemoteResult} */ (
        async function* (messages) {
          const lastUserMessage = [...messages]
            .reverse()
            .find((message) => message.type === 'user')

          if (!lastUserMessage) {
            throw new Error('No user message found')
          }

          yield* client
            .complete(/** @type {string} */ (conversationId), {
              text: lastUserMessage.text,
            })
            .stream()
        }
      )
    } else {
      return /** @type {UseConversationManagerRemoteResult} */ (
        async function* (messages) {
          yield* client
            .complete(null, {
              botId: botId,

              backstory: backstory,
              model: model,
              datasetId: datasetId,
              skillsetId: skillsetId,
              privacy: privacy,
              moderation: moderation,

              messages: messages.map(({ type, text, meta }) => ({
                type,
                text,
                meta,
              })),
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
