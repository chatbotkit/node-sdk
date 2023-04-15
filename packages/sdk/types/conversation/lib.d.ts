export type Message = {
    type: 'user' | 'bot' | 'context' | 'instruction' | 'backstory';
    text: string;
};
export type ConversationCompleteRequest = {
    model?: string;
    messages: Message[];
};
export type ConversationCompleteResponse = {
    text: string;
};
export type ConversationListResponse = {
    id: string;
};
export type ConversationCreateRequest = {
    backstory?: string;
    model?: string;
    datasetId?: string;
    skillsetId?: string;
    privacy?: boolean;
    moderation?: boolean;
    messages?: Message[];
};
export type ConversationCreateResponse = {
    id: string;
};
export type ConversationDeleteResponse = {
    id: string;
};
/**
 * @typedef {{
 * type: 'user'|'bot'|'context'|'instruction'|'backstory',
 * text: string
 * }} Message
 */
/**
 * @typedef {{
 * model?: string,
 * messages: Message[]
 * }} ConversationCompleteRequest
 *
 * @typedef {{
 * text: string
 * }} ConversationCompleteResponse
 *
 * @param {import('../client.js').ChatBotKitClient} client
 * @param {ConversationCompleteRequest} request
 * @returns {Promise<ConversationCompleteResponse>}
 */
export function conversationComplete(client: import('../client.js').ChatBotKitClient, request: ConversationCompleteRequest): Promise<ConversationCompleteResponse>;
/**
 * @typedef {{
 * id: string
 * }} ConversationListResponse
 *
 * @param {import('../client.js').ChatBotKitClient} client
 * @returns {Promise<ConversationListResponse>}
 */
export function conversationList(client: import('../client.js').ChatBotKitClient): Promise<ConversationListResponse>;
/**
 * @typedef {{
 * backstory?: string,
 * model?: string,
 * datasetId?: string,
 * skillsetId?: string,
 * privacy?: boolean,
 * moderation?: boolean,
 * messages?: Message[]
 * }} ConversationCreateRequest
 *
 * @typedef {{
 * id: string
 * }} ConversationCreateResponse
 *
 * @param {import('../client.js').ChatBotKitClient} client
 * @param {ConversationCreateRequest} request
 * @returns {Promise<ConversationCreateResponse>}
 */
export function conversationCreate(client: import('../client.js').ChatBotKitClient, request: ConversationCreateRequest): Promise<ConversationCreateResponse>;
/**
 * @typedef {{
 * id: string
 * }} ConversationDeleteResponse
 *
 * @param {import('../client.js').ChatBotKitClient} client
 * @param {string} conversationId
 * @returns {Promise<ConversationDeleteResponse>}
 */
export function conversationDelete(client: import('../client.js').ChatBotKitClient, conversationId: string): Promise<ConversationDeleteResponse>;
