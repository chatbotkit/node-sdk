import { BlueprintClient } from './blueprint/index.js'
import { BotClient } from './bot/index.js'
import { ChatBotKitClient } from './client.js'
import { ContactClient } from './contact/index.js'
import { ConversationClient } from './conversation/index.js'
import { DatasetClient } from './dataset/index.js'
import { FileClient } from './file/index.js'
import { GraphqlClient } from './graphql/index.js'
import { IntegrationClient } from './integration/index.js'
import { MagicClient } from './magic/index.js'
import { MemoryClient } from './memory/index.js'
import { PartnerClient } from './partner/index.js'
import { PlatformClient } from './platform/index.js'
import { PolicyClient } from './policy/index.js'
import { SecretClient } from './secret/index.js'
import { SkillsetClient } from './skillset/index.js'
import { TaskClient } from './task/index.js'
import { TeamClient } from './team/index.js'
import { UsageClient } from './usage/index.js'

export { BlueprintClient }
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
export { TeamClient }
export { MemoryClient }
export { PolicyClient }
export { GraphqlClient }
export { UsageClient }

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
    this.team = new TeamClient(options)
    this.contact = new ContactClient(options)
    this.task = new TaskClient(options)
    this.conversation = new ConversationClient(options)
    this.memory = new MemoryClient(options)
    this.policy = new PolicyClient(options)
    this.usage = new UsageClient(options)

    // @note overlapping name with the `secret` property
    this.secrets = new SecretClient(options)

    this.graphql = new GraphqlClient(options)
  }
}

export default ChatBotKit
