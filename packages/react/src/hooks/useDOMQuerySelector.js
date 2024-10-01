import { useEffect, useState } from 'react'

/**
 * @template T
 * @param {string} selector
 * @param {{
 *   waitForElements?: boolean
 * }} [options]
 * @returns {T[]}
 */
export function useDOMQuerySelector(selector, options) {
  const { waitForElements = false } = options || {}

  const [elements, setElements] = useState(/** @type {T[]} */ ([]))

  useEffect(() => {
    const elements = document.querySelectorAll(selector)

    setElements(/** @type {T[]} */ (Array.from(elements)))

    if (!elements.length && waitForElements) {
      const observer = new MutationObserver(() => {
        const elements = document.querySelectorAll(selector)

        if (elements.length) {
          observer.disconnect()
        }

        setElements(/** @type {T[]} */ (Array.from(elements)))
      })

      observer.observe(document.body, {
        childList: true,
        subtree: true,
      })

      return () => observer.disconnect()
    }
  }, [selector, waitForElements])

  return elements
}

export default useDOMQuerySelector
