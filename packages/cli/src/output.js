import util from 'util'

export const config = {
  /** @type {'text'|'json'|'jsonl'} */
  output: 'text',
}

export function print(input) {
  switch (true) {
    case config.output === 'text': {
      Object.entries(input).forEach(([key, value]) => {
        // eslint-disable-next-line no-console
        console.log(`${key}: ${value}`)
      })

      // eslint-disable-next-line no-console
      console.log('---')

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

export function printError(error) {
  // eslint-disable-next-line no-console
  console.error(error)
}
