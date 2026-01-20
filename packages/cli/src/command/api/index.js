import { config as printConfig } from '../../output.js'
import blueprint from './blueprint/index.js'
import bot from './bot/index.js'
import contact from './contact/index.js'
import conversation from './conversation/index.js'
import dataset from './dataset/index.js'
import file from './file/index.js'
import integration from './integration/index.js'
import memory from './memory/index.js'
import partner from './partner/index.js'
import secret from './secret/index.js'
import skillset from './skillset/index.js'
import team from './team/index.js'

import { Command, Option } from 'commander'

/**
 * @typedef {import('@chatbotkit/sdk').ChatBotKit} ChatBotKitSDK
 */

/**
 * Commands registry - MUST include ALL SDK clients
 *
 * @todo enable types once we have more SDK clients implemented
 *
 * _satisfies {Partial<Record<keyof ChatBotKitSDK, import('commander').Command>>}
 * _type {Record<keyof ChatBotKitSDK, import('commander').Command>}
 */
const commands = {
  blueprint,
  bot,
  contact,
  conversation,
  dataset,
  file,
  integration,
  memory,
  partner,
  secret,
  skillset,
  team,
}

export const command = new Command()
  .name('api')
  .description('API tools for ChatBotKit')

for (const cmd of Object.values(commands)) {
  command.addCommand(cmd)
}

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
