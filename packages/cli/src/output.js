import util from 'util'
import jsYaml from 'js-yaml'

export const config = {
  /** @type {'yaml'|'json'|'jsonl'} */
  output: 'yaml',
}

/**
 * @param {any} input
 * @returns {void}
 */
export function print(input) {
  switch (true) {
    case config.output === 'yaml': {
      // eslint-disable-next-line no-console
      console.log(jsYaml.dump(input, { noRefs: true }))

      // eslint-disable-next-line no-console
      console.log('# ---')

      break
    }

    case config.output === 'json': {
      // eslint-disable-next-line no-console
      console.log(util.inspect(input, { depth: Infinity, colors: true }))

      break
    }

    case config.output === 'jsonl': {
      // eslint-disable-next-line no-console
      console.log(JSON.stringify(input))

      break
    }

    default: {
      throw new Error(`Unknown output format: ${config.output}`)
    }
  }
}

/**
 * @param {any} error
 * @returns {void}
 */
export function printError(error) {
  // eslint-disable-next-line no-console
  console.error(error)
}
