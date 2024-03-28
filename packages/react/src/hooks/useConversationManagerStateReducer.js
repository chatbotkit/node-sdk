import { useReducer } from 'react'

import { getRandomId } from '../utils/string.js'

/**
 * @todo define better types for State and Action
 *
 * @typedef {any} State
 * @typedef {any} Action
 */

/**
 * This is the reducer function for the conversation manager. It handles the
 * state of the conversation manager and updates the state based on the actions
 * that are dispatched to it.
 *
 * @param {Partial<State>} state
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

      const message = state.message || {
        id: getRandomId('tmp-'),
        type: 'bot',
        text: '',
      }

      return {
        ...state,

        ...extra,

        message: {
          ...message,

          text: message.text + text,
        },
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

      const messages = state.messages || []

      return {
        ...state,

        ...extra,

        messages: [
          ...messages,
          {
            ...message,

            id: message.id || getRandomId('tmp-'),
          },
        ],
      }
    }

    case 'clearMessage': {
      return {
        ...state,

        message: null,
      }
    }

    case 'clearMessages': {
      return {
        ...state,

        messages: [],
      }
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
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
