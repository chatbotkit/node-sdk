import { Command } from 'commander'

import command from './command/api/index.js'
import chat from './command/chat/index.js'

export default async function cbk() {
  const program = new Command()

  program.name('cbk').description('Command line tools for ChatBotKit')

  program.addCommand(command)
  program.addCommand(chat)

  program.parse()
}
