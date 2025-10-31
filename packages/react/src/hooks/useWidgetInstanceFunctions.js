'use client'

import { useEffect } from 'react'

import useWidgetInstance from './useWidgetInstance.js'

/**
 * @typedef {import('./useWidgetInstance.js').WidgetFunction} WidgetFunction
 *
 * @param {{
 *   selector?: string,
 *   functions?: Record<string, WidgetFunction>?
 * }} [params]
 * @param {any[]} [deps]
 * @returns {import('./useWidgetInstance.js').ChatBotKitWidgetInstance|null}
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
