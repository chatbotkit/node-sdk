import { Command } from 'commander'
import { PartnerUserClient } from '@chatbotkit/sdk/partner/user/index.js'

import { print } from '../../../../output.js'
import { getSECRET, getRUNAS_USERID } from '../../../../env.js'

const client = new PartnerUserClient({
  secret: getSECRET(),
  runAsUserId: getRUNAS_USERID(),
})

export const userList = new Command()
  .name('list')
  .description('List users')
  .option('-s, --stream', 'Stream users')
  .action(async (_arg, options) => {
    const { stream } = options

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
    const user = await client.fetch(userId)

    print(user)
  })

export const userDelete = new Command()
  .name('delete')
  .description('Delete user')
  .argument('<userId>', 'User ID')
  .action(async (userId) => {
    await client.delete(userId)
  })

export const command = new Command()
  .name('user')
  .description('User tools for ChatBotKit')
  .addCommand(userList)
  .addCommand(userFetch)
  .addCommand(userDelete)

export default command
