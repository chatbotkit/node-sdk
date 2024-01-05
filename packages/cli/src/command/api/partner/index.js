import { Command } from 'commander'

import user from './user/index.js'

export const command = new Command()
  .name('partner')
  .description('Partner tools for ChatBotKit')
  .addCommand(user)

export default command
