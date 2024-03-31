import { getRUNAS_USERID, getSECRET } from '../../../../env.js'
import { print } from '../../../../output.js'

import { PartnerUserClient } from '@chatbotkit/sdk/partner/user/index.js'

import { Command } from 'commander'

function getClient() {
  return new PartnerUserClient({
    secret: getSECRET(),
    runAsUserId: getRUNAS_USERID(),
  })
}

export const userList = new Command()
  .name('list')
  .description('List users')
  .option('-s, --stream', 'Stream users')
  .action(async (_arg, options) => {
    const { stream } = options

    const client = getClient()

    if (stream) {
      for await (const user of client.list().stream()) {
        print(user)
      }
    } else {
      const { items } = await client.list()

      for (const user of items) {
        print(user)
      }
    }
  })

export const userFetch = new Command()
  .name('fetch')
  .description('Fetch user')
  .argument('User ID')
  .action(async (userId) => {
    const client = getClient()

    const user = await client.fetch(userId)

    print(user)
  })

export const userDelete = new Command()
  .name('delete')
  .description('Delete user')
  .argument('<userId>', 'User ID')
  .action(async (userId) => {
    const client = getClient()

    await client.delete(userId)
  })

export const command = new Command()
  .name('user')
  .description('User tools for ChatBotKit')
  .addCommand(userList)
  .addCommand(userFetch)
  .addCommand(userDelete)

export default command
