import { getRUNAS_USERID, getSECRET } from '../../../../env.js'
import { print } from '../../../../output.js'

import { PlatformModelClient } from '@chatbotkit/sdk/platform/model/index.js'

import { Command } from 'commander'

function getClient() {
  return new PlatformModelClient({
    secret: getSECRET(),
    runAsUserId: getRUNAS_USERID(),
  })
}

export const modelList = new Command()
  .name('list')
  .description('List platform models')
  .option('-s, --stream', 'Stream models')
  .action(async (str, options) => {
    const { stream } = options

    const client = getClient()

    if (stream) {
      for await (const model of client.list().stream()) {
        print(model)
      }
    } else {
      const { items } = await client.list()

      for (const model of items) {
        print(model)
      }
    }
  })

/**
 * Commands registry - MUST include ALL PlatformModelClient methods
 *
 * @todo enable types once we have more SDK clients implemented
 *
 * _satisfies {Partial<Record<keyof PlatformModelClient, import('commander').Command>>}
 * _type {Record<keyof PlatformModelClient, import('commander').Command>}
 */
const commands = {
  list: modelList,
}

export const command = new Command()
  .name('model')
  .description('Model tools for ChatBotKit platform')

for (const cmd of Object.values(commands)) {
  command.addCommand(cmd)
}

export default command
