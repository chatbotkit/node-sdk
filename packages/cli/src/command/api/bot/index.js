import { getRUNAS_USERID, getSECRET } from '../../../env.js'
import { print } from '../../../output.js'

import { BotClient } from '@chatbotkit/sdk/bot/index.js'

import { Command } from 'commander'

function getClient() {
  return new BotClient({
    secret: getSECRET(),
    runAsUserId: getRUNAS_USERID(),
  })
}

export const botList = new Command()
  .name('list')
  .description('List bots')
  .option('-s, --stream', 'Stream bots')
  .action(async (str, options) => {
    const { stream } = options

    const client = getClient()

    if (stream) {
      for await (const bot of client.list().stream()) {
        print(bot)
      }
    } else {
      const { items } = await client.list()

      for (const bot of items) {
        print(bot)
      }
    }
  })

export const botFetch = new Command()
  .name('fetch')
  .description('Fetch bot')
  .argument('<botId>', 'Bot ID')
  .action(async (botId) => {
    const client = getClient()

    const bot = await client.fetch(botId)

    print(bot)
  })

export const botDelete = new Command()
  .name('delete')
  .description('Delete bot')
  .argument('<botId>', 'Bot ID')
  .action(async (botId) => {
    const client = getClient()

    await client.delete(botId)
  })

/**
 * Commands registry - MUST include ALL BotClient methods
 *
 * @todo enable types once we have more SDK clients implemented
 *
 * _satisfies {Partial<Record<keyof BotClient, import('commander').Command>>}
 * _type {Record<keyof BotClient, import('commander').Command>}
 */
const commands = {
  list: botList,
  fetch: botFetch,
  delete: botDelete,
}

export const command = new Command()
  .name('bot')
  .description('Bot tools for ChatBotKit')

for (const cmd of Object.values(commands)) {
  command.addCommand(cmd)
}

export default command
