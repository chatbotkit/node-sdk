import user from './user/index.js'

import { Command } from 'commander'

export const command = new Command()
  .name('partner')
  .description('Partner tools for ChatBotKit')
  .addCommand(user)

export default command
