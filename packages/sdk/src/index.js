import { ChatBotKitClient } from './client.js'

import { BotClient } from './bot/index.js'
import { FileClient } from './file/index.js'
import { PartnerClient } from './partner/index.js'
import { DatasetClient } from './dataset/index.js'
import { SkillsetClient } from './skillset/index.js'
import { IntegrationClient } from './integration/index.js'
import { ConversationClient } from './conversation/index.js'

export { BotClient }
export { FileClient }
export { PartnerClient }
export { DatasetClient }
export { SkillsetClient }
export { IntegrationClient }
export { ConversationClient }

export class ChatBotKit extends ChatBotKitClient {
  /**
   * @param {import('./client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)

    this.bot = new BotClient(options)
    this.file = new FileClient(options)
    this.partner = new PartnerClient(options)
    this.dataset = new DatasetClient(options)
    this.skillset = new SkillsetClient(options)
    this.integration = new IntegrationClient(options)
    this.conversation = new ConversationClient(options)
  }
}

export default ChatBotKit
