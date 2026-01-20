import { getRUNAS_USERID, getSECRET } from '../../../env.js'
import { print } from '../../../output.js'

import { BlueprintClient } from '@chatbotkit/sdk/blueprint/index.js'

import { Command } from 'commander'

function getClient() {
  return new BlueprintClient({
    secret: getSECRET(),
    runAsUserId: getRUNAS_USERID(),
  })
}

export const blueprintList = new Command()
  .name('list')
  .description('List blueprints')
  .option('-s, --stream', 'Stream blueprints')
  .action(async (str, options) => {
    const { stream } = options

    const client = getClient()

    if (stream) {
      for await (const blueprint of client.list().stream()) {
        print(blueprint)
      }
    } else {
      const { items } = await client.list()

      for (const blueprint of items) {
        print(blueprint)
      }
    }
  })

export const blueprintFetch = new Command()
  .name('fetch')
  .description('Fetch blueprint')
  .argument('<blueprintId>', 'Blueprint ID')
  .action(async (blueprintId) => {
    const client = getClient()

    const blueprint = await client.fetch(blueprintId)

    print(blueprint)
  })

export const blueprintDelete = new Command()
  .name('delete')
  .description('Delete blueprint')
  .argument('<blueprintId>', 'Blueprint ID')
  .action(async (blueprintId) => {
    const client = getClient()

    await client.delete(blueprintId)
  })

export const blueprintClone = new Command()
  .name('clone')
  .description('Clone blueprint')
  .argument('<blueprintId>', 'Blueprint ID')
  .action(async (blueprintId) => {
    const client = getClient()

    const result = await client.clone(blueprintId)

    print(result)
  })

export const blueprintListResources = new Command()
  .name('list-resources')
  .description('List blueprint resources')
  .argument('<blueprintId>', 'Blueprint ID')
  .action(async (blueprintId) => {
    const client = getClient()

    const result = await client.listResources(blueprintId)

    print(result)
  })

/**
 * Commands registry - MUST include ALL BlueprintClient methods
 *
 * @todo enable types once we have more SDK clients implemented
 *
 * _satisfies {Partial<Record<keyof BlueprintClient, import('commander').Command>>}
 * _type {Record<keyof BlueprintClient, import('commander').Command>}
 */
const commands = {
  list: blueprintList,
  fetch: blueprintFetch,
  delete: blueprintDelete,
  clone: blueprintClone,
  listResources: blueprintListResources,
}

export const command = new Command()
  .name('blueprint')
  .description('Blueprint tools for ChatBotKit')

for (const cmd of Object.values(commands)) {
  command.addCommand(cmd)
}

export default command
