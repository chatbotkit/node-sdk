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
}

export default useWidgetInstanceNotifications
