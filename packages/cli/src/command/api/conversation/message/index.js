import { getRUNAS_USERID, getSECRET } from '../../../../env.js'
import { print } from '../../../../output.js'

import { ConversationMessageClient } from '@chatbotkit/sdk/conversation/message/index.js'

import { Command } from 'commander'

function getClient() {
  return new ConversationMessageClient({
    secret: getSECRET(),
    runAsUserId: getRUNAS_USERID(),
  })
}

export const messageList = new Command()
  .name('list')
  .description('List messages')
  .option('-s, --stream', 'Stream messages')
  .argument('<conversationId>', 'Conversation ID')
  .action(async (conversationId, options) => {
    const { stream } = options

    const client = getClient()

    if (stream) {
      for await (const message of client.list(conversationId).stream()) {
        print(message)
      }
    } else {
      const { items } = await client.list(conversationId)

      for (const message of items) {
        print(message)
      }
    }
  })

export const messageFetch = new Command()
  .name('fetch')
  .description('Fetch message')
  .argument('<conversationId>', 'Conversation ID')
  .argument('<messageId>', 'Message ID')
  .action(async (conversationId, messageId) => {
    const client = getClient()

    const message = await client.fetch(conversationId, messageId)

    print(message)
  })

export const messageDelete = new Command()
  .name('delete')
  .description('Delete message')
  .argument('<conversationId>', 'Conversation ID')
  .argument('<messageId>', 'Message ID')
  .action(async (conversationId, messageId) => {
    const client = getClient()

    await client.delete(conversationId, messageId)
  })

/**
 * Commands registry - MUST include ALL Message SDK clients and methods
 *
 * @todo enable types once we have more SDK clients implemented
 *
 * _satisfies {Partial<Record<keyof ConversationMessageClient, import('commander').Command>>}
 * _type {Record<keyof ConversationMessageClient, import('commander').Command>}
 */
const commands = {
  list: messageList,
  fetch: messageFetch,
  delete: messageDelete,
}

export const command = new Command()
  .name('message')
  .description('Message tools for ChatBotKit')

for (const cmd of Object.values(commands)) {
  command.addCommand(cmd)
}

export default command
