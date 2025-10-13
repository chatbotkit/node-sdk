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
 * @returns {ChatBotKitWidgetInstance|null}
 */
export function useWidgetInstance(selector) {
  const [instance, setInstance] = useState(null)

  const [element] = useDOMQuerySelector(selector, { waitForElements: true })

  useEffect(() => {
    if (element) {
      if (element.readyPromise) {
        element.readyPromise.then(() => setInstance(element))

        return
      }

      {
        const onReady = () => {
          setInstance(element)
        }

        element.addEventListener('ready', onReady)
        
        return () => {
          element?.removeEventListener?.('ready', onReady)
        }
      }

      return
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
