import { getRUNAS_USERID, getSECRET } from '../../../../env.js'
import { print } from '../../../../output.js'

import { SupportIntegrationClient } from '@chatbotkit/sdk/integration/support/index.js'

import { Command } from 'commander'

function getClient() {
  return new SupportIntegrationClient({
    secret: getSECRET(),
    runAsUserId: getRUNAS_USERID(),
  })
}

export const supportList = new Command()
  .name('list')
  .description('List support integrations')
  .option('-s, --stream', 'Stream support integrations')
  .action(async (str, options) => {
    const { stream } = options

    const client = getClient()

    if (stream) {
      for await (const support of client.list().stream()) {
        print(support)
      }
    } else {
      const { items } = await client.list()

      for (const support of items) {
        print(support)
      }
    }
  })

export const supportFetch = new Command()
  .name('fetch')
  .description('Fetch support integration')
  .argument('<supportId>', 'Support ID')
  .action(async (supportId) => {
    const client = getClient()

    const support = await client.fetch(supportId)

    print(support)
  })

export const supportDelete = new Command()
  .name('delete')
  .description('Delete support integration')
  .argument('<supportId>', 'Support ID')
  .action(async (supportId) => {
    const client = getClient()

    await client.delete(supportId)
  })

export const supportSetup = new Command()
  .name('setup')
  .description('Setup support integration')
  .argument('<supportId>', 'Support ID')
  .action(async (supportId) => {
    const client = getClient()

    const result = await client.setup(supportId)

    print(result)
  })

/**
 * Commands registry - MUST include ALL SupportIntegrationClient methods
 *
 * @todo enable types once we have more SDK clients implemented
 *
 * _satisfies {Partial<Record<keyof SupportIntegrationClient, import('commander').Command>>}
 * _type {Record<keyof SupportIntegrationClient, import('commander').Command>}
 */
const commands = {
  list: supportList,
  fetch: supportFetch,
  delete: supportDelete,
  setup: supportSetup,
}

export const command = new Command()
  .name('support')
  .description('Support integration tools for ChatBotKit')

for (const cmd of Object.values(commands)) {
  command.addCommand(cmd)
}

export default command
