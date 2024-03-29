import { createContext } from 'react'

import useConversationManager from '../hooks/useConversationManager.js'

export const ConversationContext = createContext(
  /** @type {import('../hooks/useConversationManager.js').UseConversationManagerResult} */ ({
    token: undefined,
    setToken: () => {},

    conversationId: undefined,
    setConversationId: () => {},

    botId: undefined,
    setBotId: () => {},

    backstory: undefined,
    setBackstory: () => {},

    model: undefined,
    setModel: () => {},

    datasetId: undefined,
    setDatasetId: () => {},

    skillsetId: undefined,
    setSkillsetId: () => {},

    text: '',
    setText: () => {},

    messages: [],
    setMessages: () => {},

    thinking: false,
    setThinking: () => {},

    typing: false,
    setTyping: () => {},

    error: null,
    setError: () => {},

    submit: () => {},

    trigger: () => {},
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
