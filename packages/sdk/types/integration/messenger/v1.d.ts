/**
 * @typedef {import('../../client.js').ChatBotKitClient} ChatBotKitClient
 */
/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */
/**
 * @typedef {import('../../types/bot.js').BotRefOrConfig & {
 *   name?: string,
 *   description?: string,
 *   accessToken?: string,
 *   sessionDuration?: number,
 *   meta?: Record<string,any>
 * }} MessengerIntegrationOptions
 *
 * @typedef {MessengerIntegrationOptions & {
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number,
 *   verifyToken: string
 * }} MessengerIntegrationInstance
 */
/**
 * @typedef {{cursor?: string, order?: 'desc'|'asc', take?: number, meta?: Record<string,string>}} MessengerIntegrationListRequest
 *
 * @typedef {{items: MessengerIntegrationInstance[]}} MessengerIntegrationListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: MessengerIntegrationInstance
 * }} MessengerIntegrationListStreamItem
 *
 * @typedef {MessengerIntegrationListStreamItem} MessengerIntegrationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {MessengerIntegrationListRequest} [request]
 * @returns {ResponsePromise<MessengerIntegrationListResponse,MessengerIntegrationListStreamType>}
 */
export function listMessengerIntegrations(client: ChatBotKitClient, request?: MessengerIntegrationListRequest | undefined): ResponsePromise<MessengerIntegrationListResponse, MessengerIntegrationListStreamType>;
/**
 * @typedef {MessengerIntegrationInstance & {
 * }} MessengerIntegrationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} messengerId
 * @returns {Promise<MessengerIntegrationFetchResponse>}
 */
export function fetchMessengerIntegration(client: ChatBotKitClient, messengerId: string): Promise<MessengerIntegrationFetchResponse>;
/**
 * @typedef {MessengerIntegrationOptions & {
 *   model?: import('../../model/v1.js').Model
 * }} MessengerIntegrationCreateRequest
 *
 * @typedef {{
 *   id: string
 * }} MessengerIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {MessengerIntegrationCreateRequest} request
 * @returns {Promise<MessengerIntegrationCreateResponse>}
 */
export function createMessengerIntegration(client: ChatBotKitClient, request: MessengerIntegrationCreateRequest): Promise<MessengerIntegrationCreateResponse>;
/**
 * @typedef {MessengerIntegrationOptions & {
 *   model?: import('../../model/v1.js').Model
 * }} MessengerIntegrationUpdateRequest
 *
 * @typedef {{
 *   id: string
 * }} MessengerIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} messengerId
 * @param {MessengerIntegrationUpdateRequest} request
 * @returns {Promise<MessengerIntegrationUpdateResponse>}
 */
export function updateMessengerIntegration(client: ChatBotKitClient, messengerId: string, request: MessengerIntegrationUpdateRequest): Promise<MessengerIntegrationUpdateResponse>;
/**
 * @typedef {{
 *   id: string
 * }} MessengerIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} messengerId
 * @returns {Promise<MessengerIntegrationDeleteResponse>}
 */
export function deleteMessengerIntegration(client: ChatBotKitClient, messengerId: string): Promise<MessengerIntegrationDeleteResponse>;
/**
 * @typedef {{
 *   id: string
 * }} MessengerIntegrationSetupResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} messengerId
 * @returns {Promise<MessengerIntegrationSetupResponse>}
 */
export function setupMessengerIntegration(client: ChatBotKitClient, messengerId: string): Promise<MessengerIntegrationSetupResponse>;
export type ChatBotKitClient = import('../../client.js').ChatBotKitClient;
export type ResponsePromise<T, U> = import('../../client.js').ResponsePromise<T, U>;
export type MessengerIntegrationOptions = import('../../types/bot.js').BotRefOrConfig & {
    name?: string;
    description?: string;
    accessToken?: string;
    sessionDuration?: number;
    meta?: Record<string, any>;
};
export type MessengerIntegrationInstance = MessengerIntegrationOptions & {
    id: string;
    createdAt: number;
    updatedAt: number;
    verifyToken: string;
};
export type MessengerIntegrationListRequest = {
    cursor?: string;
    order?: 'desc' | 'asc';
    take?: number;
    meta?: Record<string, string>;
};
export type MessengerIntegrationListResponse = {
    items: MessengerIntegrationInstance[];
};
export type MessengerIntegrationListStreamItem = {
    type: 'item';
    data: MessengerIntegrationInstance;
};
export type MessengerIntegrationListStreamType = MessengerIntegrationListStreamItem;
export type MessengerIntegrationFetchResponse = MessengerIntegrationInstance & {};
export type MessengerIntegrationCreateRequest = MessengerIntegrationOptions & {
    model?: import('../../model/v1.js').Model;
};
export type MessengerIntegrationCreateResponse = {
    id: string;
};
export type MessengerIntegrationUpdateRequest = MessengerIntegrationOptions & {
    model?: import('../../model/v1.js').Model;
};
export type MessengerIntegrationUpdateResponse = {
    id: string;
};
export type MessengerIntegrationDeleteResponse = {
    id: string;
};
export type MessengerIntegrationSetupResponse = {
    id: string;
};
