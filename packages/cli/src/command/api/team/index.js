import { getRUNAS_USERID, getSECRET } from '../../../env.js'
import { print } from '../../../output.js'

import { TeamClient } from '@chatbotkit/sdk/team/index.js'

import { Command } from 'commander'

function getClient() {
  return new TeamClient({
    secret: getSECRET(),
    runAsUserId: getRUNAS_USERID(),
  })
}

export const teamList = new Command()
  .name('list')
  .description('List teams')
  .option('-s, --stream', 'Stream teams')
  .action(async (str, options) => {
    const { stream } = options

    const client = getClient()

    if (stream) {
      for await (const team of client.list().stream()) {
        print(team)
      }
    } else {
      const { items } = await client.list()

      for (const team of items) {
        print(team)
      }
    }
  })

/**
 * Commands registry - MUST include ALL TeamClient methods
 *
 * @todo enable types once we have more SDK clients implemented
 *
 * _satisfies {Partial<Record<keyof TeamClient, import('commander').Command>>}
 * _type {Record<keyof TeamClient, import('commander').Command>}
 */
const commands = {
  list: teamList,
}

export const command = new Command()
  .name('team')
  .description('Team tools for ChatBotKit')

for (const cmd of Object.values(commands)) {
  command.addCommand(cmd)
}

export default command
