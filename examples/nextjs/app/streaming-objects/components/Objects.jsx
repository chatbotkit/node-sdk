'use client'

import { useEffect, useState } from 'react'

import { streamObjects } from '../actions/objects'

import { consume } from '@chatbotkit/react/utils/stream'

export default function Objects() {
  const [abortController, setAbortController] = useState(false)

  const [objects, setObjects] = useState([])

  useEffect(() => {
    if (!abortController) {
      return
    }

    async function doIt() {
      // The function streamObjects returns an async-iterable look-alike object
      // which we need to consume.

      const it = await consume(streamObjects())

      for await (const object of it) {
        if (abortController.signal.aborted) {
          break
        }

        setObjects((objects) => [...objects, object])
      }
    }

    doIt()
  }, [abortController])

  function toggleState() {
    if (abortController) {
      abortController.abort()

      setAbortController(null)
    } else {
      setAbortController(new AbortController())
    }
  }

  return (
    <div>
      <button onClick={toggleState}>
        {abortController ? 'stop' : 'start'}
      </button>
      <br />
      <pre>{objects.map((message) => JSON.stringify(message) + '\n')}</pre>
    </div>
  )
}
