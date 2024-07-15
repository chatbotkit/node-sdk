import { BotClient } from './bot/index.js'
import { ChatBotKitClient } from './client.js'
import { ContactClient } from './contact/index.js'
import { ConversationClient } from './conversation/index.js'
import { DatasetClient } from './dataset/index.js'
import { FileClient } from './file/index.js'
import { IntegrationClient } from './integration/index.js'
import { MagicClient } from './magic/index.js'
import { PartnerClient } from './partner/index.js'
import { SkillsetClient } from './skillset/index.js'

export { BotClient }
export { FileClient }
export { MagicClient }
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
    this.magic = new MagicClient(options)
    this.partner = new PartnerClient(options)
    this.dataset = new DatasetClient(options)
    this.skillset = new SkillsetClient(options)
    this.integration = new IntegrationClient(options)
    this.conversation = new ConversationClient(options)
    this.contact = new ContactClient(options)
  }
}

export default ChatBotKit
