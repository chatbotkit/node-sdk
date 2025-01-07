'use client'

import { useCallback } from 'react'

import useConversationManagerStateReducer from './useConversationManagerStateReducer.js'

/**
 * @typedef {import('./useConversationManagerStateReducer.js').State} State
 *
 * @typedef {{
 *   setThinking: (thinking: import('./useConversationManagerStateReducer.js').SetThinkingAction['data']['thinking']) => void,
 *   setTyping: (typing: import('./useConversationManagerStateReducer.js').SetTypingAction['data']['typing']) => void,
 *   appendText: (text: import('./useConversationManagerStateReducer.js').AppendTextAction['data']['text']) => void,
 *   appendMessage: (message: import('./useConversationManagerStateReducer.js').AppendMessageAction['data']['message']) => void,
 * }} StateFunctions
 */

/**
 * This is a hook that creates a conversation manager reducer and initializes
 * the state of the conversation manager to the given state or to the default
 * state if no state is given.
 *
 * @param {Partial<State>} [state]
 * @returns {[State, StateFunctions]}
 */
export function useConversationManagerState(state) {
  const [_, dispatch] = useConversationManagerStateReducer(state)

  const setThinking = useCallback(
    (
      /** @type {import('./useConversationManagerStateReducer.js').SetThinkingAction['data']['thinking']} */ thinking
    ) => {
      dispatch({ type: 'setThinking', data: { thinking } })
    },
    [dispatch]
  )

  const setTyping = useCallback(
    (
      /** @type {import('./useConversationManagerStateReducer.js').SetTypingAction['data']['typing']} */ typing
    ) => {
      dispatch({ type: 'setTyping', data: { typing } })
    },
    [dispatch]
  )

  const appendText = useCallback(
    (
      /** @type {import('./useConversationManagerStateReducer.js').AppendTextAction['data']['text']} */ text
    ) => {
      dispatch({ type: 'appendText', data: { text } })
    },
    [dispatch]
  )

  const appendMessage = useCallback(
    (
      /** @type {import('./useConversationManagerStateReducer.js').AppendMessageAction['data']['message']} */ message
    ) => {
      dispatch({ type: 'appendMessage', data: { message } })
    },
    [dispatch]
  )

  return [
    _,
    {
      setThinking,
      setTyping,
      appendText,
      appendMessage,
    },
  ]
}

export default useConversationManagerState
