import { getRUNAS_USERID, getSECRET } from '../../../env.js'
import { print } from '../../../output.js'
import message from './message/index.js'

import { ConversationClient } from '@chatbotkit/sdk/conversation/index.js'

import { Command } from 'commander'

function getClient() {
  return new ConversationClient({
    secret: getSECRET(),
    runAsUserId: getRUNAS_USERID(),
  })
}

/**
 * Commands registry - MUST include ALL Message SDK clients and methods
 *
 * @todo enable types once we have more SDK clients implemented
 *
 * _satisfies {Partial<Record<keyof ConversationClient, import('commander').Command>>}
 * _type {Record<keyof ConversationClient, import('commander').Command>}
 */
const commands = {
  list: new Command()
    .name('list')
    .description('List conversations')
    .option('-s, --stream', 'Stream conversations')
    .action(async (str, options) => {
      const { stream } = options

      const client = getClient()

      if (stream) {
        for await (const conversation of client.list().stream()) {
          print(conversation)
        }
      } else {
        const { items } = await client.list()

        for (const conversation of items) {
          print(conversation)
        }
      }
    }),

  fetch: new Command()
    .name('fetch')
    .description('Fetch conversation')
    .argument('<conversationId>', 'Conversation ID')
    .action(async (conversationId) => {
      const client = getClient()

      const conversation = await client.fetch(conversationId)

      print(conversation)
    }),

  delete: new Command()
    .name('delete')
    .description('Delete conversation')
    .argument('<conversationId>', 'Conversation ID')
    .action(async (conversationId) => {
      const client = getClient()

      await client.delete(conversationId)
    }),

  message,
}

export const command = new Command()
  .name('conversation')
  .description('Conversation tools for ChatBotKit')

for (const cmd of Object.values(commands)) {
  command.addCommand(cmd)
}

export default command
