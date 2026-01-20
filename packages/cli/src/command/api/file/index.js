import { getRUNAS_USERID, getSECRET } from '../../../env.js'
import { print } from '../../../output.js'

import { FileClient } from '@chatbotkit/sdk/file/index.js'

import { Command } from 'commander'

function getClient() {
  return new FileClient({
    secret: getSECRET(),
    runAsUserId: getRUNAS_USERID(),
  })
}

export const fileList = new Command()
  .name('list')
  .description('List files')
  .option('-s, --stream', 'Stream files')
  .action(async (str, options) => {
    const { stream } = options

    const client = getClient()

    if (stream) {
      for await (const file of client.list().stream()) {
        print(file)
      }
    } else {
      const { items } = await client.list()

      for (const file of items) {
        print(file)
      }
    }
  })

export const fileFetch = new Command()
  .name('fetch')
  .description('Fetch file')
  .argument('<fileId>', 'File ID')
  .action(async (fileId) => {
    const client = getClient()

    const file = await client.fetch(fileId)

    print(file)
  })

export const fileDelete = new Command()
  .name('delete')
  .description('Delete file')
  .argument('<fileId>', 'File ID')
  .action(async (fileId) => {
    const client = getClient()

    await client.delete(fileId)
  })

export const fileSync = new Command()
  .name('sync')
  .description('Sync file')
  .argument('<fileId>', 'File ID')
  .action(async (fileId) => {
    const client = getClient()

    const result = await client.sync(fileId)

    print(result)
  })

/**
 * Commands registry - MUST include ALL FileClient methods
 *
 * @todo enable types once we have more SDK clients implemented
 *
 * _satisfies {Partial<Record<keyof FileClient, import('commander').Command>>}
 * _type {Record<keyof FileClient, import('commander').Command>}
 */
const commands = {
  list: fileList,
  fetch: fileFetch,
  delete: fileDelete,
  sync: fileSync,
}

export const command = new Command()
  .name('file')
  .description('File tools for ChatBotKit')

for (const cmd of Object.values(commands)) {
  command.addCommand(cmd)
}

export default command
