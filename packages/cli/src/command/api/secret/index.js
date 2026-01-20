import { getRUNAS_USERID, getSECRET } from '../../../env.js'
import { print } from '../../../output.js'

import { SecretClient } from '@chatbotkit/sdk/secret/index.js'

import { Command } from 'commander'

function getClient() {
  return new SecretClient({
    secret: getSECRET(),
    runAsUserId: getRUNAS_USERID(),
  })
}

export const secretList = new Command()
  .name('list')
  .description('List secrets')
  .option('-s, --stream', 'Stream secrets')
  .action(async (str, options) => {
    const { stream } = options

    const client = getClient()

    if (stream) {
      for await (const secret of client.list().stream()) {
        print(secret)
      }
    } else {
      const { items } = await client.list()

      for (const secret of items) {
        print(secret)
      }
    }
  })

export const secretFetch = new Command()
  .name('fetch')
  .description('Fetch secret')
  .argument('<secretId>', 'Secret ID')
  .action(async (secretId) => {
    const client = getClient()

    const secret = await client.fetch(secretId)

    print(secret)
  })

export const secretDelete = new Command()
  .name('delete')
  .description('Delete secret')
  .argument('<secretId>', 'Secret ID')
  .action(async (secretId) => {
    const client = getClient()

    await client.delete(secretId)
  })

export const secretRevoke = new Command()
  .name('revoke')
  .description('Revoke secret')
  .argument('<secretId>', 'Secret ID')
  .action(async (secretId) => {
    const client = getClient()

    const result = await client.revoke(secretId)

    print(result)
  })

export const secretVerify = new Command()
  .name('verify')
  .description('Verify secret')
  .argument('<secretId>', 'Secret ID')
  .action(async (secretId) => {
    const client = getClient()

    const result = await client.verify(secretId)

    print(result)
  })

/**
 * Commands registry - MUST include ALL SecretClient methods
 *
 * @todo enable types once we have more SDK clients implemented
 *
 * _satisfies {Partial<Record<keyof SecretClient, import('commander').Command>>}
 * _type {Record<keyof SecretClient, import('commander').Command>}
 */
const commands = {
  list: secretList,
  fetch: secretFetch,
  delete: secretDelete,
  revoke: secretRevoke,
  verify: secretVerify,
}

export const command = new Command()
  .name('secret')
  .description('Secret tools for ChatBotKit')

for (const cmd of Object.values(commands)) {
  command.addCommand(cmd)
}

export default command
