import { getRUNAS_USERID, getSECRET } from '../../../../env.js'
import { print } from '../../../../output.js'

import { TriggerIntegrationClient } from '@chatbotkit/sdk/integration/trigger/index.js'

import { Command } from 'commander'

function getClient() {
  return new TriggerIntegrationClient({
    secret: getSECRET(),
    runAsUserId: getRUNAS_USERID(),
  })
}

export const triggerList = new Command()
  .name('list')
  .description('List trigger integrations')
  .option('-s, --stream', 'Stream trigger integrations')
  .action(async (str, options) => {
    const { stream } = options

    const client = getClient()

    if (stream) {
      for await (const trigger of client.list().stream()) {
        print(trigger)
      }
    } else {
      const { items } = await client.list()

      for (const trigger of items) {
        print(trigger)
      }
    }
  })

export const triggerFetch = new Command()
  .name('fetch')
  .description('Fetch trigger integration')
  .argument('<triggerId>', 'Trigger ID')
  .action(async (triggerId) => {
    const client = getClient()

    const trigger = await client.fetch(triggerId)

    print(trigger)
  })

export const triggerDelete = new Command()
  .name('delete')
  .description('Delete trigger integration')
  .argument('<triggerId>', 'Trigger ID')
  .action(async (triggerId) => {
    const client = getClient()

    await client.delete(triggerId)
  })

export const triggerInvoke = new Command()
  .name('invoke')
  .description('Invoke trigger integration')
  .argument('<triggerId>', 'Trigger ID')
  .action(async (triggerId) => {
    const client = getClient()

    const result = await client.invoke(triggerId)

    print(result)
  })

/**
 * Commands registry - MUST include ALL TriggerIntegrationClient methods
 *
 * @todo enable types once we have more SDK clients implemented
 *
 * _satisfies {Partial<Record<keyof TriggerIntegrationClient, import('commander').Command>>}
 * _type {Record<keyof TriggerIntegrationClient, import('commander').Command>}
 */
const commands = {
  list: triggerList,
  fetch: triggerFetch,
  delete: triggerDelete,
  invoke: triggerInvoke,
}

export const command = new Command()
  .name('trigger')
  .description('Trigger integration tools for ChatBotKit')

for (const cmd of Object.values(commands)) {
  command.addCommand(cmd)
}

export default command
