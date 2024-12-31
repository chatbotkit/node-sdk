/**
 * @typedef {{
 *   onFinish?: () => any
 * }} Handlers
 */

/**
 * @todo come up with a better type for source and result
 *
 * @typedef {any} StreamSource
 * @typedef {any} StreamResult
 *
 * This function is used on the server to stream data to the client.
 *
 * @internal
 * @param {StreamSource} source
 * @returns {StreamResult}
 */
function streamIt(source) {
  /** @type {Promise<any>} */
  let it

  if ('next' in source && typeof source.next === 'function') {
    it = source.next()
  } else if ('stream' in source && typeof source.stream === 'function') {
    return streamIt(source.stream())
  } else {
    throw new Error('Invalid source')
  }

  return new Promise((resolve, reject) => {
    it.then(async (res) => {
      if (res.done) {
        resolve({ iteratorResult: res })
      } else {
        resolve({ iteratorResult: res, next: streamIt(source) })
      }
    })

    it.catch((error) => reject(error))
  })
}

/**
 * @typedef {{} & Handlers} StreamOptions
 *
 * This function is used on the server to stream data to the client.
 *
 * @internal
 * @param {StreamSource} source
 * @param {StreamOptions} [options]
 * @returns {StreamResult}
 */
export function stream(source, options) {
  return streamIt(source).then((result) => {
    if (options?.onFinish) {
      options.onFinish()
    }

    return result
  })
}

/**
 * @todo come up with a better type for source and result
 *
 * @typedef {any} ConsumeSource
 * @typedef {any} ConsumeResult
 *
 * This function is used on the client to consume a server stream.
 *
 * @internal
 * @param {ConsumeSource} source
 * @returns {ConsumeResult}
 */
function consumeIt(source) {
  return {
    [Symbol.asyncIterator]: function () {
      return {
        current: source,

        async next() {
          const { iteratorResult, next } = await this.current

          if (next) {
            this.current = next
          } else {
            iteratorResult.done = true
          }

          return iteratorResult
        },
      }
    },
  }
}

/**
 * @typedef {{} & Handlers} ConsumeOptions
 *
 * This function is used on the client to consume a server stream.
 *
 * @internal
 * @param {ConsumeSource} source
 * @param {ConsumeOptions} [options]
 * @returns {ConsumeResult}
 */
export async function* consume(source, options) {
  yield* consumeIt(source)

  if (options?.onFinish) {
    await options.onFinish()
  }
}
