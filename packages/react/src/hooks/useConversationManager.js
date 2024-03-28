import { useState } from 'react'

import useConversationManagerRemote from './useConversationManagerRemote.js'
import { useConversationManagerState } from './useConversationManagerState.js'

/**
 * @typedef {import('@chatbotkit/sdk/conversation/v1').Message} Message
 *
 * @typedef {import('./useConversationManagerRemote.js').UseConversationManagerRemoteOptions} UseConversationManagerRemoteOptions
 */

/**
 * @typedef {UseConversationManagerRemoteOptions & {
 * }} UseConversationManagerOptions
 *
 * @typedef {{
 *   message: Message?,
 *   messages: Message[],
 *   thinking: boolean,
 *   typing: boolean,
 *   text: string,
 *   setText: (text: string) => void,
 *   error: any,
 *   setError: (error: any) => void,
 *   submit: () => void
 *   trigger: (name: string) => void
 *   request: (name: string, args: any) => void
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
export function useConversationManager({
  ...conversationManagerRemoteOptions
}) {
  const remote = useConversationManagerRemote(conversationManagerRemoteOptions)

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
    const allMessages = [
      ...messages.map(({ type, text, meta }) => {
        return {
          type,
          text,
          meta,
        }
      }),

      ...(newMessages?.map(({ type, text, meta }) => {
        return {
          type,
          text,
          meta,
        }
      }) || []),
    ].slice(-100) // @todo make configurable

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
   * @param  {any} args
   * @returns {Promise<void>}
   */
  async function request(name, args) {
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
    message,
    messages,

    thinking,
    typing,

    text,
    setText,

    error,
    setError,

    submit,

    trigger,

    request,
  }
}

export default useConversationManager
