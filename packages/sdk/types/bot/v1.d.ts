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
 *   backstory?: string,
 *   model?: string,
 *   datasetId?: string,
 *   skillsetId?: string,
 *   meta?: Record<string,any>
 * }} BotOptions
 *
 * @typedef {BotOptions & {
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number
 * }} BotInstance
 */
/**
 * @typedef {{cursor?: string, take?: number, meta?: Record<string,string>}} BotListRequest
 *
 * @typedef {{items: BotInstance[]}} BotListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: BotInstance
 * }} BotListStreamItemType
 *
 * @typedef {BotListStreamItemType} BotListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {BotListRequest} [request]
 * @returns {ResponsePromise<BotListResponse,BotListStreamType>}
 */
export function listBots(client: ChatBotKitClient, request?: BotListRequest | undefined): ResponsePromise<BotListResponse, BotListStreamType>;
/**
 * @typedef {BotInstance & {
 * }} BotFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} botId
 * @returns {Promise<BotFetchResponse>}
 */
export function fetchBot(client: ChatBotKitClient, botId: string): Promise<BotFetchResponse>;
/**
 * @typedef {BotOptions & {
 * }} BotCreateRequest
 *
 * @typedef {{
 *   id: string
 * }} BotCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {BotCreateRequest} request
 * @returns {Promise<BotCreateResponse>}
 */
export function createBot(client: ChatBotKitClient, request: BotCreateRequest): Promise<BotCreateResponse>;
/**
 * @typedef {BotOptions & {
 * }} BotUpdateRequest
 *
 * @typedef {{
 *   id: string
 * }} BotUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} botId
 * @param {BotUpdateRequest} request
 * @returns {Promise<BotUpdateResponse>}
 */
export function updateBot(client: ChatBotKitClient, botId: string, request: BotUpdateRequest): Promise<BotUpdateResponse>;
/**
 * @typedef {{
 *   id: string
 * }} BotDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} botId
 * @returns {Promise<BotDeleteResponse>}
 */
export function deleteBot(client: ChatBotKitClient, botId: string): Promise<BotDeleteResponse>;
export type ChatBotKitClient = import('../client.js').ChatBotKitClient;
export type ResponsePromise<T, U> = import('../client.js').ResponsePromise<T, U>;
export type BotOptions = {
    name?: string;
    description?: string;
    backstory?: string;
    model?: string;
    datasetId?: string;
    skillsetId?: string;
    meta?: Record<string, any>;
};
export type BotInstance = BotOptions & {
    id: string;
    createdAt: number;
    updatedAt: number;
};
export type BotListRequest = {
    cursor?: string;
    take?: number;
    meta?: Record<string, string>;
};
export type BotListResponse = {
    items: BotInstance[];
};
export type BotListStreamItemType = {
    type: 'item';
    data: BotInstance;
};
export type BotListStreamType = BotListStreamItemType;
export type BotFetchResponse = BotInstance & {};
export type BotCreateRequest = BotOptions & {};
export type BotCreateResponse = {
    id: string;
};
export type BotUpdateRequest = BotOptions & {};
export type BotUpdateResponse = {
    id: string;
};
export type BotDeleteResponse = {
    id: string;
};
