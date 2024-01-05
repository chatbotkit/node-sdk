import { Command } from 'commander'
import { ConversationClient } from '@chatbotkit/sdk/conversation/index.js'

import message from './message/index.js'
import { print } from '../../../output.js'
import { getSECRET } from '../../../env.js'

const client = new ConversationClient({
  secret: getSECRET(),
})

export const conversationList = new Command()
  .name('list')
  .description('List conversations')
  .option('-s, --stream', 'Stream conversations')
  .action(async (str, options) => {
    const { stream } = options

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
  })

export const conversationFetch = new Command()
  .name('fetch')
  .description('Fetch conversation')
  .argument('<id>', 'Conversation ID')
  .action(async (id) => {
    const conversation = await client.fetch(id)

    print(conversation)
  })

export const conversationDelete = new Command()
  .name('delete')
  .description('Delete conversation')
  .argument('<id>', 'Conversation ID')
  .action(async (id) => {
    await client.delete(id)
  })

export const command = new Command()
  .name('conversation')
  .description('Conversation tools for ChatBotKit')
  .addCommand(conversationList)
  .addCommand(conversationFetch)
  .addCommand(conversationDelete)
  .addCommand(message)

export default command
