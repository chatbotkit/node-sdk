import { getRUNAS_USERID, getSECRET } from '../../../../env.js'
import { print } from '../../../../output.js'

import { DatasetFileClient } from '@chatbotkit/sdk/dataset/file/index.js'

import { Command } from 'commander'

function getClient() {
  return new DatasetFileClient({
    secret: getSECRET(),
    runAsUserId: getRUNAS_USERID(),
  })
}

export const fileList = new Command()
  .name('list')
  .description('List files')
  .option('-s, --stream', 'Stream files')
  .argument('<datasetId>', 'Dataset ID')
  .action(async (datasetId, options) => {
    const { stream } = options

    const client = getClient()

    if (stream) {
      for await (const file of client.list(datasetId).stream()) {
        print(file)
      }
    } else {
      const { items } = await client.list(datasetId)

      for (const file of items) {
        print(file)
      }
    }
  })

export const fileAttach = new Command()
  .name('attach')
  .description('Attach file to dataset')
  .argument('<datasetId>', 'Dataset ID')
  .argument('<fileId>', 'File ID')
  .action(async (datasetId, fileId) => {
    const client = getClient()

    // @note SDK requires request object as third parameter
    const result = await client.attach(datasetId, fileId, {})

    print(result)
  })

export const fileDetach = new Command()
  .name('detach')
  .description('Detach file from dataset')
  .argument('<datasetId>', 'Dataset ID')
  .argument('<fileId>', 'File ID')
  .action(async (datasetId, fileId) => {
    const client = getClient()

    // @note SDK requires request object as third parameter
    const result = await client.detach(datasetId, fileId, {})

    print(result)
  })

export const fileSync = new Command()
  .name('sync')
  .description('Sync file')
  .argument('<datasetId>', 'Dataset ID')
  .argument('<fileId>', 'File ID')
  .action(async (datasetId, fileId) => {
    const client = getClient()

    // @note SDK requires request object as third parameter
    const result = await client.sync(datasetId, fileId, {})

    print(result)
  })

/**
 * Commands registry - MUST include ALL DatasetFileClient methods
 *
 * @todo enable types once we have more SDK clients implemented
 *
 * _satisfies {Partial<Record<keyof DatasetFileClient, import('commander').Command>>}
 * _type {Record<keyof DatasetFileClient, import('commander').Command>}
 */
const commands = {
  list: fileList,
  attach: fileAttach,
  detach: fileDetach,
  sync: fileSync,
}

export const command = new Command()
  .name('file')
  .description('File tools for ChatBotKit')

for (const cmd of Object.values(commands)) {
  command.addCommand(cmd)
}

export default command
