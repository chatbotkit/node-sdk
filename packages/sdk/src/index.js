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

/**
 * @document docs/init.md
 *
 * # Initializing the ChatBotKit Client
 *
 * The ChatBotKit SDK provides a simple way to interact with the ChatBotKit API.
 * To get started, you need to initialize the client with your API credentials.
 *
 * ## Basic Initialization
 *
 * The simplest way to initialize the client is by providing your secret key:
 *
 * ```javascript
 * import ChatBotKit from '@chatbotkit/sdk'
 *
 * const client = new ChatBotKit({
 *   secret: 'your-secret-key'
 * })
 * ```
 *
 * ## Configuration Options
 *
 * The client accepts several configuration options:
 *
 * - `secret` (string): Your ChatBotKit API secret key (required)
 * - `endpoint` (string): Custom API endpoint URL (optional)
 * - `runAsUserId` (string): Impersonate a specific user (optional)
 * - `fetch` (function): Custom fetch implementation (optional)
 *
 * ### Example with Custom Endpoint
 *
 * ```javascript
 * const client = new ChatBotKit({
 *   secret: 'your-secret-key',
 *   endpoint: 'https://custom.api.chatbotkit.com'
 * })
 * ```
 *
 * ### Example with Run As User
 *
 * ```javascript
 * const client = new ChatBotKit({
 *   secret: 'your-secret-key',
 *   runAsUserId: 'user-id-to-impersonate'
 * })
 * ```
 *
 * ## Using Environment Variables
 *
 * It's recommended to store your secret key in environment variables:
 *
 * ```javascript
 * const client = new ChatBotKit({
 *   secret: process.env.CHATBOTKIT_API_SECRET
 * })
 * ```
 *
 * ## Accessing Resources
 *
 * Once initialized, you can access various resources through the client:
 *
 * ```javascript
 * // Work with bots
 * const bots = await client.bot.list()
 *
 * // Work with conversations
 * const conversation = await client.conversation.create({
 *   botId: 'bot-id'
 * })
 *
 * // Work with datasets
 * const datasets = await client.dataset.list()
 *
 * // And many more...
 * ```
 *
 * ## Available Resources
 *
 * The client provides access to the following resources:
 *
 * - `platform` - Platform management
 * - `blueprint` - Blueprint operations
 * - `bot` - Bot management
 * - `channel` - Channel operations
 * - `file` - File management
 * - `secret` - Secret management
 * - `magic` - Magic link operations
 * - `partner` - Partner management
 * - `dataset` - Dataset operations
 * - `skillset` - Skillset management
 * - `integration` - Integration operations
 * - `team` - Team management
 * - `contact` - Contact operations
 * - `space` - Space management
 * - `task` - Task operations
 * - `conversation` - Conversation management
 * - `memory` - Memory operations
 * - `policy` - Policy management
 * - `portal` - Portal operations
 * - `report` - Report operations
 * - `usage` - Usage statistics
 * - `graphql` - GraphQL queries
 */
