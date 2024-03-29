'use client'

import AutoTextarea from './AutoTextarea.js'

/**
 * A chat input component that submits when the user presses enter. It also
 * supports a modifier key (ctrl or cmd + enter) to allow the user to enter to
 * submit while still allowing them to enter new lines (shift + enter).
 *
 * @param {{
 *   onSubmit: () => void,
 *   modifierKey?: boolean,
 *   [name: string]: any
 * }} props
 * @returns
 */
export function ChatInput(props) {
  const { onSubmit, modifierKey = false, ...rest } = props || {}

  /**
   * @param {import('react').KeyboardEvent<HTMLTextAreaElement>} event
   */
  function handleOnKeyDown(event) {
    if (
      !event.shiftKey &&
      event.key === 'Enter' &&
      (modifierKey ? event.ctrlKey || event.metaKey : true)
    ) {
      event.preventDefault()

      onSubmit()
    }
  }

  return <AutoTextarea {...rest} onKeyDown={handleOnKeyDown} />
}

export default ChatInput
