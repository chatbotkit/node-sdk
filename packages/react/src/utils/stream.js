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
 * @internal
 * @param {StreamSource} source
 * @param {StreamOptions} [options]
 * @returns {StreamResult}
 */
export async function* stream(source, options) {
  yield* streamIt(source)

  if (options?.onFinish) {
    await options.onFinish()
  }
}

/**
 * @todo come up with a better type for source and result
 *
 * @typedef {any} ConsumeSource
 * @typedef {any} ConsumeResult
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
