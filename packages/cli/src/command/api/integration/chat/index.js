import { getAPI_URL, getRUNAS_USERID, getTOKEN } from '../../../../env.js'
import { print } from '../../../../output.js'

import { ChatIntegrationClient } from '@chatbotkit/sdk/integration/chat/index.js'

import { Command } from 'commander'

function getClient() {
  return new ChatIntegrationClient({
    token: getTOKEN(),
    baseUrl: getAPI_URL(),
    runAsUserId: getRUNAS_USERID(),
  })
}

export const chatList = new Command()
  .name('list')
  .description('List chat integrations')
  .option('-s, --stream', 'Stream chat integrations')
  .action(async (str, options) => {
    const { stream } = options

    const client = getClient()

    if (stream) {
      for await (const chat of client.list().stream()) {
        print(chat)
      }
    } else {
      const { items } = await client.list()

      for (const chat of items) {
        print(chat)
      }
    }
  })

export const chatFetch = new Command()
  .name('fetch')
  .description('Fetch chat integration')
  .argument('<chatId>', 'Chat ID')
  .action(async (chatId) => {
    const client = getClient()

    const chat = await client.fetch(chatId)

    print(chat)
  })

export const chatDelete = new Command()
  .name('delete')
  .description('Delete chat integration')
  .argument('<chatId>', 'Chat ID')
  .action(async (chatId) => {
    const client = getClient()

    await client.delete(chatId)
  })

export const chatSetup = new Command()
  .name('setup')
  .description('Setup chat integration')
  .argument('<chatId>', 'Chat ID')
  .action(async (chatId) => {
    const client = getClient()

    const result = await client.setup(chatId)

    print(result)
  })

/**
 * Commands registry - MUST include ALL ChatIntegrationClient methods
 *
 * @todo enable types once we have more SDK clients implemented
 *
 * _satisfies {Partial<Record<keyof ChatIntegrationClient, import('commander').Command>>}
 * _type {Record<keyof ChatIntegrationClient, import('commander').Command>}
 */
const commands = {
  list: chatList,
  fetch: chatFetch,
  delete: chatDelete,
  setup: chatSetup,
}

export const command = new Command()
  .name('chat')
  .description('Chat integration tools for ChatBotKit')

for (const cmd of Object.values(commands)) {
  command.addCommand(cmd)
}

export default command
