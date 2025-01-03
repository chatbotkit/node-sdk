'use client'

import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react'

/**
 * A textarea that automatically adjusts its height based on its content.
 *
 * @param {{
 *   [name: string]: any
 * }} [props]
 * @param {React.Ref<HTMLTextAreaElement>} [forwardedRef]
 */
export function AutoTextarea(props, forwardedRef) {
  const localRef = useRef(null)

  useImperativeHandle(
    forwardedRef,
    /** @type {() => HTMLTextAreaElement} */ () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return /** @type {HTMLTextAreaElement} */ (localRef.current)
    }
  )

  useEffect(() => {
    if (!localRef.current) {
      return
    }

    const textarea = /** @type {HTMLTextAreaElement} */ (localRef.current)

    function recalibrate() {
      const adjustment = `calc(${
        [textarea.style.paddingTop, textarea.style.paddingBottom]
          .filter((f) => f)
          .join(' + ') || '0px'
      })`

      textarea.style.height = 'auto'
      textarea.style.height = `calc(${textarea.scrollHeight}px - ${adjustment})`
    }

    recalibrate()

    const mutationObserver = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (
          mutation.type === 'childList' ||
          // @ts-expect-error for some reaons subtree is not in the type
          mutation.type === 'subtree' ||
          mutation.type === 'characterData'
        ) {
          recalibrate()
        }
      }
    })

    mutationObserver.observe(textarea, {
      childList: true,
      subtree: true,
      characterData: true,
    })

    const resizeObserver = new ResizeObserver(recalibrate)

    resizeObserver.observe(textarea)

    textarea.addEventListener('input', recalibrate)
    textarea.addEventListener('focus', recalibrate)

    window.addEventListener('resize', recalibrate)

    return () => {
      mutationObserver.disconnect()
      resizeObserver.disconnect()

      textarea.removeEventListener('input', recalibrate)
      textarea.removeEventListener('focus', recalibrate)

      window.removeEventListener('resize', recalibrate)
    }
  }, [localRef])

  return <textarea ref={localRef} rows={1} {...props} />
}

export default forwardRef(AutoTextarea)
