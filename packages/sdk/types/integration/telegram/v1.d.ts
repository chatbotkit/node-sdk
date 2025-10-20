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
 *   botToken?: string,
 *   contactCollection?: boolean,
 *   sessionDuration?: number,
 *   attachments?: boolean,
 *   meta?: Record<string,any>,
 *   botId?: string,
 *   blueprintId?: string
 * }} TelegramIntegrationOptions
 *
 * @typedef {TelegramIntegrationOptions & {
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number,
 * }} TelegramIntegrationInstance
 */
/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} TelegramIntegrationListRequest
 *
 * @typedef {{items: TelegramIntegrationInstance[]}} TelegramIntegrationListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: TelegramIntegrationInstance
 * }} TelegramIntegrationListStreamItem
 *
 * @typedef {TelegramIntegrationListStreamItem} TelegramIntegrationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {TelegramIntegrationListRequest} [request]
 * @returns {ResponsePromise<TelegramIntegrationListResponse,TelegramIntegrationListStreamType>}
 */
export function listTelegramIntegrations(client: ChatBotKitClient, request?: TelegramIntegrationListRequest): ResponsePromise<TelegramIntegrationListResponse, TelegramIntegrationListStreamType>;
/**
 * @typedef {TelegramIntegrationInstance & {
 * }} TelegramIntegrationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} telegramId
 * @returns {ResponsePromise<TelegramIntegrationFetchResponse,never>}
 */
export function fetchTelegramIntegration(client: ChatBotKitClient, telegramId: string): ResponsePromise<TelegramIntegrationFetchResponse, never>;
/**
 * @typedef {TelegramIntegrationOptions & {
 *   model?: import('../../model/v1.js').Model
 * }} TelegramIntegrationCreateRequest
 *
 * @typedef {{
 *   id: string
 * }} TelegramIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {TelegramIntegrationCreateRequest} request
 * @returns {Promise<TelegramIntegrationCreateResponse>}
 */
export function createTelegramIntegration(client: ChatBotKitClient, request: TelegramIntegrationCreateRequest): Promise<TelegramIntegrationCreateResponse>;
/**
 * @typedef {TelegramIntegrationOptions & {
 *   model?: import('../../model/v1.js').Model
 * }} TelegramIntegrationUpdateRequest
 *
 * @typedef {{
 *   id: string
 * }} TelegramIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} telegramId
 * @param {TelegramIntegrationUpdateRequest} request
 * @returns {Promise<TelegramIntegrationUpdateResponse>}
 */
export function updateTelegramIntegration(client: ChatBotKitClient, telegramId: string, request: TelegramIntegrationUpdateRequest): Promise<TelegramIntegrationUpdateResponse>;
/**
 * @typedef {{
 *   id: string
 * }} TelegramIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} telegramId
 * @returns {Promise<TelegramIntegrationDeleteResponse>}
 */
export function deleteTelegramIntegration(client: ChatBotKitClient, telegramId: string): Promise<TelegramIntegrationDeleteResponse>;
/**
 * @typedef {{
 *   id: string
 * }} TelegramIntegrationSetupResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} telegramId
 * @returns {Promise<TelegramIntegrationSetupResponse>}
 */
export function setupTelegramIntegration(client: ChatBotKitClient, telegramId: string): Promise<TelegramIntegrationSetupResponse>;
export type ChatBotKitClient = import("../../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
export type TelegramIntegrationOptions = {
    name?: string;
    description?: string;
    botToken?: string;
    contactCollection?: boolean;
    sessionDuration?: number;
    attachments?: boolean;
    meta?: Record<string, any>;
    botId?: string;
    blueprintId?: string;
};
export type TelegramIntegrationInstance = TelegramIntegrationOptions & {
    id: string;
    createdAt: number;
    updatedAt: number;
};
export type TelegramIntegrationListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type TelegramIntegrationListResponse = {
    items: TelegramIntegrationInstance[];
};
export type TelegramIntegrationListStreamItem = {
    type: "item";
    data: TelegramIntegrationInstance;
};
export type TelegramIntegrationListStreamType = TelegramIntegrationListStreamItem;
export type TelegramIntegrationFetchResponse = TelegramIntegrationInstance & {};
export type TelegramIntegrationCreateRequest = TelegramIntegrationOptions & {
    model?: import("../../model/v1.js").Model;
};
export type TelegramIntegrationCreateResponse = {
    id: string;
};
export type TelegramIntegrationUpdateRequest = TelegramIntegrationOptions & {
    model?: import("../../model/v1.js").Model;
};
export type TelegramIntegrationUpdateResponse = {
    id: string;
};
export type TelegramIntegrationDeleteResponse = {
    id: string;
};
export type TelegramIntegrationSetupResponse = {
    id: string;
};
