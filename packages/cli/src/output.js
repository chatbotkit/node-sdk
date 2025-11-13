import jsYaml from 'js-yaml'
import util from 'util'

/**
 * A configuration object for the output module.
 *
 * @internal
 */
export const config = {
  /** @type {'yaml'|'json'|'jsonl'} */
  output: 'yaml',
}

/**
 * The error class for command errors which should be printed to the user.
 *
 * @internal
 */
export class CommandError extends Error {}

/**
 * @internal
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
 * @internal
 * @param {any} error
 * @returns {void}
 */
export function printError(error) {
  // @note ctrl+c (sigint) should exit gracefully without printing error
  if (error?.code === 'ABORT_ERR' || error?.name === 'AbortError') {
    process.exit(130) // @note 128 + sigint(2) is the standard exit code for ctrl+c
  }

  if (error instanceof CommandError) {
    // eslint-disable-next-line no-console
    console.error(error.message)
  } else {
    // eslint-disable-next-line no-console
    console.error(error)
  }
}
