/* globals globalThis */
import { useMemo, useState } from 'react'

import { cloneAndExtend } from '../utils/object.js'
import { consume } from '../utils/stream.js'
import { getRandomId } from '../utils/string.js'

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
 *   Model?: string,
 *   datasetId?: string,
 *   skillsetId?: string,
 *   [key: string]: any
 * }} UseConversationManagerOptions
 *
 * @typedef {{
 *   token?: string,
 *   setToken: (token: string) => void,
 *   conversationId?: string,
 *   setConversationId: (conversationId: string) => void,
 *   botId?: string,
 *   setBotId: (botId: string) => void,
 *   backstory?: string,
 *   setBackstory: (backstory: string) => void,
 *   model?: Model,
 *   setModel: (model: Model) => void,
 *   datasetId?: string,
 *   setDatasetId: (datasetId: string) => void,
 *   skillsetId?: string,
 *   setSkillsetId: (skillsetId: string) => void,
 *   text: string,
 *   setText: (text: string) => void,
 *   messages: Message[],
 *   setMessages: (messages: Message[]) => void,
 *   thinking: boolean,
 *   setThinking: (thinking: boolean) => void,
 *   typing: boolean,
 *   setTyping: (typing: boolean) => void,
 *   error: any,
 *   setError: (error: any) => void,
 *   submit: () => void
 *   trigger: (name: string, ...args: any) => void
 * }} UseConversationManagerResult
 */

/**
 * The useConversationManager hook is a React hook that manages the conversation
 * state including the messages, the input text and all calls to the ChatBotKit
 * API endpoint. It automatically handles the conversation state and other
 * details like the token and conversation ID.
 *
 * @param {UseConversationManagerOptions} options
 * @returns {UseConversationManagerResult}
 */
export function useConversationManager(options) {
  const {
    client: _client,

    endpoint,

    token: _token,

    conversationId: _conversationId,

    botId: _botId,

    backstory: _backstory,

    model: _model,

    datasetId: _datasetId,
    skillsetId: _skillsetId,

    ...rest
  } = options

  const [token, setToken] = useState(_token)

  const [conversationId, setConversationId] = useState(_conversationId)

  const [botId, setBotId] = useState(_botId)

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

  /**
   * @param {Message[]} newMessages
   */
  async function stream(newMessages) {
    setThinking(true)

    let it

    try {
      if (conversationId) {
        it = client.complete(conversationId, { text })
      } else {
        it = client.complete(null, {
          // @todo uncomment once supported
          // botId: botId,
          backstory: backstory,
          model: model,
          datasetId: datasetId,
          skillsetId: skillsetId,
          messages: newMessages
            .slice(-100)
            .map(({ type, text, meta }) => ({ type, text, meta })),
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
        switch (event.type) {
          case 'token': {
            if (!alreadyStreaming) {
              alreadyStreaming = true

              newMessages = [...newMessages, botMessage]

              setMessages(newMessages)

              setThinking(false)
              setTyping(true)
            }

            botMessage.text += event.data.token

            setMessages([...newMessages])

            break
          }

          case 'message': {
            /** @type {Message & { children?: import('react').ReactElement }} */
            const message = event.data

            if (
              botMessage.text !== message.text ||
              message.type === 'activity' ||
              typeof message.children !== 'undefined'
            ) {
              const newMessage = {
                // streamed messages do not have an id so we generate one here

                id: getRandomId('message-'),

                ...event.data,
              }

              newMessages = [...newMessages, newMessage]

              setMessages([...newMessages])
            }

            break
          }

          case 'result': {
            setThinking(false)
            setTyping(false)
          }
        }
      }
    } catch (e) {
      setError(e)
    } finally {
      setTyping(false)
    }
  }

  /**
   * @returns {Promise<void>}
   */
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

    await stream(newMessages)
  }

  /**
   * @param {string} name
   * @param  {...any} args
   * @returns {Promise<void>}
   */
  async function trigger(name, ...args) {
    const newMessages = [
      ...messages,

      /** @type {Message} */ ({
        type: 'activity',
        text: '',
        meta: {
          activity: {
            type: 'trigger',
            function: {
              name: name,
              arguments: args,
            },
          },
        },
      }),
    ]

    // @note here for information only, we are deliberately not adding this to the messages
    // setMessages(newMessages)

    await stream(newMessages)
  }

  return {
    token,
    setToken,

    conversationId,
    setConversationId,

    botId,
    setBotId,

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

    trigger,
  }
}

export default useConversationManager
