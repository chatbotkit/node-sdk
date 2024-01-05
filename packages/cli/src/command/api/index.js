import { Command, Option } from 'commander'

import dataset from './dataset/index.js'
import skillset from './skillset/index.js'
import conversation from './conversation/index.js'
import { config as printConfig } from '../../output.js'

export const command = new Command()
  .name('api')
  .description('API tools for ChatBotKit')
  .addCommand(dataset)
  .addCommand(skillset)
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
