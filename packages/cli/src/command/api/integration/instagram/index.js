import { getRUNAS_USERID, getSECRET } from '../../../../env.js'
import { print } from '../../../../output.js'

import { InstagramIntegrationClient } from '@chatbotkit/sdk/integration/instagram/index.js'

import { Command } from 'commander'

function getClient() {
  return new InstagramIntegrationClient({
    secret: getSECRET(),
    runAsUserId: getRUNAS_USERID(),
  })
}

export const instagramList = new Command()
  .name('list')
  .description('List instagram integrations')
  .option('-s, --stream', 'Stream instagram integrations')
  .action(async (str, options) => {
    const { stream } = options

    const client = getClient()

    if (stream) {
      for await (const instagram of client.list().stream()) {
        print(instagram)
      }
    } else {
      const { items } = await client.list()

      for (const instagram of items) {
        print(instagram)
      }
    }
  })

export const instagramFetch = new Command()
  .name('fetch')
  .description('Fetch instagram integration')
  .argument('<instagramId>', 'Instagram ID')
  .action(async (instagramId) => {
    const client = getClient()

    const instagram = await client.fetch(instagramId)

    print(instagram)
  })

export const instagramDelete = new Command()
  .name('delete')
  .description('Delete instagram integration')
  .argument('<instagramId>', 'Instagram ID')
  .action(async (instagramId) => {
    const client = getClient()

    await client.delete(instagramId)
  })

export const instagramSetup = new Command()
  .name('setup')
  .description('Setup instagram integration')
  .argument('<instagramId>', 'Instagram ID')
  .action(async (instagramId) => {
    const client = getClient()

    const result = await client.setup(instagramId)

    print(result)
  })

/**
 * Commands registry - MUST include ALL InstagramIntegrationClient methods
 *
 * @todo enable types once we have more SDK clients implemented
 *
 * _satisfies {Partial<Record<keyof InstagramIntegrationClient, import('commander').Command>>}
 * _type {Record<keyof InstagramIntegrationClient, import('commander').Command>}
 */
const commands = {
  list: instagramList,
  fetch: instagramFetch,
  delete: instagramDelete,
  setup: instagramSetup,
}

export const command = new Command()
  .name('instagram')
  .description('Instagram integration tools for ChatBotKit')

for (const cmd of Object.values(commands)) {
  command.addCommand(cmd)
}

export default command
