import command from './command/api/index.js'
import chat from './command/chat/index.js'
import solution from './command/solution/index.js'

import { Command } from 'commander'

/**
 * The main entry point for the CLI.
 *
 * @param {string[]} [argv]
 * @returns {Promise<void>}
 */
export default async function cbk(argv = process.argv) {
  const program = new Command()

  program.name('cbk').description('Command line tools for ChatBotKit')

  program.addCommand(command)
  program.addCommand(chat)
  program.addCommand(solution)

  program.parse(argv)
}
