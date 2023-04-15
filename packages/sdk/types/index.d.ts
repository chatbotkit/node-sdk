export class ChatBotKit extends ChatBotKitClient {
    conversation: ConversationClient;
}
import { ConversationClient } from "./conversation/index.js";
import { ChatBotKitClient } from "./client.js";
export { ConversationClient };
