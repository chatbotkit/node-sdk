import { getRUNAS_USERID, getSECRET } from '../../../../env.js'
import { print } from '../../../../output.js'

import { SitemapIntegrationClient } from '@chatbotkit/sdk/integration/sitemap/index.js'

import { Command } from 'commander'

function getClient() {
  return new SitemapIntegrationClient({
    secret: getSECRET(),
    runAsUserId: getRUNAS_USERID(),
  })
}

export const sitemapList = new Command()
  .name('list')
  .description('List sitemap integrations')
  .option('-s, --stream', 'Stream sitemap integrations')
  .action(async (str, options) => {
    const { stream } = options

    const client = getClient()

    if (stream) {
      for await (const sitemap of client.list().stream()) {
        print(sitemap)
      }
    } else {
      const { items } = await client.list()

      for (const sitemap of items) {
        print(sitemap)
      }
    }
  })

export const sitemapFetch = new Command()
  .name('fetch')
  .description('Fetch sitemap integration')
  .argument('<sitemapId>', 'Sitemap ID')
  .action(async (sitemapId) => {
    const client = getClient()

    const sitemap = await client.fetch(sitemapId)

    print(sitemap)
  })

export const sitemapDelete = new Command()
  .name('delete')
  .description('Delete sitemap integration')
  .argument('<sitemapId>', 'Sitemap ID')
  .action(async (sitemapId) => {
    const client = getClient()

    await client.delete(sitemapId)
  })

export const sitemapSync = new Command()
  .name('sync')
  .description('Sync sitemap integration')
  .argument('<sitemapId>', 'Sitemap ID')
  .action(async (sitemapId) => {
    const client = getClient()

    const result = await client.sync(sitemapId)

    print(result)
  })

/**
 * Commands registry - MUST include ALL SitemapIntegrationClient methods
 *
 * @todo enable types once we have more SDK clients implemented
 *
 * _satisfies {Partial<Record<keyof SitemapIntegrationClient, import('commander').Command>>}
 * _type {Record<keyof SitemapIntegrationClient, import('commander').Command>}
 */
const commands = {
  list: sitemapList,
  fetch: sitemapFetch,
  delete: sitemapDelete,
  sync: sitemapSync,
}

export const command = new Command()
  .name('sitemap')
  .description('Sitemap integration tools for ChatBotKit')

for (const cmd of Object.values(commands)) {
  command.addCommand(cmd)
}

export default command
