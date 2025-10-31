import { useEffect, useState } from 'react'

import useDeps from './useDeps.js'

/**
 * @param {string} selector
 * @param {{ waitForElements?: boolean, disconnectOnFirstMatch?: boolean, parent?: ParentNode }} [options]
 * @param {any[]} [deps]
 * @returns {Element[]}
 */
export default function useDOMQuerySelector(selector, options, deps) {
  const {
    waitForElements = false,

    disconnectOnFirstMatch = true,

    parent = typeof document !== 'undefined'
      ? document.documentElement
      : undefined,
  } = options || {}

  const thisDeps = useDeps(deps)

  const [elements, setElements] = useState(/** @type {Element[]} */ ([]))

  useEffect(() => {
    if (!selector) {
      return
    }

    if (!parent) {
      return
    }

    const initialElements = parent.querySelectorAll(selector)

    setElements(Array.from(initialElements))

    if (!initialElements.length && waitForElements) {
      const observer = new MutationObserver(() => {
        const elements = parent.querySelectorAll(selector)

        if (elements.length) {
          setElements(Array.from(elements))

          if (disconnectOnFirstMatch) {
            try {
              observer.disconnect()
            } catch {
              // just in case
            }
          }
        }
      })

      observer.observe(parent, {
        childList: true,
        subtree: true,
      })

      return () => {
        try {
          observer.disconnect()
        } catch {
          // just in case
        }
      }
    }
  }, [selector, waitForElements, disconnectOnFirstMatch, parent, thisDeps])

  return elements
}
