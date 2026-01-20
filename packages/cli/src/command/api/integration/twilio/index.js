import { getRUNAS_USERID, getSECRET } from '../../../../env.js'
import { print } from '../../../../output.js'

import { TwilioIntegrationClient } from '@chatbotkit/sdk/integration/twilio/index.js'

import { Command } from 'commander'

function getClient() {
  return new TwilioIntegrationClient({
    secret: getSECRET(),
    runAsUserId: getRUNAS_USERID(),
  })
}

export const twilioList = new Command()
  .name('list')
  .description('List twilio integrations')
  .option('-s, --stream', 'Stream twilio integrations')
  .action(async (str, options) => {
    const { stream } = options

    const client = getClient()

    if (stream) {
      for await (const twilio of client.list().stream()) {
        print(twilio)
      }
    } else {
      const { items } = await client.list()

      for (const twilio of items) {
        print(twilio)
      }
    }
  })

export const twilioFetch = new Command()
  .name('fetch')
  .description('Fetch twilio integration')
  .argument('<twilioId>', 'Twilio ID')
  .action(async (twilioId) => {
    const client = getClient()

    const twilio = await client.fetch(twilioId)

    print(twilio)
  })

export const twilioDelete = new Command()
  .name('delete')
  .description('Delete twilio integration')
  .argument('<twilioId>', 'Twilio ID')
  .action(async (twilioId) => {
    const client = getClient()

    await client.delete(twilioId)
  })

export const twilioSetup = new Command()
  .name('setup')
  .description('Setup twilio integration')
  .argument('<twilioId>', 'Twilio ID')
  .action(async (twilioId) => {
    const client = getClient()

    const result = await client.setup(twilioId)

    print(result)
  })

/**
 * Commands registry - MUST include ALL TwilioIntegrationClient methods
 *
 * @todo enable types once we have more SDK clients implemented
 *
 * _satisfies {Partial<Record<keyof TwilioIntegrationClient, import('commander').Command>>}
 * _type {Record<keyof TwilioIntegrationClient, import('commander').Command>}
 */
const commands = {
  list: twilioList,
  fetch: twilioFetch,
  delete: twilioDelete,
  setup: twilioSetup,
}

export const command = new Command()
  .name('twilio')
  .description('Twilio integration tools for ChatBotKit')

for (const cmd of Object.values(commands)) {
  command.addCommand(cmd)
}

export default command
