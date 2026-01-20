import { getRUNAS_USERID, getSECRET } from '../../../../env.js'
import { print } from '../../../../output.js'

import { EmailIntegrationClient } from '@chatbotkit/sdk/integration/email/index.js'

import { Command } from 'commander'

function getClient() {
  return new EmailIntegrationClient({
    secret: getSECRET(),
    runAsUserId: getRUNAS_USERID(),
  })
}

export const emailList = new Command()
  .name('list')
  .description('List email integrations')
  .option('-s, --stream', 'Stream email integrations')
  .action(async (str, options) => {
    const { stream } = options

    const client = getClient()

    if (stream) {
      for await (const email of client.list().stream()) {
        print(email)
      }
    } else {
      const { items } = await client.list()

      for (const email of items) {
        print(email)
      }
    }
  })

export const emailFetch = new Command()
  .name('fetch')
  .description('Fetch email integration')
  .argument('<emailId>', 'Email ID')
  .action(async (emailId) => {
    const client = getClient()

    const email = await client.fetch(emailId)

    print(email)
  })

export const emailDelete = new Command()
  .name('delete')
  .description('Delete email integration')
  .argument('<emailId>', 'Email ID')
  .action(async (emailId) => {
    const client = getClient()

    await client.delete(emailId)
  })

export const emailSetup = new Command()
  .name('setup')
  .description('Setup email integration')
  .argument('<emailId>', 'Email ID')
  .action(async (emailId) => {
    const client = getClient()

    const result = await client.setup(emailId)

    print(result)
  })

/**
 * Commands registry - MUST include ALL EmailIntegrationClient methods
 *
 * @todo enable types once we have more SDK clients implemented
 *
 * _satisfies {Partial<Record<keyof EmailIntegrationClient, import('commander').Command>>}
 * _type {Record<keyof EmailIntegrationClient, import('commander').Command>}
 */
const commands = {
  list: emailList,
  fetch: emailFetch,
  delete: emailDelete,
  setup: emailSetup,
}

export const command = new Command()
  .name('email')
  .description('Email integration tools for ChatBotKit')

for (const cmd of Object.values(commands)) {
  command.addCommand(cmd)
}

export default command
