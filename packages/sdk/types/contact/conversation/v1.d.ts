/**
 * @typedef {import('../../client.js').ChatBotKitClient} ChatBotKitClient
 */
/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */
/**
 * @typedef {{
 *   name?: string,
 *   description?: string,
 *   contactId?: string,
 *   taskId?: string,
 *   botId?: string,
 *   backstory?: string,
 *   model?: string,
 *   datasetId?: string,
 *   skillsetId?: string,
 *   meta?: Record<string,any>
 * }} ConversationOptions
 *
 * @typedef {ConversationOptions & {
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number
 * }} ConversationInstance
 */
/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} ConversationListRequest
 *
 * @typedef {{items: ConversationInstance[]}} ConversationListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: ConversationInstance
 * }} ConversationListStreamItemType
 *
 * @typedef {ConversationListStreamItemType} ConversationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} contactId
 * @param {ConversationListRequest} [request]
 * @returns {ResponsePromise<ConversationListResponse,ConversationListStreamType>}
 */
export function listConversations(client: ChatBotKitClient, contactId: string, request?: ConversationListRequest | undefined): ResponsePromise<ConversationListResponse, ConversationListStreamType>;
export type ChatBotKitClient = import('../../client.js').ChatBotKitClient;
export type ResponsePromise<T, U> = import('../../client.js').ResponsePromise<T, U>;
export type ConversationOptions = {
    name?: string;
    description?: string;
    contactId?: string;
    taskId?: string;
    botId?: string;
    backstory?: string;
    model?: string;
    datasetId?: string;
    skillsetId?: string;
    meta?: Record<string, any>;
};
export type ConversationInstance = ConversationOptions & {
    id: string;
    createdAt: number;
    updatedAt: number;
};
export type ConversationListRequest = {
    cursor?: string;
    order?: 'desc' | 'asc';
    take?: number;
    meta?: Record<string, string>;
};
export type ConversationListResponse = {
    items: ConversationInstance[];
};
export type ConversationListStreamItemType = {
    type: 'item';
    data: ConversationInstance;
};
export type ConversationListStreamType = ConversationListStreamItemType;
