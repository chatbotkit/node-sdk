import { getRUNAS_USERID, getSECRET } from '../../../../env.js'
import { print } from '../../../../output.js'

import { TelegramIntegrationClient } from '@chatbotkit/sdk/integration/telegram/index.js'

import { Command } from 'commander'

function getClient() {
  return new TelegramIntegrationClient({
    secret: getSECRET(),
    runAsUserId: getRUNAS_USERID(),
  })
}

export const telegramList = new Command()
  .name('list')
  .description('List telegram integrations')
  .option('-s, --stream', 'Stream telegram integrations')
  .action(async (str, options) => {
    const { stream } = options

    const client = getClient()

    if (stream) {
      for await (const telegram of client.list().stream()) {
        print(telegram)
      }
    } else {
      const { items } = await client.list()

      for (const telegram of items) {
        print(telegram)
      }
    }
  })

export const telegramFetch = new Command()
  .name('fetch')
  .description('Fetch telegram integration')
  .argument('<telegramId>', 'Telegram ID')
  .action(async (telegramId) => {
    const client = getClient()

    const telegram = await client.fetch(telegramId)

    print(telegram)
  })

export const telegramDelete = new Command()
  .name('delete')
  .description('Delete telegram integration')
  .argument('<telegramId>', 'Telegram ID')
  .action(async (telegramId) => {
    const client = getClient()

    await client.delete(telegramId)
  })

export const telegramSetup = new Command()
  .name('setup')
  .description('Setup telegram integration')
  .argument('<telegramId>', 'Telegram ID')
  .action(async (telegramId) => {
    const client = getClient()

    const result = await client.setup(telegramId)

    print(result)
  })

/**
 * Commands registry - MUST include ALL TelegramIntegrationClient methods
 *
 * @todo enable types once we have more SDK clients implemented
 *
 * _satisfies {Partial<Record<keyof TelegramIntegrationClient, import('commander').Command>>}
 * _type {Record<keyof TelegramIntegrationClient, import('commander').Command>}
 */
const commands = {
  list: telegramList,
  fetch: telegramFetch,
  delete: telegramDelete,
  setup: telegramSetup,
}

export const command = new Command()
  .name('telegram')
  .description('Telegram integration tools for ChatBotKit')

for (const cmd of Object.values(commands)) {
  command.addCommand(cmd)
}

export default command
