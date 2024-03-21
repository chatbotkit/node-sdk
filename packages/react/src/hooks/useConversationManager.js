/* globals globalThis */

import { useMemo, useState } from 'react'
import { ConversationClient } from '@chatbotkit/sdk'

import { getRandomId } from '../utils/string.js'
import { cloneAndExtend } from '../utils/object.js'
import { consume } from '../utils/stream.js'

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
 *   id: string,
 *   type: 'bot'|'user',
 *   text: string
 * }} Message
 */

/**
 * @typedef {string} EndpointURL
 * @typedef {(conversationId: any, request: any) => AsyncGenerator<any>} EndpointFunction
 *
 * The useConversationManager hook is a React hook that manages the conversation
 * state including the messages, the input text and all calls to the ChatBotKit
 * API endpoint. It automatically handles the conversation state and other
 * details like the token and conversation ID.
 *
 * @param {{
 *   client?: ConversationClient,
 *   endpoint?: EndpointURL|EndpointFunction,
 *   token?: string,
 *   conversationId?: string,
 *   backstory?: string,
 *   Model?: string,
 *   datasetId?: string,
 *   skillsetId?: string,
 *   [key: string]: any
 * }} options
 */
export function useConversationManager(options) {
  const {
    client: _client,

    endpoint,

    token: _token,

    conversationId: _conversationId,

    backstory: _backstory,

    model: _model,

    datasetId: _datasetId,
    skillsetId: _skillsetId,

    ...rest
  } = options

  const [token, setToken] = useState(_token)

  const [conversationId, setConversationId] = useState(_conversationId)

  const [backstory, setBackstory] = useState(_backstory)

  const [model, setModel] = useState(_model)

  const [datasetId, setDatasetId] = useState(_datasetId)

  const [skillsetId, setSkillsetId] = useState(_skillsetId)

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

  const [text, setText] = useState(/** @type {string} */ (''))

  const [messages, setMessages] = useState(/** @type { Message[]} */ ([]))

  const [thinking, setThinking] = useState(false)
  const [typing, setTyping] = useState(false)

  const [error, setError] = useState(/** @type {any} */ (null))

  async function submit() {
    if (!text) {
      return
    }

    setText('')

    /** @type {Message} */
    const userMessage = {
      id: getRandomId('message-'),
      type: 'user',
      text: text,
    }

    /** @type {Message[]} */
    let newMessages = messages.slice(0)

    newMessages = [...newMessages, userMessage]

    setMessages([...newMessages])

    setThinking(true)

    let it

    try {
      if (conversationId) {
        it = client.complete(conversationId, { text })
      } else {
        it = client.complete(null, {
          backstory: backstory,
          model: model,
          datasetId: datasetId,
          skillsetId: skillsetId,
          messages: newMessages.slice(-100),
        })
      }
    } catch (e) {
      setThinking(false)

      setError(e)

      return
    }

    /** @type {Message} */
    const botMessage = {
      id: getRandomId('message-'),
      type: 'bot',
      text: '',
    }

    let alreadyStreaming = false

    try {
      for await (const event of it.stream()) {
        if (event.type === 'token') {
          if (!alreadyStreaming) {
            alreadyStreaming = true

            newMessages = [...newMessages, botMessage]

            setMessages(newMessages)

            setThinking(false)
            setTyping(true)
          }

          botMessage.text += event.data.token

          setMessages([...newMessages])
        }
      }
    } catch (e) {
      setError(e)
    } finally {
      setTyping(false)
    }
  }

  return {
    token,
    setToken,

    conversationId,
    setConversationId,

    backstory,
    setBackstory,

    model,
    setModel,

    datasetId,
    setDatasetId,

    skillsetId,
    setSkillsetId,

    text,
    setText,

    messages,
    setMessages,

    thinking,
    setThinking,

    typing,
    setTyping,

    error,
    setError,

    submit,
  }
}

export default useConversationManager
