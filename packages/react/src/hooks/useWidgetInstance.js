'use client'

import { useEffect, useState } from 'react'

export function useWidgetInstance() {
  const [instance, setInstance] = useState(null)

  useEffect(() => {
    // @ts-expect-error chatbotkitWidget is a global variable
    if (window.chatbotkitWidget) {
      // @ts-expect-error chatbotkitWidget is a global variable
      window.chatbotkitWidget.instancePromise.then((instance) =>
        setInstance(instance)
      )

      return
    }

    function onInit() {
      // @ts-expect-error chatbotkitWidget is a global variable
      window.chatbotkitWidget.instancePromise.then((instance) =>
        setInstance(instance)
      )
    }

    window.addEventListener('chatbotkitWidgetInit', onInit)

    return () => {
      window.removeEventListener('chatbotkitWidgetInit', onInit)
    }
  }, [])

  return instance
}

export default useWidgetInstance
