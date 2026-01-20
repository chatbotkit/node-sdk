import { getRUNAS_USERID, getSECRET } from '../../../env.js'
import { print } from '../../../output.js'

import { ContactClient } from '@chatbotkit/sdk/contact/index.js'

import { Command } from 'commander'

function getClient() {
  return new ContactClient({
    secret: getSECRET(),
    runAsUserId: getRUNAS_USERID(),
  })
}

export const contactList = new Command()
  .name('list')
  .description('List contacts')
  .option('-s, --stream', 'Stream contacts')
  .action(async (str, options) => {
    const { stream } = options

    const client = getClient()

    if (stream) {
      for await (const contact of client.list().stream()) {
        print(contact)
      }
    } else {
      const { items } = await client.list()

      for (const contact of items) {
        print(contact)
      }
    }
  })

export const contactFetch = new Command()
  .name('fetch')
  .description('Fetch contact')
  .argument('<contactId>', 'Contact ID')
  .action(async (contactId) => {
    const client = getClient()

    const contact = await client.fetch(contactId)

    print(contact)
  })

export const contactDelete = new Command()
  .name('delete')
  .description('Delete contact')
  .argument('<contactId>', 'Contact ID')
  .action(async (contactId) => {
    const client = getClient()

    await client.delete(contactId)
  })

/**
 * Commands registry - MUST include ALL ContactClient methods
 *
 * @todo enable types once we have more SDK clients implemented
 *
 * _satisfies {Partial<Record<keyof ContactClient, import('commander').Command>>}
 * _type {Record<keyof ContactClient, import('commander').Command>}
 */
const commands = {
  list: contactList,
  fetch: contactFetch,
  delete: contactDelete,
}

export const command = new Command()
  .name('contact')
  .description('Contact tools for ChatBotKit')

for (const cmd of Object.values(commands)) {
  command.addCommand(cmd)
}

export default command
