import React, { useEffect, useRef } from 'react'

/**
 * A textarea that automatically adjusts its height based on its content. The
 * height is adjusted on input and focus events.
 *
 * @param {{
 *   [name: string]: any
 * }} [props]
 */
export function AutoTextarea(props) {
  const ref = useRef(null)

  /**
   * @param {HTMLTextAreaElement} textarea
   */
  function recalibrate(textarea) {
    const adjustment = `calc(${
      [textarea.style.paddingTop, textarea.style.paddingBottom]
        .filter((f) => f)
        .join(' + ') || '0px'
    })`

    textarea.style.height = 'auto'
    textarea.style.height = `calc(${textarea.scrollHeight}px - ${adjustment})`
  }

  useEffect(() => {
    const textarea = ref.current

    if (textarea) {
      recalibrate(textarea)

      const observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
          if (
            mutation.type === 'childList' ||
            mutation.type === 'characterData'
          ) {
            recalibrate(textarea)
          }
        }
      })

      observer.observe(textarea, {
        childList: true, // observe direct children
        subtree: true, // and lower descendants too
        characterData: true, // observe text changes
      })

      return () => observer.disconnect()
    }
  }, [])

  return <textarea ref={ref} rows={1} {...props} />
}

export default AutoTextarea
