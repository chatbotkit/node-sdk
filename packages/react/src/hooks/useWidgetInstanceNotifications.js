'use client'

import { useEffect } from 'react'

import useWidgetInstance from './useWidgetInstance.js'

/**
 * @typedef {import('./useWidgetInstance.js').WidgetNotification} WidgetNotification
 *
 * @param {{
 *   selector?: string,
 *   notifications?: Record<string, WidgetNotification>?
 * }} [params]
 * @param {any[]} [deps]
 * @returns {import('./useWidgetInstance.js').ChatBotKitWidgetInstance|null}
 */
export function useWidgetInstanceNotifications(params, deps) {
  const instance = useWidgetInstance(params?.selector, deps)

  useEffect(() => {
    if (!instance) {
      return
    }

    if (params?.notifications == undefined) {
      return
    }

    instance.notifications = {
      ...params?.notifications,
    }
  }, [params?.notifications, instance])

  return instance
}

export default useWidgetInstanceNotifications
