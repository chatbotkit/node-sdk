import model from './model/index.js'

import { Command } from 'commander'

/**
 * Commands registry - MUST include ALL Platform SDK clients
 *
 * @todo enable types once we have more SDK clients implemented
 *
 * _satisfies {Partial<Record<keyof import('@chatbotkit/sdk/platform/index.js').PlatformClient, import('commander').Command>>}
 * _type {Record<keyof import('@chatbotkit/sdk/platform/index.js').PlatformClient, import('commander').Command>}
 */
const commands = {
  model,
}

export const command = new Command()
  .name('platform')
  .description('Platform tools for ChatBotKit')

for (const cmd of Object.values(commands)) {
  command.addCommand(cmd)
}

export default command
