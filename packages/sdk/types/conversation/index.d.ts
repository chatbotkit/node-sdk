export class ConversationClient extends ChatBotKitClient {
    /**
     * @param {import('./lib.js').ConversationCompleteRequest} request
     */
    complete(request: import('./lib.js').ConversationCompleteRequest): Promise<import("./lib.js").ConversationCompleteResponse>;
    /**
     */
    list(): Promise<import("./lib.js").ConversationListResponse>;
    /**
     * @param {import('./lib.js').ConversationCreateRequest} request
     */
    create(request: import('./lib.js').ConversationCreateRequest): Promise<import("./lib.js").ConversationCreateResponse>;
    /**
     * @param {string} conversationId
     */
    delete(conversationId: string): Promise<import("./lib.js").ConversationDeleteResponse>;
}
import { ChatBotKitClient } from "../client.js";
