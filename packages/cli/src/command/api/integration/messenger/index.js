import { getRUNAS_USERID, getSECRET } from '../../../../env.js'
import { print } from '../../../../output.js'

import { MessengerIntegrationClient } from '@chatbotkit/sdk/integration/messenger/index.js'

import { Command } from 'commander'

function getClient() {
  return new MessengerIntegrationClient({
    secret: getSECRET(),
    runAsUserId: getRUNAS_USERID(),
  })
}

export const messengerList = new Command()
  .name('list')
  .description('List messenger integrations')
  .option('-s, --stream', 'Stream messenger integrations')
  .action(async (str, options) => {
    const { stream } = options

    const client = getClient()

    if (stream) {
      for await (const messenger of client.list().stream()) {
        print(messenger)
      }
    } else {
      const { items } = await client.list()

      for (const messenger of items) {
        print(messenger)
      }
    }
  })

export const messengerFetch = new Command()
  .name('fetch')
  .description('Fetch messenger integration')
  .argument('<messengerId>', 'Messenger ID')
  .action(async (messengerId) => {
    const client = getClient()

    const messenger = await client.fetch(messengerId)

    print(messenger)
  })

export const messengerDelete = new Command()
  .name('delete')
  .description('Delete messenger integration')
  .argument('<messengerId>', 'Messenger ID')
  .action(async (messengerId) => {
    const client = getClient()

    await client.delete(messengerId)
  })

export const messengerSetup = new Command()
  .name('setup')
  .description('Setup messenger integration')
  .argument('<messengerId>', 'Messenger ID')
  .action(async (messengerId) => {
    const client = getClient()

    const result = await client.setup(messengerId)

    print(result)
  })

/**
 * Commands registry - MUST include ALL MessengerIntegrationClient methods
 *
 * @todo enable types once we have more SDK clients implemented
 *
 * _satisfies {Partial<Record<keyof MessengerIntegrationClient, import('commander').Command>>}
 * _type {Record<keyof MessengerIntegrationClient, import('commander').Command>}
 */
const commands = {
  list: messengerList,
  fetch: messengerFetch,
  delete: messengerDelete,
  setup: messengerSetup,
}

export const command = new Command()
  .name('messenger')
  .description('Messenger integration tools for ChatBotKit')

for (const cmd of Object.values(commands)) {
  command.addCommand(cmd)
}

export default command
