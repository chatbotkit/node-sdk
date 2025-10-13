import { useEffect, useState } from 'react'

import useDeps from './useDeps.js'

export default function useDOMQuerySelector(selector, options, deps) {
  const {
    waitForElements = false,

    disconnectOnFirstMatch = true,

    parent = typeof document !== 'undefined'
      ? document.documentElement
      : undefined,
  } = options || {}

  const thisDeps = useDeps(deps)

  const [elements, setElements] = useState([])

  useEffect(() => {
    if (!selector) {
      return
    }

    if (!parent) {
      return
    }

    const elements = parent.querySelectorAll(selector)

    setElements([...elements])

    if (!elements.length && waitForElements) {
      const observer = new MutationObserver(() => {
        const elements = parent.querySelectorAll(selector)

        if (elements.length) {
          setElements([...elements])

          if (disconnectOnFirstMatch) {
            try {
              observer.disconnect()
            } catch (e) {
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
        } catch (e) {
          // just in case
        }
      }
    }
  }, [selector, waitForElements, disconnectOnFirstMatch, parent, thisDeps])

  return elements
}
