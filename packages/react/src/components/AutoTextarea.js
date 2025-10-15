'use client'

import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react'

/**
 * A textarea that automatically adjusts its height based on its content. The
 * height is adjusted on input and focus events.
 *
 * @param {{
 *   [name: string]: any
 * }} [props]
 * @param {React.Ref<HTMLTextAreaElement>} [forwardedRef]
 * @todo remove this component once field-sizing is supported in all browsers
 */
export function AutoTextarea(props, forwardedRef) {
  const localRef = useRef(null)

  useImperativeHandle(
    forwardedRef,
    () =>
      /** @type {HTMLTextAreaElement} */ (
        /** @type {unknown} */ (localRef.current)
      ),
    []
  )

  useEffect(() => {
    const textarea = /** @type {HTMLTextAreaElement} */ (
      /** @type {unknown} */ (localRef.current)
    )

    if (!textarea) {
      return
    }

    if (typeof CSS === 'object' && CSS.supports?.('field-sizing', 'content')) {
      // @ts-expect-error fieldSizing is not in the type definition because it
      // is not commonly supported yet
      textarea.style.fieldSizing = 'content'

      return
    } else {
      // @note without field-sizing this implementation can cause weird effects
      // where the textarea jumps around when the content changes

      textarea.style.maxHeight = '80vh!important'
      textarea.style.overflow = 'auto!important'
    }

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
  }, [])

  return <textarea ref={localRef} rows={1} {...props} />
}

export default forwardRef(AutoTextarea)
