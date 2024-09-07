'use client'

import { useEffect, useState } from 'react'

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
 *   results: {
 *     data: any
 *   }
 * }} WidgetFunction
 *
 * @typedef {{
 *   messages?: WidgetMessage[]?,
 *   notifications?: Record<string, WidgetNotification>?,
 *   functions?: Record<string, WidgetFunction>?
 * }} ChatBotKitWidgetInstance
 *
 * @returns {ChatBotKitWidgetInstance|null}
 */
export function useWidgetInstance() {
  const [instance, setInstance] = useState(null)

  useEffect(() => {
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
  }, [])

  return instance
}

export default useWidgetInstance
