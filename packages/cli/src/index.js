import command from './command/api/index.js'
import chat from './command/chat/index.js'

import { Command } from 'commander'

export default async function cbk() {
  const program = new Command()

  program.name('cbk').description('Command line tools for ChatBotKit')

  program.addCommand(command)
  program.addCommand(chat)

  program.parse()
}
