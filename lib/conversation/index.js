const { ChatBotKitClient } = require('../client.js')
const {
  conversationComplete,
  conversationList,
  conversationCreate,
  conversationDelete,
} = require('./lib.js')

class ConversationClient extends ChatBotKitClient {
  /**
   * @param {import('../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * @param {import('./lib.js').ConversationCompleteRequest} request
   */
  complete(request) {
    return conversationComplete(this, request)
  }

  /**
   */
  list() {
    return conversationList(this)
  }

  /**
   * @param {import('./lib.js').ConversationCreateRequest} request
   */
  create(request) {
    return conversationCreate(this, request)
  }

  /**
   * @param {string} conversationId
   */
  delete(conversationId) {
    return conversationDelete(this, conversationId)
  }
}

module.exports = {
  ConversationClient,
}
