import agent from './command/agent/index.js'
import command from './command/api/index.js'
import chat from './command/chat/index.js'
import solution from './command/solution/index.js'

import { Command } from 'commander'

/**
 * Print a banner message to the console.
 *
 * @returns {void}
 */
function printBanner() {
  const blue = '\x1b[34m'
  const reset = '\x1b[0m'

  // eslint-disable-next-line no-console
  console.log(`${blue}
 .d8888b.  888888b.   888    d8P
d88P  Y88b 888  "88b  888   d8P
888    888 888  .88P  888  d8P
888        8888888K.  888d88K
888        888  "Y88b 8888888b
888    888 888    888 888  Y88b
Y88b  d88P 888   d88P 888   Y88b
 "Y8888P"  8888888P"  888    Y88b .ai${reset}
`)
}

/**
 * The main entry point for the CLI.
 *
 * @param {string[]} [argv]
 * @returns {Promise<void>}
 */
export default async function cbk(argv = process.argv) {
  const program = new Command()

  program.name('cbk').description('Command line tools for ChatBotKit')

  if (process.stdout.isTTY) {
    program.hook('preAction', () => {
      printBanner()
    })
  }

  program.addCommand(command)
  program.addCommand(agent)
  program.addCommand(chat)
  program.addCommand(solution)

  program.parse(argv)
}
