/**
 * @typedef {Generator<object>|AsyncGenerator<object>} IterableObject
 *
 * @param {IterableObject|{stream: () => IterableObject}} source
 * @returns {Response}
 */
export function stream(source) {
  const encoder = new TextEncoder()

  return new Response(
    new ReadableStream({
      async start(controller) {
        /** @type {IterableObject} */
        let it

        if ('next' in source && typeof source.next === 'function') {
          it = source
        } else if ('stream' in source && typeof source.stream === 'function') {
          it = source.stream()
        } else {
          throw new Error('Invald source')
        }

        try {
          for await (const event of it) {
            controller.enqueue(encoder.encode(`${JSON.stringify(event)}\n`))
          }
        } catch (e) {
          controller.error(e)
        }

        controller.close()
      },
    })
  )
}

export default stream
