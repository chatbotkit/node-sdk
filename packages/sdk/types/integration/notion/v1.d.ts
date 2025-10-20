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
 *   datasetId?: string,
 *   token?: string,
 *   syncSchedule?: string,
 *   expiresIn?: number
 *   meta?: Record<string,any>,
 *   blueprintId?: string
 * }} NotionIntegrationOptions
 *
 * @typedef {NotionIntegrationOptions & {
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number
 * }} NotionInegrationInstance
 */
/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} NotionIntegrationListRequest
 *
 * @typedef {{items: NotionInegrationInstance[]}} NotionIntegrationListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: NotionInegrationInstance
 * }} NotionIntegrationListStreamItem
 *
 * @typedef {NotionIntegrationListStreamItem} NotionIntegrationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {NotionIntegrationListRequest} [request]
 * @returns {ResponsePromise<NotionIntegrationListResponse,NotionIntegrationListStreamType>}
 */
export function listNotionIntegrations(client: ChatBotKitClient, request?: NotionIntegrationListRequest): ResponsePromise<NotionIntegrationListResponse, NotionIntegrationListStreamType>;
/**
 * @typedef {NotionInegrationInstance & {
 * }} NotionIntegrationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} notionId
 * @returns {ResponsePromise<NotionIntegrationFetchResponse,never>}
 */
export function fetchNotionIntegration(client: ChatBotKitClient, notionId: string): ResponsePromise<NotionIntegrationFetchResponse, never>;
/**
 * @typedef {NotionIntegrationOptions & {datasetId: string}} NotionIntegrationCreateRequest
 *
 * @typedef {{
 *   id: string
 * }} NotionIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {NotionIntegrationCreateRequest} request
 * @returns {Promise<NotionIntegrationCreateResponse>}
 */
export function createNotionIntegration(client: ChatBotKitClient, request: NotionIntegrationCreateRequest): Promise<NotionIntegrationCreateResponse>;
/**
 * @typedef {NotionIntegrationOptions & {
 * }} NotionIntegrationUpdateRequest
 *
 * @typedef {{
 *   id: string
 * }} NotionIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} notionId
 * @param {NotionIntegrationUpdateRequest} request
 * @returns {Promise<NotionIntegrationUpdateResponse>}
 */
export function updateNotionIntegration(client: ChatBotKitClient, notionId: string, request: NotionIntegrationUpdateRequest): Promise<NotionIntegrationUpdateResponse>;
/**
 * @typedef {{
 *   id: string
 * }} NotionIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} notionId
 * @returns {Promise<NotionIntegrationDeleteResponse>}
 */
export function deleteNotionIntegration(client: ChatBotKitClient, notionId: string): Promise<NotionIntegrationDeleteResponse>;
/**
 * @typedef {{
 *   id: string
 * }} NotionIntegrationSyncResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} notionId
 * @returns {Promise<NotionIntegrationSyncResponse>}
 */
export function syncNotionIntegration(client: ChatBotKitClient, notionId: string): Promise<NotionIntegrationSyncResponse>;
export type ChatBotKitClient = import("../../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
export type NotionIntegrationOptions = {
    name?: string;
    description?: string;
    datasetId?: string;
    token?: string;
    syncSchedule?: string;
    expiresIn?: number;
    meta?: Record<string, any>;
    blueprintId?: string;
};
export type NotionInegrationInstance = NotionIntegrationOptions & {
    id: string;
    createdAt: number;
    updatedAt: number;
};
export type NotionIntegrationListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type NotionIntegrationListResponse = {
    items: NotionInegrationInstance[];
};
export type NotionIntegrationListStreamItem = {
    type: "item";
    data: NotionInegrationInstance;
};
export type NotionIntegrationListStreamType = NotionIntegrationListStreamItem;
export type NotionIntegrationFetchResponse = NotionInegrationInstance & {};
export type NotionIntegrationCreateRequest = NotionIntegrationOptions & {
    datasetId: string;
};
export type NotionIntegrationCreateResponse = {
    id: string;
};
export type NotionIntegrationUpdateRequest = NotionIntegrationOptions & {};
export type NotionIntegrationUpdateResponse = {
    id: string;
};
export type NotionIntegrationDeleteResponse = {
    id: string;
};
export type NotionIntegrationSyncResponse = {
    id: string;
};
