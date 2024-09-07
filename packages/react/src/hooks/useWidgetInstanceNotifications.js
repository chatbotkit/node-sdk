'use client'

import { useEffect } from 'react'

import useWidgetInstance from './useWidgetInstance.js'

/**
 * @typedef {{
 *   text: string
 * }} WidgetNotification
 *
 * @param {{
 *   notifications?: Record<string, WidgetNotification>?
 * }} params
 */
export function useWidgetInstanceNotifications({ notifications }) {
  const instance = useWidgetInstance()

  useEffect(() => {
    if (!instance) {
      return
    }

    if (notifications == undefined) {
      return
    }

    instance.notifications = {
      ...notifications,
    }
  }, [notifications, instance])
}

export default useWidgetInstanceNotifications
