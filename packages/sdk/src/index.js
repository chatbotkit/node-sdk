import { ChatBotKitClient } from './client.js'

import { BotClient } from './bot/index.js'
import { FileClient } from './file/index.js'
import { DatasetClient } from './dataset/index.js'
import { SkillsetClient } from './skillset/index.js'
import { IntegrationClient } from './integration/index.js'
import { ConversationClient } from './conversation/index.js'

export { BotClient } from './bot/index.js'
export { FileClient } from './file/index.js'
export { DatasetClient } from './dataset/index.js'
export { SkillsetClient } from './skillset/index.js'
export { ConversationClient } from './conversation/index.js'

export class ChatBotKit extends ChatBotKitClient {
  /**
   * @param {import('./client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)

    this.bot = new BotClient(options)
    this.file = new FileClient(options)
    this.dataset = new DatasetClient(options)
    this.skillset = new SkillsetClient(options)
    this.integration = new IntegrationClient(options)
    this.conversation = new ConversationClient(options)
  }
}

export default ChatBotKit
