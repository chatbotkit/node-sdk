import { ChatBotKitClient } from './client.js'
import { ConversationClient } from './conversation/index.js'

export { ConversationClient } from './conversation/index.js'

export class ChatBotKit extends ChatBotKitClient {
  /**
   * @param {import('./client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)

    this.conversation = new ConversationClient(options)
  }
}
