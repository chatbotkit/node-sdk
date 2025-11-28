'use client'

import { useEffect } from 'react'

import useWidgetInstance from './useWidgetInstance.js'

/**
 * @typedef {import('@chatbotkit/widget/v2').FunctionDefinition} FunctionDefinition
 * @typedef {import('@chatbotkit/widget/v2').ChatBotKitWidgetElementV2} ChatBotKitWidgetElementV2
 *
 * @param {{
 *   selector?: string,
 *   functions?: Record<string,FunctionDefinition|null> | null
 * }} [params]
 * @param {any[]} [deps]
 * @returns {ChatBotKitWidgetElementV2|null}
 */
export function useWidgetInstanceFunctions(params, deps) {
  const instance = useWidgetInstance(params?.selector, deps)

  useEffect(() => {
    if (!instance) {
      return
    }

    if (params?.functions === undefined) {
      return
    }

    instance.functions = {
      ...params?.functions,
    }
  }, [params?.functions, instance])

  return instance
}

export default useWidgetInstanceFunctions
