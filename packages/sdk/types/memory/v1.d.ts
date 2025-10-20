/**
 * @typedef {import('../client.js').ChatBotKitClient} ChatBotKitClient
 */
/**
 * @template T
 * @template U
 * @typedef {import('../client.js').ResponsePromise<T,U>} ResponsePromise
 */
/**
 * @typedef {{
 *   name?: string,
 *   description?: string,
 *   text?: string,
 *   meta?: Record<string,any>,
 *   contactId?: string,
 *   botId?: string
 * }} MemoryOptions
 *
 * @typedef {MemoryOptions & {
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number
 * }} MemoryInstance
 */
/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>,
 *   contactId?: string,
 *   botId?: string
 * }} MemoryListRequest
 *
 * @typedef {{items: MemoryInstance[]}} MemoryListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: MemoryInstance
 * }} MemoryListStreamItemType
 *
 * @typedef {MemoryListStreamItemType} MemoryListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {MemoryListRequest} [request]
 * @returns {ResponsePromise<MemoryListResponse,MemoryListStreamType>}
 */
export function listMemories(client: ChatBotKitClient, request?: MemoryListRequest): ResponsePromise<MemoryListResponse, MemoryListStreamType>;
/**
 * @typedef {MemoryInstance & {
 * }} MemoryFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} memoryId
 * @returns {ResponsePromise<MemoryFetchResponse,never>}
 */
export function fetchMemory(client: ChatBotKitClient, memoryId: string): ResponsePromise<MemoryFetchResponse, never>;
/**
 * @typedef {MemoryOptions & {
 * }} MemoryCreateRequest
 *
 * @typedef {{
 *   id: string
 * }} MemoryCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {MemoryCreateRequest} request
 * @returns {Promise<MemoryCreateResponse>}
 */
export function createMemory(client: ChatBotKitClient, request: MemoryCreateRequest): Promise<MemoryCreateResponse>;
/**
 * @typedef {MemoryOptions & {
 * }} MemoryUpdateRequest
 *
 * @typedef {{
 *   id: string
 * }} MemoryUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} memoryId
 * @param {MemoryUpdateRequest} request
 * @returns {Promise<MemoryUpdateResponse>}
 */
export function updateMemory(client: ChatBotKitClient, memoryId: string, request: MemoryUpdateRequest): Promise<MemoryUpdateResponse>;
/**
 * @typedef {{
 *   id: string
 * }} MemoryDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} memoryId
 * @returns {Promise<MemoryDeleteResponse>}
 */
export function deleteMemory(client: ChatBotKitClient, memoryId: string): Promise<MemoryDeleteResponse>;
/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>,
 *   contactId?: string,
 *   botId?: string
 * }} MemoryExportRequest
 *
 * @typedef {{items: MemoryInstance[]}} MemoryExportResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: MemoryInstance
 * }} MemoryExportStreamItemType
 *
 * @typedef {MemoryExportStreamItemType} MemoryExportStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {MemoryExportRequest} [request]
 * @returns {ResponsePromise<MemoryExportResponse,MemoryExportStreamType>}
 */
export function exportMemories(client: ChatBotKitClient, request?: MemoryExportRequest): ResponsePromise<MemoryExportResponse, MemoryExportStreamType>;
/**
 * @typedef {{
 *   search: string,
 *   contactId?: string,
 *   botId?: string
 * }} MemorySearchRequest
 *
 * @typedef {{
 *   id: string,
 *   text: string,
 *   meta?: Record<string,any>
 * }} MemorySearchItem
 *
 * @typedef {{
 *   items: MemorySearchItem[]
 * }} MemorySearchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {MemorySearchRequest} request
 * @returns {Promise<MemorySearchResponse>}
 */
export function searchMemory(client: ChatBotKitClient, request: MemorySearchRequest): Promise<MemorySearchResponse>;
export type ChatBotKitClient = import("../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../client.js").ResponsePromise<T, U>;
export type MemoryOptions = {
    name?: string;
    description?: string;
    text?: string;
    meta?: Record<string, any>;
    contactId?: string;
    botId?: string;
};
export type MemoryInstance = MemoryOptions & {
    id: string;
    createdAt: number;
    updatedAt: number;
};
export type MemoryListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
    contactId?: string;
    botId?: string;
};
export type MemoryListResponse = {
    items: MemoryInstance[];
};
export type MemoryListStreamItemType = {
    type: "item";
    data: MemoryInstance;
};
export type MemoryListStreamType = MemoryListStreamItemType;
export type MemoryFetchResponse = MemoryInstance & {};
export type MemoryCreateRequest = MemoryOptions & {};
export type MemoryCreateResponse = {
    id: string;
};
export type MemoryUpdateRequest = MemoryOptions & {};
export type MemoryUpdateResponse = {
    id: string;
};
export type MemoryDeleteResponse = {
    id: string;
};
export type MemoryExportRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
    contactId?: string;
    botId?: string;
};
export type MemoryExportResponse = {
    items: MemoryInstance[];
};
export type MemoryExportStreamItemType = {
    type: "item";
    data: MemoryInstance;
};
export type MemoryExportStreamType = MemoryExportStreamItemType;
export type MemorySearchRequest = {
    search: string;
    contactId?: string;
    botId?: string;
};
export type MemorySearchItem = {
    id: string;
    text: string;
    meta?: Record<string, any>;
};
export type MemorySearchResponse = {
    items: MemorySearchItem[];
};
