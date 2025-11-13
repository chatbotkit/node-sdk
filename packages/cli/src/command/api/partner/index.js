import user from './user/index.js'

import { PartnerClient } from '@chatbotkit/sdk/partner/index.js'

import { Command } from 'commander'

/**
 * Commands registry - MUST include ALL PartnerClient methods
 *
 * @todo enable types once we have more SDK clients implemented
 *
 * _satisfies {Partial<Record<keyof PartnerClient, import('commander').Command>>}
 * _type {Record<keyof PartnerClient, import('commander').Command>}
 */
const commands = {
  user,
}

export const command = new Command()
  .name('partner')
  .description('Partner tools for ChatBotKit')

for (const cmd of Object.values(commands)) {
  command.addCommand(cmd)
}

export default command
