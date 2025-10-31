'use client'

import { useEffect, useState } from 'react'

import useDOMQuerySelector from './useDOMQuerySelector.js'

/**
 * @typedef {{
 *   id: string,
 *   type: string,
 *   text: string
 * }} WidgetMessage
 *
 * @typedef {{
 *   text: string
 * }} WidgetNotification
 *
 * @typedef {{
 *   description: string,
 *   parameters: Record<string, any>,
 * }} WidgetFunctionBase
 *
 * @typedef {WidgetFunctionBase & {
 *   result: {
 *     data: any
 *   }
 * }} WidgetFunctionWithResult
 *
 * @typedef {WidgetFunctionBase & {
 *  handler: (args: any) => any
 * }} WidgetFunctionWithHandler
 *
 * @typedef {WidgetFunctionWithResult|WidgetFunctionWithHandler} WidgetFunction
 *
 * @typedef {() => void} WidgetRestartConversationFn
 *
 * @typedef {(options: string|(({message: string} | {text: string}) & {hidden?: boolean, respond?: boolean})) => void} WidgetSendMessageFn
 *
 * @typedef {HTMLElement & {
 *   ready: boolean,
 *   readyPromise: Promise<boolean>,
 *   messages?: WidgetMessage[]?,
 *   notifications?: Record<string, WidgetNotification>?,
 *   functions?: Record<string, WidgetFunction>?,
 *   restartConversation: WidgetRestartConversationFn,
 *   sendMessage: WidgetSendMessageFn,
 * }} ChatBotKitWidgetInstance
 *
 * @param {string} [selector]
 * @param {any[]} [deps]
 * @returns {ChatBotKitWidgetInstance|null}
 */
export function useWidgetInstance(selector, deps) {
  const [instance, setInstance] = useState(null)

  const [element] = useDOMQuerySelector(
    selector,
    { waitForElements: true },
    deps
  )

  useEffect(() => {
    if (element) {
      /** @type {ChatBotKitWidgetInstance} */
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

    // @ts-expect-error chatbotkitWidget is a global variable
    if (window.chatbotkitWidget) {
      // @ts-expect-error chatbotkitWidget is a global variable
      window.chatbotkitWidget.instancePromise.then((instance) =>
        setInstance(instance)
      )

      return
    }

    function onInit() {
      // @ts-expect-error chatbotkitWidget is a global variable
      window.chatbotkitWidget.instancePromise.then((instance) =>
        setInstance(instance)
      )
    }

    window.addEventListener('chatbotkitWidgetInit', onInit)

    return () => {
      window.removeEventListener('chatbotkitWidgetInit', onInit)
    }
  }, [element])

  return instance
}

export default useWidgetInstance
