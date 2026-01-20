import { getRUNAS_USERID, getSECRET } from '../../../env.js'
import { print } from '../../../output.js'
import file from './file/index.js'
import record from './record/index.js'

import { DatasetClient } from '@chatbotkit/sdk/dataset/index.js'

import { Command } from 'commander'

function getClient() {
  return new DatasetClient({
    secret: getSECRET(),
    runAsUserId: getRUNAS_USERID(),
  })
}

export const datasetList = new Command()
  .name('list')
  .description('List datasets')
  .option('-s, --stream', 'Stream datasets')
  .action(async (str, options) => {
    const { stream } = options

    const client = getClient()

    if (stream) {
      for await (const dataset of client.list().stream()) {
        print(dataset)
      }
    } else {
      const { items } = await client.list()

      for (const dataset of items) {
        print(dataset)
      }
    }
  })

export const datasetFetch = new Command()
  .name('fetch')
  .description('Fetch dataset')
  .argument('<datasetId>', 'Dataset ID')
  .action(async (datasetId) => {
    const client = getClient()

    const dataset = await client.fetch(datasetId)

    print(dataset)
  })

export const datasetDelete = new Command()
  .name('delete')
  .description('Delete dataset')
  .argument('<datasetId>', 'Dataset ID')
  .action(async (datasetId) => {
    const client = getClient()

    await client.delete(datasetId)
  })

/**
 * Commands registry - MUST include ALL DatasetClient methods
 *
 * @todo enable types once we have more SDK clients implemented
 *
 * _satisfies {Partial<Record<keyof DatasetClient, import('commander').Command>>}
 * _type {Record<keyof DatasetClient, import('commander').Command>}
 */
const commands = {
  list: datasetList,
  fetch: datasetFetch,
  delete: datasetDelete,
  file,
  record,
}

export const command = new Command()
  .name('dataset')
  .description('Dataset tools for ChatBotKit')

for (const cmd of Object.values(commands)) {
  command.addCommand(cmd)
}

export default command
