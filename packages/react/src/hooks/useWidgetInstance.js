'use client'

import { useEffect, useState } from 'react'

import useDOMQuerySelector from './useDOMQuerySelector.js'

/**
 * @typedef {import('@chatbotkit/widget/v2').ChatBotKitWidgetElementV2} ChatBotKitWidgetElementV2
 * @typedef {import('@chatbotkit/widget/v2').ChatBotKitGlobalObject} ChatBotKitGlobalObject
 */

/**
 * @param {string} [selector]
 * @param {any[]} [deps]
 * @returns {ChatBotKitWidgetElementV2|null}
 */
export function useWidgetInstance(selector, deps) {
  const [instance, setInstance] = useState(
    /** @type {ChatBotKitWidgetElementV2|null} */ (null)
  )

  const [element] = useDOMQuerySelector(
    selector,
    { waitForElements: true },
    deps
  )

  useEffect(() => {
    if (element) {
      /** @type {ChatBotKitWidgetElementV2} */
      const widgetElement = /** @type {any} */ (element)

      if (widgetElement.readyPromise) {
        widgetElement.readyPromise.then(() => setInstance(widgetElement))

        return
      }

      {
        const onReady = () => {
          widgetElement.removeEventListener('ready', onReady)

          setInstance(widgetElement)
        }

        widgetElement.addEventListener('ready', onReady)

        return () => {
          widgetElement?.removeEventListener?.('ready', onReady)
        }
      }
    }

    /** @type {ChatBotKitGlobalObject|undefined} */
    const chatbotkitWidget = /** @type {any} */ (window).chatbotkitWidget

    if (chatbotkitWidget) {
      chatbotkitWidget.instancePromise.then((instance) => setInstance(instance))

      return
    }

    function onInit() {
      /** @type {ChatBotKitGlobalObject} */
      const chatbotkitWidget = /** @type {any} */ (window).chatbotkitWidget

      chatbotkitWidget.instancePromise.then((instance) => setInstance(instance))
    }

    window.addEventListener('chatbotkitWidgetInit', onInit)

    return () => {
      window.removeEventListener('chatbotkitWidgetInit', onInit)
    }
  }, [element])

  return instance
}

export default useWidgetInstance
