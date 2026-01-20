import { getRUNAS_USERID, getSECRET } from '../../../../env.js'
import { print } from '../../../../output.js'

import { WhatsAppIntegrationClient } from '@chatbotkit/sdk/integration/whatsapp/index.js'

import { Command } from 'commander'

function getClient() {
  return new WhatsAppIntegrationClient({
    secret: getSECRET(),
    runAsUserId: getRUNAS_USERID(),
  })
}

export const whatsappList = new Command()
  .name('list')
  .description('List whatsapp integrations')
  .option('-s, --stream', 'Stream whatsapp integrations')
  .action(async (str, options) => {
    const { stream } = options

    const client = getClient()

    if (stream) {
      for await (const whatsapp of client.list().stream()) {
        print(whatsapp)
      }
    } else {
      const { items } = await client.list()

      for (const whatsapp of items) {
        print(whatsapp)
      }
    }
  })

export const whatsappFetch = new Command()
  .name('fetch')
  .description('Fetch whatsapp integration')
  .argument('<whatsappId>', 'WhatsApp ID')
  .action(async (whatsappId) => {
    const client = getClient()

    const whatsapp = await client.fetch(whatsappId)

    print(whatsapp)
  })

export const whatsappDelete = new Command()
  .name('delete')
  .description('Delete whatsapp integration')
  .argument('<whatsappId>', 'WhatsApp ID')
  .action(async (whatsappId) => {
    const client = getClient()

    await client.delete(whatsappId)
  })

export const whatsappSetup = new Command()
  .name('setup')
  .description('Setup whatsapp integration')
  .argument('<whatsappId>', 'WhatsApp ID')
  .action(async (whatsappId) => {
    const client = getClient()

    const result = await client.setup(whatsappId)

    print(result)
  })

/**
 * Commands registry - MUST include ALL WhatsAppIntegrationClient methods
 *
 * @todo enable types once we have more SDK clients implemented
 *
 * _satisfies {Partial<Record<keyof WhatsAppIntegrationClient, import('commander').Command>>}
 * _type {Record<keyof WhatsAppIntegrationClient, import('commander').Command>}
 */
const commands = {
  list: whatsappList,
  fetch: whatsappFetch,
  delete: whatsappDelete,
  setup: whatsappSetup,
}

export const command = new Command()
  .name('whatsapp')
  .description('WhatsApp integration tools for ChatBotKit')

for (const cmd of Object.values(commands)) {
  command.addCommand(cmd)
}

export default command
