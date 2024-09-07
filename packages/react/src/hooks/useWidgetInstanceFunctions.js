'use client'

import { useEffect } from 'react'

import useWidgetInstance from './useWidgetInstance.js'

/**
 * @typedef {{
 *   description: string,
 *   parameters: Record<string, any>,
 *   results: {
 *     data: any
 *   }
 * }} WidgetFunction
 * 
 * @param {{
 *   functions?: Record<string, WidgetFunction>?
 * }} params 
 */
export function useWidgetInstanceFunctions({ functions }) {
  const instance = useWidgetInstance()

  useEffect(() => {
    if (!instance) {
      return
    }

    if (functions === undefined) {
      return
    }

    instance.functions = {
      ...functions,
    }
  }, [functions, instance])
}

export default useWidgetInstanceFunctions
