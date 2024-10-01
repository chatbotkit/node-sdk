import { useEffect, useState } from 'react'

import useDOMQuerySelector from './useDOMQuerySelector.js'

/**
 * @typedef {import('./useWidgetInstance.js').ChatBotKitWidgetInstance} ChatBotKitWidgetInstance
 */

/**
 * @param {string} selector
 * @param {{
 *   waitForReady?: boolean
 * }} [options]
 * @returns {ChatBotKitWidgetInstance|null}
 */
export function useWidgetQuerySelector(selector, options) {
  const { waitForReady = false } = options || {}

  const [element] = /** @type {ChatBotKitWidgetInstance[]} */ (
    useDOMQuerySelector(selector, {
      waitForElements: true,
    })
  )

  const [instance, setInstance] = useState(
    /** @type {ChatBotKitWidgetInstance|null} */ (null)
  )

  useEffect(() => {
    if (!element) {
      return
    }

    if (typeof element.ready === 'boolean') {
      setInstance(element)

      return
    }

    function handleConnect() {
      setInstance(element)
    }

    element.addEventListener('connect', handleConnect)

    return () => {
      element.removeEventListener('connect', handleConnect)
    }
  }, [element, setInstance])

  const [readyInstance, setReadyInstance] = useState(
    /** @type {ChatBotKitWidgetInstance|null} */ (null)
  )

  useEffect(() => {
    if (!waitForReady) {
      return
    }

    if (!instance) {
      return
    }

    instance.readyPromise.then(() => {
      setReadyInstance(instance)
    })
  }, [waitForReady, instance])

  return waitForReady ? readyInstance : instance
}

export default useWidgetQuerySelector
