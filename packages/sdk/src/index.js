import { BlueprintClient } from './blueprint/index.js'
import { BotClient } from './bot/index.js'
import { ChatBotKitClient } from './client.js'
import { ContactClient } from './contact/index.js'
import { ConversationClient } from './conversation/index.js'
import { DatasetClient } from './dataset/index.js'
import { FileClient } from './file/index.js'
import { IntegrationClient } from './integration/index.js'
import { MagicClient } from './magic/index.js'
import { PartnerClient } from './partner/index.js'
import { PlatformClient } from './platform/index.js'
import { SecretClient } from './secret/index.js'
import { SkillsetClient } from './skillset/index.js'

export { BotClient }
export { FileClient }
export { MagicClient }
export { PartnerClient }
export { DatasetClient }
export { SkillsetClient }
export { IntegrationClient }
export { ConversationClient }
export { ContactClient }
export { SecretClient }
export { BlueprintClient }

export class ChatBotKit extends ChatBotKitClient {
  /**
   * @param {import('./client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)

    this.platform = new PlatformClient(options)
    this.blueprint = new BlueprintClient(options)
    this.bot = new BotClient(options)
    this.file = new FileClient(options)
    this.magic = new MagicClient(options)
    this.partner = new PartnerClient(options)
    this.dataset = new DatasetClient(options)
    this.skillset = new SkillsetClient(options)
    this.integration = new IntegrationClient(options)
    this.conversation = new ConversationClient(options)
    this.contact = new ContactClient(options)

    // @note overlapping name with the `secret` property
    this.secrets = new SecretClient(options)
  }
}

export default ChatBotKit
