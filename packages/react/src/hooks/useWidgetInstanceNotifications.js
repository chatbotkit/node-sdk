'use client'

import { useEffect } from 'react'

import useWidgetInstance from './useWidgetInstance.js'

/**
 * @typedef {import('@chatbotkit/sdk/widget/v2').NotificationDefinition} NotificationDefinition
 * @typedef {import('@chatbotkit/sdk/widget/v2').ChatBotKitWidgetElementV2} ChatBotKitWidgetElementV2
 *
 * @param {{
 *   selector?: string,
 *   notifications?: Record<string,NotificationDefinition|null> | null
 * }} [params]
 * @param {any[]} [deps]
 * @returns {ChatBotKitWidgetElementV2|null}
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
