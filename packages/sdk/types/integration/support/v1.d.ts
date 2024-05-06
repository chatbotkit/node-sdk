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
 *   botId?: string,
 *   email?: string,
 *   syncSchedule?: string,
 *   expiresIn?: number
 *   meta?: Record<string,any>
 * }} SupportIntegrationOptions
 *
 * @typedef {SupportIntegrationOptions & {
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number
 * }} SupportInegrationInstance
 */
/**
 * @typedef {{cursor?: string, order?: 'desc'|'asc', take?: number, meta?: Record<string,string>}} SupportIntegrationListRequest
 *
 * @typedef {{items: SupportInegrationInstance[]}} SupportIntegrationListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: SupportInegrationInstance
 * }} SupportIntegrationListStreamItem
 *
 * @typedef {SupportIntegrationListStreamItem} SupportIntegrationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {SupportIntegrationListRequest} [request]
 * @returns {ResponsePromise<SupportIntegrationListResponse,SupportIntegrationListStreamType>}
 */
export function listSupportIntegrations(client: ChatBotKitClient, request?: SupportIntegrationListRequest | undefined): ResponsePromise<SupportIntegrationListResponse, SupportIntegrationListStreamType>;
/**
 * @typedef {SupportInegrationInstance & {
 * }} SupportIntegrationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} supportId
 * @returns {Promise<SupportIntegrationFetchResponse>}
 */
export function fetchSupportIntegration(client: ChatBotKitClient, supportId: string): Promise<SupportIntegrationFetchResponse>;
/**
 * @typedef {SupportIntegrationOptions & {botId: string}} SupportIntegrationCreateRequest
 *
 * @typedef {{
 *   id: string
 * }} SupportIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {SupportIntegrationCreateRequest} request
 * @returns {Promise<SupportIntegrationCreateResponse>}
 */
export function createSupportIntegration(client: ChatBotKitClient, request: SupportIntegrationCreateRequest): Promise<SupportIntegrationCreateResponse>;
/**
 * @typedef {SupportIntegrationOptions & {
 * }} SupportIntegrationUpdateRequest
 *
 * @typedef {{
 *   id: string
 * }} SupportIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} supportId
 * @param {SupportIntegrationUpdateRequest} request
 * @returns {Promise<SupportIntegrationUpdateResponse>}
 */
export function updateSupportIntegration(client: ChatBotKitClient, supportId: string, request: SupportIntegrationUpdateRequest): Promise<SupportIntegrationUpdateResponse>;
/**
 * @typedef {{
 *   id: string
 * }} SupportIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} supportId
 * @returns {Promise<SupportIntegrationDeleteResponse>}
 */
export function deleteSupportIntegration(client: ChatBotKitClient, supportId: string): Promise<SupportIntegrationDeleteResponse>;
export type ChatBotKitClient = import('../../client.js').ChatBotKitClient;
export type ResponsePromise<T, U> = import('../../client.js').ResponsePromise<T, U>;
export type SupportIntegrationOptions = {
    name?: string;
    description?: string;
    botId?: string;
    email?: string;
    syncSchedule?: string;
    expiresIn?: number;
    meta?: Record<string, any>;
};
export type SupportInegrationInstance = SupportIntegrationOptions & {
    id: string;
    createdAt: number;
    updatedAt: number;
};
export type SupportIntegrationListRequest = {
    cursor?: string;
    order?: 'desc' | 'asc';
    take?: number;
    meta?: Record<string, string>;
};
export type SupportIntegrationListResponse = {
    items: SupportInegrationInstance[];
};
export type SupportIntegrationListStreamItem = {
    type: 'item';
    data: SupportInegrationInstance;
};
export type SupportIntegrationListStreamType = SupportIntegrationListStreamItem;
export type SupportIntegrationFetchResponse = SupportInegrationInstance & {};
export type SupportIntegrationCreateRequest = SupportIntegrationOptions & {
    botId: string;
};
export type SupportIntegrationCreateResponse = {
    id: string;
};
export type SupportIntegrationUpdateRequest = SupportIntegrationOptions & {};
export type SupportIntegrationUpdateResponse = {
    id: string;
};
export type SupportIntegrationDeleteResponse = {
    id: string;
};
