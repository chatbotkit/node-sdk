import { getRUNAS_USERID, getSECRET } from '../../../env.js'
import { print } from '../../../output.js'

import { DatasetClient } from '@chatbotkit/sdk/dataset/index.js'

import { Command } from 'commander'

const client = new DatasetClient({
  secret: getSECRET(),
  runAsUserId: getRUNAS_USERID(),
})

export const datasetList = new Command()
  .name('list')
  .description('List datasets')
  .option('-s, --stream', 'Stream datasets')
  .action(async (str, options) => {
    const { stream } = options

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
    const dataset = await client.fetch(datasetId)

    print(dataset)
  })

export const datasetDelete = new Command()
  .name('delete')
  .description('Delete dataset')
  .argument('<datasetId>', 'Dataset ID')
  .action(async (datasetId) => {
    await client.delete(datasetId)
  })

export const command = new Command()
  .name('dataset')
  .description('Dataset tools for ChatBotKit')
  .addCommand(datasetList)
  .addCommand(datasetFetch)
  .addCommand(datasetDelete)

export default command
