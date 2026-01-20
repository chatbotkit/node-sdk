import { getRUNAS_USERID, getSECRET } from '../../../../env.js'
import { print } from '../../../../output.js'

import { NotionIntegrationClient } from '@chatbotkit/sdk/integration/notion/index.js'

import { Command } from 'commander'

function getClient() {
  return new NotionIntegrationClient({
    secret: getSECRET(),
    runAsUserId: getRUNAS_USERID(),
  })
}

export const notionList = new Command()
  .name('list')
  .description('List notion integrations')
  .option('-s, --stream', 'Stream notion integrations')
  .action(async (str, options) => {
    const { stream } = options

    const client = getClient()

    if (stream) {
      for await (const notion of client.list().stream()) {
        print(notion)
      }
    } else {
      const { items } = await client.list()

      for (const notion of items) {
        print(notion)
      }
    }
  })

export const notionFetch = new Command()
  .name('fetch')
  .description('Fetch notion integration')
  .argument('<notionId>', 'Notion ID')
  .action(async (notionId) => {
    const client = getClient()

    const notion = await client.fetch(notionId)

    print(notion)
  })

export const notionDelete = new Command()
  .name('delete')
  .description('Delete notion integration')
  .argument('<notionId>', 'Notion ID')
  .action(async (notionId) => {
    const client = getClient()

    await client.delete(notionId)
  })

export const notionSync = new Command()
  .name('sync')
  .description('Sync notion integration')
  .argument('<notionId>', 'Notion ID')
  .action(async (notionId) => {
    const client = getClient()

    const result = await client.sync(notionId)

    print(result)
  })

/**
 * Commands registry - MUST include ALL NotionIntegrationClient methods
 *
 * @todo enable types once we have more SDK clients implemented
 *
 * _satisfies {Partial<Record<keyof NotionIntegrationClient, import('commander').Command>>}
 * _type {Record<keyof NotionIntegrationClient, import('commander').Command>}
 */
const commands = {
  list: notionList,
  fetch: notionFetch,
  delete: notionDelete,
  sync: notionSync,
}

export const command = new Command()
  .name('notion')
  .description('Notion integration tools for ChatBotKit')

for (const cmd of Object.values(commands)) {
  command.addCommand(cmd)
}

export default command
