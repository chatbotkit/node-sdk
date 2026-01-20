import { getRUNAS_USERID, getSECRET } from '../../../../env.js'
import { print } from '../../../../output.js'

import { WidgetIntegrationClient } from '@chatbotkit/sdk/integration/widget/index.js'

import { Command } from 'commander'

function getClient() {
  return new WidgetIntegrationClient({
    secret: getSECRET(),
    runAsUserId: getRUNAS_USERID(),
  })
}

export const widgetList = new Command()
  .name('list')
  .description('List widget integrations')
  .option('-s, --stream', 'Stream widget integrations')
  .action(async (str, options) => {
    const { stream } = options

    const client = getClient()

    if (stream) {
      for await (const widget of client.list().stream()) {
        print(widget)
      }
    } else {
      const { items } = await client.list()

      for (const widget of items) {
        print(widget)
      }
    }
  })

export const widgetFetch = new Command()
  .name('fetch')
  .description('Fetch widget integration')
  .argument('<widgetId>', 'Widget ID')
  .action(async (widgetId) => {
    const client = getClient()

    const widget = await client.fetch(widgetId)

    print(widget)
  })

export const widgetDelete = new Command()
  .name('delete')
  .description('Delete widget integration')
  .argument('<widgetId>', 'Widget ID')
  .action(async (widgetId) => {
    const client = getClient()

    await client.delete(widgetId)
  })

export const widgetSetup = new Command()
  .name('setup')
  .description('Setup widget integration')
  .argument('<widgetId>', 'Widget ID')
  .action(async (widgetId) => {
    const client = getClient()

    const result = await client.setup(widgetId)

    print(result)
  })

/**
 * Commands registry - MUST include ALL WidgetIntegrationClient methods
 *
 * @todo enable types once we have more SDK clients implemented
 *
 * _satisfies {Partial<Record<keyof WidgetIntegrationClient, import('commander').Command>>}
 * _type {Record<keyof WidgetIntegrationClient, import('commander').Command>}
 */
const commands = {
  list: widgetList,
  fetch: widgetFetch,
  delete: widgetDelete,
  setup: widgetSetup,
}

export const command = new Command()
  .name('widget')
  .description('Widget integration tools for ChatBotKit')

for (const cmd of Object.values(commands)) {
  command.addCommand(cmd)
}

export default command
