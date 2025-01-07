'use client'

import { useReducer } from 'react'

import { getRandomId } from '../utils/string.js'

/**
 * @typedef {import('@chatbotkit/sdk/conversation/v1').Message} Message
 *
 * @typedef {{id: string} & Message} MessageWithId
 */

/**
 * @typedef {{
 *   thinking: boolean,
 *   typing: boolean,
 *   message: MessageWithId | null,
 *   messages: MessageWithId[],
 * }} State
 *
 * @typedef {{
 *   type: 'setThinking',
 *   data: {
 *    thinking: boolean,
 *   }
 * }} SetThinkingAction
 *
 * @typedef {{
 *   type: 'setTyping',
 *   data: {
 *     typing: boolean,
 *   }
 * }} SetTypingAction
 *
 * @typedef {{
 *   type: 'appendText',
 *   data: {
 *     text: string,
 *   }
 * }} AppendTextAction
 *
 * @typedef {{
 *   type: 'appendMessage',
 *   data: {
 *     message: Message & {id?: string},
 *   }
 * }} AppendMessageAction
 *
 * @typedef {SetThinkingAction|SetTypingAction|AppendTextAction|AppendMessageAction} Action
 */

/**
 * This is the reducer function for the conversation manager. It handles the
 * state of the conversation manager and updates the state based on the actions
 * that are dispatched to it.
 *
 * @param {State} state
 * @param {Action} action
 * @returns {State}
 */
export function conversationManagerStateReducer(state, action) {
  switch (action.type) {
    case 'setThinking': {
      const { thinking } = action.data

      /** @type {Partial<State>} */
      const extra = {}

      if (thinking) {
        extra.typing = false
        extra.message = null
      }

      return {
        ...state,

        ...extra,

        thinking,
      }
    }

    case 'setTyping': {
      const { typing } = action.data

      /** @type {Partial<State>} */
      const extra = {}

      if (typing) {
        extra.thinking = false
        extra.message = null
      }

      return {
        ...state,

        ...extra,

        typing,
      }
    }

    case 'appendText': {
      const { text } = action.data

      /** @type {Partial<State>} */
      const extra = {
        thinking: false,
        typing: true,
      }

      const message = state.message
        ? /** @type {MessageWithId} */ ({ ...state.message })
        : /** @type {MessageWithId} */ ({
            id: getRandomId('tmp-'),
            type: 'bot',
            text: '',
          })

      message.text += text

      return {
        ...state,

        ...extra,

        message,
      }
    }

    case 'appendMessage': {
      const { message } = action.data

      /** @type {Partial<State>} */
      const extra = {}

      if (message.type === 'bot') {
        if (message.text === state.message?.text) {
          extra.typing = false

          extra.message = null
        }
      }

      const messages = state.messages.slice(0)

      if (message.id) {
        const index = messages.findIndex((m) => m.id === message.id)

        if (index !== -1) {
          messages[index] = {
            ...messages[index],
            ...message,
          }
        } else {
          messages.push({
            ...message,

            id: message.id || getRandomId('tmp-'),
          })
        }
      } else {
        messages.push({
          ...message,

          id: getRandomId('tmp-'),
        })
      }

      return {
        ...state,

        ...extra,

        messages,
      }
    }

    default: {
      throw new Error(`Unhandled action`)
    }
  }
}

/**
 * This function initializes the state of the conversation manager. It sets the
 * initial state of the conversation manager to the given state or to the
 * default state if no state is given.
 *
 * @param {Partial<State>} [state]
 * @returns {State}
 */
export function conversationManagerStateInitial(state) {
  return {
    message: null,
    messages: [],
    thinking: false,
    typing: false,

    ...state,
  }
}

/**
 * This is a hook that creates a conversation manager reducer and initializes
 * the state of the conversation manager to the given state or to the default
 * state if no state is given.
 *
 * @param {Partial<State>} [state]
 * @returns {[State, import('react').Dispatch<Action>]}
 */
export function useConversationManagerStateReducer(state) {
  return useReducer(
    conversationManagerStateReducer,
    state,
    conversationManagerStateInitial
  )
}

export default useConversationManagerStateReducer
