import { BlueprintClient } from './blueprint/index.js'
import { BotClient } from './bot/index.js'
import { ChannelClient } from './channel/index.js'
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
import { PortalClient } from './portal/index.js'
import { ReportClient } from './report/index.js'
import { SecretClient } from './secret/index.js'
import { SkillsetClient } from './skillset/index.js'
import { SpaceClient } from './space/index.js'
import { TaskClient } from './task/index.js'
import { TeamClient } from './team/index.js'
import { UsageClient } from './usage/index.js'

export { BlueprintClient }
export { BotClient }
export { ChannelClient }
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
export { PortalClient }
export { ReportClient }
export { GraphqlClient }
export { SpaceClient }
export { UsageClient }

/**
 * ChatBotKit SDK - Main client class for interacting with the ChatBotKit API
 *
 * This is the primary entry point for the ChatBotKit SDK. It provides access to all
 * ChatBotKit API resources through specialized client instances.
 *
 * @example
 * import ChatBotKit from '@chatbotkit/sdk'
 *
 * const client = new ChatBotKit({
 *   secret: 'your-secret-key'
 * })
 */
export class ChatBotKit extends ChatBotKitClient {
  /**
   * @param {import('./client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)

    this.platform = new PlatformClient(options)
    this.blueprint = new BlueprintClient(options)
    this.bot = new BotClient(options)
    this.channel = new ChannelClient(options)
    this.file = new FileClient(options)
    this.secret = new SecretClient(options)
    this.magic = new MagicClient(options)
    this.partner = new PartnerClient(options)
    this.dataset = new DatasetClient(options)
    this.skillset = new SkillsetClient(options)
    this.integration = new IntegrationClient(options)
    this.team = new TeamClient(options)
    this.contact = new ContactClient(options)
    this.space = new SpaceClient(options)
    this.task = new TaskClient(options)
    this.conversation = new ConversationClient(options)
    this.memory = new MemoryClient(options)
    this.policy = new PolicyClient(options)
    this.portal = new PortalClient(options)
    this.report = new ReportClient(options)
    this.usage = new UsageClient(options)

    this.graphql = new GraphqlClient(options)
  }
}

export default ChatBotKit
