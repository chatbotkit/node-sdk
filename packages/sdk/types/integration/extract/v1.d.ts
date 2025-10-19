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
 *   schema?: Record<string,any>,
 *   syncSchedule?: string,
 *   expiresIn?: number
 *   meta?: Record<string,any>
 * }} ExtractIntegrationOptions
 *
 * @typedef {ExtractIntegrationOptions & {
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number
 * }} ExtractInegrationInstance
 */
/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} ExtractIntegrationListRequest
 *
 * @typedef {{items: ExtractInegrationInstance[]}} ExtractIntegrationListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: ExtractInegrationInstance
 * }} ExtractIntegrationListStreamItem
 *
 * @typedef {ExtractIntegrationListStreamItem} ExtractIntegrationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {ExtractIntegrationListRequest} [request]
 * @returns {ResponsePromise<ExtractIntegrationListResponse,ExtractIntegrationListStreamType>}
 */
export function listExtractIntegrations(client: ChatBotKitClient, request?: ExtractIntegrationListRequest): ResponsePromise<ExtractIntegrationListResponse, ExtractIntegrationListStreamType>;
/**
 * @typedef {ExtractInegrationInstance & {
 * }} ExtractIntegrationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} extractId
 * @returns {ResponsePromise<ExtractIntegrationFetchResponse,never>}
 */
export function fetchExtractIntegration(client: ChatBotKitClient, extractId: string): ResponsePromise<ExtractIntegrationFetchResponse, never>;
/**
 * @typedef {ExtractIntegrationOptions & {botId: string}} ExtractIntegrationCreateRequest
 *
 * @typedef {{
 *   id: string
 * }} ExtractIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {ExtractIntegrationCreateRequest} request
 * @returns {Promise<ExtractIntegrationCreateResponse>}
 */
export function createExtractIntegration(client: ChatBotKitClient, request: ExtractIntegrationCreateRequest): Promise<ExtractIntegrationCreateResponse>;
/**
 * @typedef {ExtractIntegrationOptions & {
 * }} ExtractIntegrationUpdateRequest
 *
 * @typedef {{
 *   id: string
 * }} ExtractIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} extractId
 * @param {ExtractIntegrationUpdateRequest} request
 * @returns {Promise<ExtractIntegrationUpdateResponse>}
 */
export function updateExtractIntegration(client: ChatBotKitClient, extractId: string, request: ExtractIntegrationUpdateRequest): Promise<ExtractIntegrationUpdateResponse>;
/**
 * @typedef {{
 *   id: string
 * }} ExtractIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} extractId
 * @returns {Promise<ExtractIntegrationDeleteResponse>}
 */
export function deleteExtractIntegration(client: ChatBotKitClient, extractId: string): Promise<ExtractIntegrationDeleteResponse>;
export type ChatBotKitClient = import("../../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
export type ExtractIntegrationOptions = {
    name?: string;
    description?: string;
    botId?: string;
    schema?: Record<string, any>;
    syncSchedule?: string;
    expiresIn?: number;
    meta?: Record<string, any>;
};
export type ExtractInegrationInstance = ExtractIntegrationOptions & {
    id: string;
    createdAt: number;
    updatedAt: number;
};
export type ExtractIntegrationListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type ExtractIntegrationListResponse = {
    items: ExtractInegrationInstance[];
};
export type ExtractIntegrationListStreamItem = {
    type: "item";
    data: ExtractInegrationInstance;
};
export type ExtractIntegrationListStreamType = ExtractIntegrationListStreamItem;
export type ExtractIntegrationFetchResponse = ExtractInegrationInstance & {};
export type ExtractIntegrationCreateRequest = ExtractIntegrationOptions & {
    botId: string;
};
export type ExtractIntegrationCreateResponse = {
    id: string;
};
export type ExtractIntegrationUpdateRequest = ExtractIntegrationOptions & {};
export type ExtractIntegrationUpdateResponse = {
    id: string;
};
export type ExtractIntegrationDeleteResponse = {
    id: string;
};
