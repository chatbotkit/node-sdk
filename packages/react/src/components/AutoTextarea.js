import React from 'react'

/**
 * @typedef {(event: React.ChangeEvent<HTMLTextAreaElement>) => any} onInputFn
 *
 * @param {{
 *   onInput?: onInputFn?,
 *   [name: string]: any
 * }} [props]
 */
export function AutoTextarea({ onInput, ...props } = {}) {
  /**
   * @param {React.ChangeEvent<HTMLTextAreaElement>} event
   */
  function handleOnInput(event) {
    const adjustment = `calc(${
      [event.target.style.paddingTop, event.target.style.paddingBottom]
        .filter((f) => f)
        .join(' + ') || '0px'
    })`

    event.target.style.height = 'auto'
    event.target.style.height = `calc(${event.target.scrollHeight}px - ${adjustment})`

    if (onInput) {
      onInput(event)
    }
  }

  return <textarea {...props} rows={1} onInput={handleOnInput} />
}

export default AutoTextarea
