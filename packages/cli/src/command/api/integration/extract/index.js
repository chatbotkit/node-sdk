import { getRUNAS_USERID, getSECRET } from '../../../../env.js'
import { print } from '../../../../output.js'

import { ExtractIntegrationClient } from '@chatbotkit/sdk/integration/extract/index.js'

import { Command } from 'commander'

function getClient() {
  return new ExtractIntegrationClient({
    secret: getSECRET(),
    runAsUserId: getRUNAS_USERID(),
  })
}

export const extractList = new Command()
  .name('list')
  .description('List extract integrations')
  .option('-s, --stream', 'Stream extract integrations')
  .action(async (str, options) => {
    const { stream } = options

    const client = getClient()

    if (stream) {
      for await (const extract of client.list().stream()) {
        print(extract)
      }
    } else {
      const { items } = await client.list()

      for (const extract of items) {
        print(extract)
      }
    }
  })

export const extractFetch = new Command()
  .name('fetch')
  .description('Fetch extract integration')
  .argument('<extractId>', 'Extract ID')
  .action(async (extractId) => {
    const client = getClient()

    const extract = await client.fetch(extractId)

    print(extract)
  })

export const extractDelete = new Command()
  .name('delete')
  .description('Delete extract integration')
  .argument('<extractId>', 'Extract ID')
  .action(async (extractId) => {
    const client = getClient()

    await client.delete(extractId)
  })

/**
 * Commands registry - MUST include ALL ExtractIntegrationClient methods
 *
 * @todo enable types once we have more SDK clients implemented
 *
 * _satisfies {Partial<Record<keyof ExtractIntegrationClient, import('commander').Command>>}
 * _type {Record<keyof ExtractIntegrationClient, import('commander').Command>}
 */
const commands = {
  list: extractList,
  fetch: extractFetch,
  delete: extractDelete,
}

export const command = new Command()
  .name('extract')
  .description('Extract integration tools for ChatBotKit')

for (const cmd of Object.values(commands)) {
  command.addCommand(cmd)
}

export default command
