/* globals globalThis */
import { useMemo, useState } from 'react'

import { cloneAndExtend } from '../utils/object.js'
import { consume } from '../utils/stream.js'
import { getRandomId } from '../utils/string.js'
import { useConversationManagerState } from './useConversationManagerState.js'

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
 *   privacy?: string,
 *   setPrivacy: (privacy: string) => void,
 *   moderation?: string,
 *   setModeration: (moderation: string) => void,
 *   text: string,
 *   setText: (text: string) => void,
 *   message: Message?,
 *   messages: Message[],
 *   thinking: boolean,
 *   typing: boolean,
 *   error: any,
 *   submit: () => void
 *   trigger: (name: string) => void
 *   request: (name: string, ...args: any) => void
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

    privacy: _privacy,
    moderation: _moderation,

    ...rest
  } = options

  const [token, setToken] = useState(_token)

  const [conversationId, setConversationId] = useState(_conversationId)

  const [botId, setBotId] = useState(_botId)

  const [backstory, setBackstory] = useState(_backstory)

  const [model, setModel] = useState(_model)

  const [datasetId, setDatasetId] = useState(_datasetId)

  const [skillsetId, setSkillsetId] = useState(_skillsetId)

  const [privacy, setPrivacy] = useState(_privacy)

  const [moderation, setModeration] = useState(_moderation)

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
      return async function* (messages) {
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
    } else {
      return async function* (messages) {
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
    }
  }, [client])

  const [
    {
      thinking,
      typing,

      message,
      messages,
    },
    {
      setThinking,
      setTyping,

      appendText,
      appendMessage,
    },
  ] = useConversationManagerState()

  const [text, setText] = useState(/** @type {string} */ (''))

  const [error, setError] = useState(/** @type {any} */ (null))

  /**
   * @param {Message[]} [newMessages]
   */
  async function stream(newMessages) {
    const allMessages = messages
      .concat(newMessages || [])
      .slice(-100) // @todo make configurable
      .map(({ type, text, meta }) => ({ type, text, meta }))

    try {
      setThinking(true)

      setError(null)

      for await (const item of remote(allMessages)) {
        switch (item.type) {
          case 'token': {
            appendText(item.data.token)

            break
          }

          case 'message': {
            appendMessage(item.data)

            break
          }
        }
      }
    } catch (e) {
      setError(e)

      if (
        typeof process !== 'undefined' &&
        process.env.NODE_ENV === 'development'
      ) {
        // eslint-disable-next-line no-console
        console.error(e)
      }
    } finally {
      setThinking(false)
      setTyping(false)
    }
  }

  /**
   * This function submits the current text input to the bot. You can also pass
   * a text string to this function to submit a specific text instead of the
   * current text input. This takes precedence over the current text input.
   *
   * @param {string} [thisText]
   * @returns {Promise<void>}
   */
  async function submit(thisText) {
    if (thinking || typing) {
      return // @todo handle submit pipelining
    }

    if (!thisText) {
      if (!text) {
        return
      }

      thisText = text

      setText('')
    }

    /** @type {Message} */
    const userMessage = {
      id: getRandomId('tmp-'),
      type: 'user',
      text: thisText,
    }

    appendMessage(userMessage)

    await stream([userMessage])
  }

  /**
   * This function triggers an activity in the bot. This is a special type of a
   * message that is used to trigger a specific operation in the bot such as a
   * function. For function triggers you cannot pass arguments to the function
   * as they are inferred from the context of the conversation.
   *
   * @param {string} name
   * @returns {Promise<void>}
   */
  async function trigger(name) {
    if (thinking || typing) {
      return // @todo handle submit pipelining
    }

    /** @type {Message} */
    const activityMessage = {
      type: 'activity',
      text: '',
      meta: {
        activity: {
          type: 'trigger',
          function: {
            name: name,
          },
        },
      },
    }

    await stream([activityMessage])
  }

  /**
   * This function requests a function in the bot. This is a special type of a
   * message that is used to request a specific operation in the bot such as a
   * function. For function requests you can pass arguments to the function as
   * they are not inferred from the context of the conversation.
   *
   * @param {string} name
   * @param  {...any} args
   * @returns {Promise<void>}
   */
  async function request(name, ...args) {
    if (thinking || typing) {
      return // @todo handle submit pipelining
    }

    /** @type {Message} */
    const activityMessage = {
      type: 'activity',
      text: '',
      meta: {
        activity: {
          type: 'request',
          function: {
            name: name,
            arguments: args,
          },
        },
      },
    }

    await stream([activityMessage])
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

    privacy,
    setPrivacy,

    moderation,
    setModeration,

    text,
    setText,

    message,
    messages,

    thinking,
    typing,

    error,

    submit,

    trigger,

    request,
  }
}

export default useConversationManager
