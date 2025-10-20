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
 *   url?: string,
 *   glob?: string,
 *   selectors?: string,
 *   javascript?: boolean,
 *   syncSchedule?: string,
 *   expiresIn?: number
 *   meta?: Record<string,any>,
 *   blueprintId?: string
 * }} SitemapIntegrationOptions
 *
 * @typedef {SitemapIntegrationOptions & {
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number
 * }} SitemapInegrationInstance
 */
/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} SitemapIntegrationListRequest
 *
 * @typedef {{items: SitemapInegrationInstance[]}} SitemapIntegrationListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: SitemapInegrationInstance
 * }} SitemapIntegrationListStreamItem
 *
 * @typedef {SitemapIntegrationListStreamItem} SitemapIntegrationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {SitemapIntegrationListRequest} [request]
 * @returns {ResponsePromise<SitemapIntegrationListResponse,SitemapIntegrationListStreamType>}
 */
export function listSitemapIntegrations(client: ChatBotKitClient, request?: SitemapIntegrationListRequest): ResponsePromise<SitemapIntegrationListResponse, SitemapIntegrationListStreamType>;
/**
 * @typedef {SitemapInegrationInstance & {
 * }} SitemapIntegrationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} sitemapId
 * @returns {ResponsePromise<SitemapIntegrationFetchResponse,never>}
 */
export function fetchSitemapIntegration(client: ChatBotKitClient, sitemapId: string): ResponsePromise<SitemapIntegrationFetchResponse, never>;
/**
 * @typedef {SitemapIntegrationOptions & {datasetId: string}} SitemapIntegrationCreateRequest
 *
 * @typedef {{
 *   id: string
 * }} SitemapIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {SitemapIntegrationCreateRequest} request
 * @returns {Promise<SitemapIntegrationCreateResponse>}
 */
export function createSitemapIntegration(client: ChatBotKitClient, request: SitemapIntegrationCreateRequest): Promise<SitemapIntegrationCreateResponse>;
/**
 * @typedef {SitemapIntegrationOptions & {
 * }} SitemapIntegrationUpdateRequest
 *
 * @typedef {{
 *   id: string
 * }} SitemapIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} sitemapId
 * @param {SitemapIntegrationUpdateRequest} request
 * @returns {Promise<SitemapIntegrationUpdateResponse>}
 */
export function updateSitemapIntegration(client: ChatBotKitClient, sitemapId: string, request: SitemapIntegrationUpdateRequest): Promise<SitemapIntegrationUpdateResponse>;
/**
 * @typedef {{
 *   id: string
 * }} SitemapIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} sitemapId
 * @returns {Promise<SitemapIntegrationDeleteResponse>}
 */
export function deleteSitemapIntegration(client: ChatBotKitClient, sitemapId: string): Promise<SitemapIntegrationDeleteResponse>;
/**
 * @typedef {{
 *   id: string
 * }} SitemapIntegrationSyncResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} sitemapId
 * @returns {Promise<SitemapIntegrationSyncResponse>}
 */
export function syncSitemapIntegration(client: ChatBotKitClient, sitemapId: string): Promise<SitemapIntegrationSyncResponse>;
export type ChatBotKitClient = import("../../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
export type SitemapIntegrationOptions = {
    name?: string;
    description?: string;
    datasetId?: string;
    url?: string;
    glob?: string;
    selectors?: string;
    javascript?: boolean;
    syncSchedule?: string;
    expiresIn?: number;
    meta?: Record<string, any>;
    blueprintId?: string;
};
export type SitemapInegrationInstance = SitemapIntegrationOptions & {
    id: string;
    createdAt: number;
    updatedAt: number;
};
export type SitemapIntegrationListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type SitemapIntegrationListResponse = {
    items: SitemapInegrationInstance[];
};
export type SitemapIntegrationListStreamItem = {
    type: "item";
    data: SitemapInegrationInstance;
};
export type SitemapIntegrationListStreamType = SitemapIntegrationListStreamItem;
export type SitemapIntegrationFetchResponse = SitemapInegrationInstance & {};
export type SitemapIntegrationCreateRequest = SitemapIntegrationOptions & {
    datasetId: string;
};
export type SitemapIntegrationCreateResponse = {
    id: string;
};
export type SitemapIntegrationUpdateRequest = SitemapIntegrationOptions & {};
export type SitemapIntegrationUpdateResponse = {
    id: string;
};
export type SitemapIntegrationDeleteResponse = {
    id: string;
};
export type SitemapIntegrationSyncResponse = {
    id: string;
};
