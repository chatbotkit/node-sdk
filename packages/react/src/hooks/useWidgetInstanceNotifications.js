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
 */
export function useWidgetInstanceNotifications(params) {
  const instance = useWidgetInstance(params?.selector)

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
