import { getRUNAS_USERID, getSECRET } from '../../../../env.js'
import { print } from '../../../../output.js'

import { McpServerIntegrationClient } from '@chatbotkit/sdk/integration/mcpserver/index.js'

import { Command } from 'commander'

function getClient() {
  return new McpServerIntegrationClient({
    secret: getSECRET(),
    runAsUserId: getRUNAS_USERID(),
  })
}

export const mcpserverList = new Command()
  .name('list')
  .description('List MCP server integrations')
  .option('-s, --stream', 'Stream MCP server integrations')
  .action(async (str, options) => {
    const { stream } = options

    const client = getClient()

    if (stream) {
      for await (const mcpserver of client.list().stream()) {
        print(mcpserver)
      }
    } else {
      const { items } = await client.list()

      for (const mcpserver of items) {
        print(mcpserver)
      }
    }
  })

export const mcpserverFetch = new Command()
  .name('fetch')
  .description('Fetch MCP server integration')
  .argument('<mcpserverId>', 'MCP Server ID')
  .action(async (mcpserverId) => {
    const client = getClient()

    const mcpserver = await client.fetch(mcpserverId)

    print(mcpserver)
  })

export const mcpserverDelete = new Command()
  .name('delete')
  .description('Delete MCP server integration')
  .argument('<mcpserverId>', 'MCP Server ID')
  .action(async (mcpserverId) => {
    const client = getClient()

    await client.delete(mcpserverId)
  })

/**
 * Commands registry - MUST include ALL McpServerIntegrationClient methods
 *
 * @todo enable types once we have more SDK clients implemented
 *
 * _satisfies {Partial<Record<keyof McpServerIntegrationClient, import('commander').Command>>}
 * _type {Record<keyof McpServerIntegrationClient, import('commander').Command>}
 */
const commands = {
  list: mcpserverList,
  fetch: mcpserverFetch,
  delete: mcpserverDelete,
}

export const command = new Command()
  .name('mcpserver')
  .description('MCP Server integration tools for ChatBotKit')

for (const cmd of Object.values(commands)) {
  command.addCommand(cmd)
}

export default command
