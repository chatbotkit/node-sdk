import { Command, Option } from 'commander'

import conversation from './conversation/index.js'
import { config as printConfig } from '../../output.js'

export const command = new Command()
  .name('api')
  .description('API tools for ChatBotKit')
  .addCommand(conversation)

command
  .addOption(
    new Option('-o, --output <format>', 'Output format').choices([
      'text',
      'json',
      'jsonl',
    ])
  )
  .on('option:output', (value) => {
    printConfig.output = value
  })

export default command
