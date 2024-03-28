import { useCallback } from 'react'

import useConversationManagerStateReducer from './useConversationManagerStateReducer.js'

/**
 * @typedef {import('@chatbotkit/sdk/conversation/v1').Message} Message
 *
 * @typedef {import('./useConversationManagerStateReducer.js').State} State
 *
 * @typedef {{
 *   setThinking: (thinking: boolean) => void,
 *   setTyping: (typing: boolean) => void,
 *   appendText: (text: string) => void,
 *   appendMessage: (message: Message) => void
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
    (thinking) => {
      dispatch({ type: 'setThinking', data: { thinking } })
    },
    [dispatch]
  )

  const setTyping = useCallback(
    (typing) => {
      dispatch({ type: 'setTyping', data: { typing } })
    },
    [dispatch]
  )

  const appendText = useCallback(
    (text) => {
      dispatch({ type: 'appendText', data: { text } })
    },
    [dispatch]
  )

  const appendMessage = useCallback(
    (message) => {
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
