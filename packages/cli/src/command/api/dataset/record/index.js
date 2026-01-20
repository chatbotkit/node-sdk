import { getRUNAS_USERID, getSECRET } from '../../../../env.js'
import { print } from '../../../../output.js'

import { DatasetRecordClient } from '@chatbotkit/sdk/dataset/record/index.js'

import { Command } from 'commander'

function getClient() {
  return new DatasetRecordClient({
    secret: getSECRET(),
    runAsUserId: getRUNAS_USERID(),
  })
}

export const recordList = new Command()
  .name('list')
  .description('List records')
  .option('-s, --stream', 'Stream records')
  .argument('<datasetId>', 'Dataset ID')
  .action(async (datasetId, options) => {
    const { stream } = options

    const client = getClient()

    if (stream) {
      for await (const record of client.list(datasetId).stream()) {
        print(record)
      }
    } else {
      const { items } = await client.list(datasetId)

      for (const record of items) {
        print(record)
      }
    }
  })

export const recordFetch = new Command()
  .name('fetch')
  .description('Fetch record')
  .argument('<datasetId>', 'Dataset ID')
  .argument('<recordId>', 'Record ID')
  .action(async (datasetId, recordId) => {
    const client = getClient()

    const record = await client.fetch(datasetId, recordId)

    print(record)
  })

export const recordDelete = new Command()
  .name('delete')
  .description('Delete record')
  .argument('<datasetId>', 'Dataset ID')
  .argument('<recordId>', 'Record ID')
  .action(async (datasetId, recordId) => {
    const client = getClient()

    await client.delete(datasetId, recordId)
  })

export const recordExport = new Command()
  .name('export')
  .description('Export records')
  .option('-s, --stream', 'Stream exports')
  .argument('<datasetId>', 'Dataset ID')
  .action(async (datasetId, options) => {
    const { stream } = options

    const client = getClient()

    if (stream) {
      for await (const record of client.export(datasetId).stream()) {
        print(record)
      }
    } else {
      const result = await client.export(datasetId)

      print(result)
    }
  })

/**
 * Commands registry - MUST include ALL DatasetRecordClient methods
 *
 * @todo enable types once we have more SDK clients implemented
 *
 * _satisfies {Partial<Record<keyof DatasetRecordClient, import('commander').Command>>}
 * _type {Record<keyof DatasetRecordClient, import('commander').Command>}
 */
const commands = {
  list: recordList,
  fetch: recordFetch,
  delete: recordDelete,
  export: recordExport,
}

export const command = new Command()
  .name('record')
  .description('Record tools for ChatBotKit')

for (const cmd of Object.values(commands)) {
  command.addCommand(cmd)
}

export default command
