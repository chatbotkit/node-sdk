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
 */
export function useWidgetInstanceFunctions(params) {
  const instance = useWidgetInstance(params?.selector)

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
}

export default useWidgetInstanceFunctions
