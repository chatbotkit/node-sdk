'use client'

import { createContext } from 'react'

import useConversationManager from '../hooks/useConversationManager.js'

export const ConversationContext = createContext(
  /** @type {import('../hooks/useConversationManager.js').UseConversationManagerResult} */ ({
    message: null,
    messages: [],

    thinking: false,
    typing: false,

    text: '',
    setText: () => {},

    error: null,
    setError: () => {},

    submit: async () => false,

    trigger: async () => false,

    request: async () => false,
  })
)

/**
 * Creates a conversation manager instance and context.
 *
 * @param {import('../hooks/useConversationManager.js').UseConversationManagerOptions & { children: import('react').ReactNode}} props
 * @returns {import('react').ReactElement} The rendered component.
 */
export function ConversationManager({ children, ...options }) {
  const manager = useConversationManager(options)

  return (
    <ConversationContext.Provider value={manager}>
      {children}
    </ConversationContext.Provider>
  )
}

export default ConversationManager
