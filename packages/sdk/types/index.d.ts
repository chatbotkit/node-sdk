export class ChatBotKit extends ChatBotKitClient {
    bot: BotClient;
    file: FileClient;
    magic: MagicClient;
    partner: PartnerClient;
    dataset: DatasetClient;
    skillset: SkillsetClient;
    integration: IntegrationClient;
    conversation: ConversationClient;
    contact: ContactClient;
    secrets: SecretClient;
}
export default ChatBotKit;
import { BotClient } from './bot/index.js';
import { FileClient } from './file/index.js';
import { MagicClient } from './magic/index.js';
import { PartnerClient } from './partner/index.js';
import { DatasetClient } from './dataset/index.js';
import { SkillsetClient } from './skillset/index.js';
import { IntegrationClient } from './integration/index.js';
import { ConversationClient } from './conversation/index.js';
import { ContactClient } from './contact/index.js';
import { SecretClient } from './secret/index.js';
import { ChatBotKitClient } from './client.js';
export { BotClient, FileClient, MagicClient, PartnerClient, DatasetClient, SkillsetClient, IntegrationClient, ConversationClient, ContactClient, SecretClient };
