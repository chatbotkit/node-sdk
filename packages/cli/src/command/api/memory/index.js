import { getRUNAS_USERID, getSECRET } from '../../../env.js'
import { print } from '../../../output.js'

import { MemoryClient } from '@chatbotkit/sdk/memory/index.js'

import { Command } from 'commander'

function getClient() {
  return new MemoryClient({
    secret: getSECRET(),
    runAsUserId: getRUNAS_USERID(),
  })
}

export const memoryList = new Command()
  .name('list')
  .description('List memories')
  .option('-s, --stream', 'Stream memories')
  .action(async (str, options) => {
    const { stream } = options

    const client = getClient()

    if (stream) {
      for await (const memory of client.list().stream()) {
        print(memory)
      }
    } else {
      const { items } = await client.list()

      for (const memory of items) {
        print(memory)
      }
    }
  })

export const memoryFetch = new Command()
  .name('fetch')
  .description('Fetch memory')
  .argument('<memoryId>', 'Memory ID')
  .action(async (memoryId) => {
    const client = getClient()

    const memory = await client.fetch(memoryId)

    print(memory)
  })

export const memoryDelete = new Command()
  .name('delete')
  .description('Delete memory')
  .argument('<memoryId>', 'Memory ID')
  .action(async (memoryId) => {
    const client = getClient()

    await client.delete(memoryId)
  })

export const memoryExport = new Command()
  .name('export')
  .description('Export memories')
  .option('-s, --stream', 'Stream exports')
  .action(async (str, options) => {
    const { stream } = options

    const client = getClient()

    if (stream) {
      for await (const memory of client.export().stream()) {
        print(memory)
      }
    } else {
      const result = await client.export()

      print(result)
    }
  })

/**
 * Commands registry - MUST include ALL MemoryClient methods
 *
 * @todo enable types once we have more SDK clients implemented
 *
 * _satisfies {Partial<Record<keyof MemoryClient, import('commander').Command>>}
 * _type {Record<keyof MemoryClient, import('commander').Command>}
 */
const commands = {
  list: memoryList,
  fetch: memoryFetch,
  delete: memoryDelete,
  export: memoryExport,
}

export const command = new Command()
  .name('memory')
  .description('Memory tools for ChatBotKit')

for (const cmd of Object.values(commands)) {
  command.addCommand(cmd)
}

export default command
