'use client'

import AutoScroller from './AutoScroller.js'

/**
 * A chat messages component that automatically scrolls to the bottom when new
 * messages are added.
 *
 * @param {{
 *   [name: string]: any
 * }} props
 * @returns
 */
export function ChatMessages(props) {
  const { ...rest } = props || {}

  return <AutoScroller {...rest} />
}

export default ChatMessages
