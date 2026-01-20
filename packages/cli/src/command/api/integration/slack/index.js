import { getRUNAS_USERID, getSECRET } from '../../../../env.js'
import { print } from '../../../../output.js'

import { SlackIntegrationClient } from '@chatbotkit/sdk/integration/slack/index.js'

import { Command } from 'commander'

function getClient() {
  return new SlackIntegrationClient({
    secret: getSECRET(),
    runAsUserId: getRUNAS_USERID(),
  })
}

export const slackList = new Command()
  .name('list')
  .description('List slack integrations')
  .option('-s, --stream', 'Stream slack integrations')
  .action(async (str, options) => {
    const { stream } = options

    const client = getClient()

    if (stream) {
      for await (const slack of client.list().stream()) {
        print(slack)
      }
    } else {
      const { items } = await client.list()

      for (const slack of items) {
        print(slack)
      }
    }
  })

export const slackFetch = new Command()
  .name('fetch')
  .description('Fetch slack integration')
  .argument('<slackId>', 'Slack ID')
  .action(async (slackId) => {
    const client = getClient()

    const slack = await client.fetch(slackId)

    print(slack)
  })

export const slackDelete = new Command()
  .name('delete')
  .description('Delete slack integration')
  .argument('<slackId>', 'Slack ID')
  .action(async (slackId) => {
    const client = getClient()

    await client.delete(slackId)
  })

export const slackSetup = new Command()
  .name('setup')
  .description('Setup slack integration')
  .argument('<slackId>', 'Slack ID')
  .action(async (slackId) => {
    const client = getClient()

    const result = await client.setup(slackId)

    print(result)
  })

/**
 * Commands registry - MUST include ALL SlackIntegrationClient methods
 *
 * @todo enable types once we have more SDK clients implemented
 *
 * _satisfies {Partial<Record<keyof SlackIntegrationClient, import('commander').Command>>}
 * _type {Record<keyof SlackIntegrationClient, import('commander').Command>}
 */
const commands = {
  list: slackList,
  fetch: slackFetch,
  delete: slackDelete,
  setup: slackSetup,
}

export const command = new Command()
  .name('slack')
  .description('Slack integration tools for ChatBotKit')

for (const cmd of Object.values(commands)) {
  command.addCommand(cmd)
}

export default command
