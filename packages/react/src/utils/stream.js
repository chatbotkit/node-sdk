/**
 * @todo come up with a better type for source and result
 *
 * @typedef {any} StreamSource
 * @typedef {any} StreamResult
 *
 * @param {StreamSource} source
 * @returns {StreamResult}
 */
export function stream(source) {
  /** @type {Promise<any>} */
  let it

  if ('next' in source && typeof source.next === 'function') {
    it = source.next()
  } else if ('stream' in source && typeof source.stream === 'function') {
    return stream(source.stream())
  } else {
    throw new Error('Invalid source')
  }

  return new Promise((resolve, reject) => {
    it.then((res) => {
      if (res.done) {
        resolve({ iteratorResult: res })
      } else {
        resolve({ iteratorResult: res, next: stream(source) })
      }
    })

    it.catch((error) => reject(error))
  })
}

/**
 * @todo come up with a better type for source and result
 *
 * @typedef {any} ConsumeSource
 * @typedef {any} ConsumeResult
 *
 * @param {ConsumeSource} source
 * @returns {ConsumeResult}
 */
export function consume(source) {
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
