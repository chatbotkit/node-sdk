import { config as printConfig } from '../../output.js'
import conversation from './conversation/index.js'
import dataset from './dataset/index.js'
import partner from './partner/index.js'
import skillset from './skillset/index.js'

import { Command, Option } from 'commander'

export const command = new Command()
  .name('api')
  .description('API tools for ChatBotKit')
  .addCommand(dataset)
  .addCommand(skillset)
  .addCommand(conversation)
  .addCommand(partner)

command
  .addOption(
    new Option('-o, --output <format>', 'Output format').choices([
      'yaml',
      'json',
      'jsonl',
    ])
  )
  .on('option:output', (value) => {
    printConfig.output = value
  })

export default command
