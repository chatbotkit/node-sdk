const { ChatBotKitClient } = require('./client.js')
const { ConversationClient } = require('./conversation/index.js')

class ChatBotKit extends ChatBotKitClient {
  /**
   * @param {import('./client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)

    this.conversation = new ConversationClient(options)
  }
}

module.exports = {
  ChatBotKit,
  ConversationClient,
}
