import { Command } from 'commander'
import { DatasetClient } from '@chatbotkit/sdk/dataset/index.js'

import { print } from '../../../output.js'
import { getSECRET, getRUNAS_USERID } from '../../../env.js'

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
  .argument('<id>', 'Dataset ID')
  .action(async (id) => {
    const dataset = await client.fetch(id)

    print(dataset)
  })

export const datasetDelete = new Command()
  .name('delete')
  .description('Delete dataset')
  .argument('<id>', 'Dataset ID')
  .action(async (id) => {
    await client.delete(id)
  })

export const command = new Command()
  .name('dataset')
  .description('Dataset tools for ChatBotKit')
  .addCommand(datasetList)
  .addCommand(datasetFetch)
  .addCommand(datasetDelete)

export default command