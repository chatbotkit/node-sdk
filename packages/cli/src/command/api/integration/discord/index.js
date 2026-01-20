import { getRUNAS_USERID, getSECRET } from '../../../../env.js'
import { print } from '../../../../output.js'

import { DiscordIntegrationClient } from '@chatbotkit/sdk/integration/discord/index.js'

import { Command } from 'commander'

function getClient() {
  return new DiscordIntegrationClient({
    secret: getSECRET(),
    runAsUserId: getRUNAS_USERID(),
  })
}

export const discordList = new Command()
  .name('list')
  .description('List discord integrations')
  .option('-s, --stream', 'Stream discord integrations')
  .action(async (str, options) => {
    const { stream } = options

    const client = getClient()

    if (stream) {
      for await (const discord of client.list().stream()) {
        print(discord)
      }
    } else {
      const { items } = await client.list()

      for (const discord of items) {
        print(discord)
      }
    }
  })

export const discordFetch = new Command()
  .name('fetch')
  .description('Fetch discord integration')
  .argument('<discordId>', 'Discord ID')
  .action(async (discordId) => {
    const client = getClient()

    const discord = await client.fetch(discordId)

    print(discord)
  })

export const discordDelete = new Command()
  .name('delete')
  .description('Delete discord integration')
  .argument('<discordId>', 'Discord ID')
  .action(async (discordId) => {
    const client = getClient()

    await client.delete(discordId)
  })

export const discordSetup = new Command()
  .name('setup')
  .description('Setup discord integration')
  .argument('<discordId>', 'Discord ID')
  .action(async (discordId) => {
    const client = getClient()

    const result = await client.setup(discordId)

    print(result)
  })

/**
 * Commands registry - MUST include ALL DiscordIntegrationClient methods
 *
 * @todo enable types once we have more SDK clients implemented
 *
 * _satisfies {Partial<Record<keyof DiscordIntegrationClient, import('commander').Command>>}
 * _type {Record<keyof DiscordIntegrationClient, import('commander').Command>}
 */
const commands = {
  list: discordList,
  fetch: discordFetch,
  delete: discordDelete,
  setup: discordSetup,
}

export const command = new Command()
  .name('discord')
  .description('Discord integration tools for ChatBotKit')

for (const cmd of Object.values(commands)) {
  command.addCommand(cmd)
}

export default command
