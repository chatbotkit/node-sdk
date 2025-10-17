'use client'

import { useEffect } from 'react'

import useDeps from './useDeps.js'
import useWidgetInstance from './useWidgetInstance.js'

/**
 * @typedef {import('./useWidgetInstance.js').WidgetFunction} WidgetFunction
 *
 * @param {{
 *   selector?: string,
 *   functions?: Record<string, WidgetFunction>?
 * }} [params]
 * @param {any[]} [deps]
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
}

export default useWidgetInstanceFunctions
