import React from 'react'

/**
 * @typedef {(event: React.ChangeEvent<HTMLTextAreaElement>) => any} onInputFn
 * @typedef {(event: React.ChangeEvent<HTMLTextAreaElement>) => any} onFocusFn
 *
 * A textarea that automatically adjusts its height based on its content. The
 * height is adjusted on input and focus events.
 *
 * @param {{
 *   onInput?: onInputFn?,
 *   onFocus?: onFocusFn?,
 *   adjustOnInput?: boolean?,
 *   adjustOnFocus?: boolean?,
 *   [name: string]: any
 * }} [props]
 */
export function AutoTextarea(props) {
  const {
    onInput,
    onFocus,
    adjustOnInput = true,
    adjustOnFocus = false,
    ...rest
  } = props || {}

  /**
   * @param {React.ChangeEvent<HTMLTextAreaElement>} event
   */
  function handleEvent(event) {
    const adjustment = `calc(${
      [event.target.style.paddingTop, event.target.style.paddingBottom]
        .filter((f) => f)
        .join(' + ') || '0px'
    })`

    event.target.style.height = 'auto'
    event.target.style.height = `calc(${event.target.scrollHeight}px - ${adjustment})`
  }

  /**
   * @param {React.ChangeEvent<HTMLTextAreaElement>} event
   */
  function handleOnInput(event) {
    if (adjustOnInput) {
      handleEvent(event)
    }

    if (onInput) {
      onInput(event)
    }
  }

  function handleOnFocus(event) {
    if (adjustOnFocus) {
      handleEvent(event)
    }

    if (onFocus) {
      onFocus(event)
    }
  }

  return (
    <textarea
      {...rest}
      rows={1}
      onInput={handleOnInput}
      onFocus={handleOnFocus}
    />
  )
}

export default AutoTextarea
