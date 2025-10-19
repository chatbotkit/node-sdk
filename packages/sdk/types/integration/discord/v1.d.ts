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
 *   botId?: string
 * }} BotRef
 *
 * @typedef {{
 *   backstory?: string,
 *   model?: string,
 *   datasetId?: string,
 *   skillsetId?: string,
 *   privacy?: boolean,
 *   moderation?: boolean
 * }} BotConfig
 *
 * @typedef {BotRef | BotConfig} BotRefOrConfig
 *
 * @typedef {BotRefOrConfig & {
 *   name?: string,
 *   description?: string,
 *   appId?: string,
 *   botToken?: string,
 *   publicKey?: string,
 *   handle?: string,
 *   contactCollection?: boolean,
 *   sessionDuration?: number,
 *   meta?: Record<string,any>
 * }} DiscordIntegrationOptions
 *
 * @typedef {DiscordIntegrationOptions & {
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number,
 * }} DiscordIntegrationInstance
 */
/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} DiscordIntegrationListRequest
 *
 * @typedef {{items: DiscordIntegrationInstance[]}} DiscordIntegrationListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: DiscordIntegrationInstance
 * }} DiscordIntegrationListStreamItem
 *
 * @typedef {DiscordIntegrationListStreamItem} DiscordIntegrationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {DiscordIntegrationListRequest} [request]
 * @returns {ResponsePromise<DiscordIntegrationListResponse,DiscordIntegrationListStreamType>}
 */
export function listDiscordIntegrations(client: ChatBotKitClient, request?: DiscordIntegrationListRequest | undefined): ResponsePromise<DiscordIntegrationListResponse, DiscordIntegrationListStreamType>;
/**
 * @typedef {DiscordIntegrationInstance & {
 * }} DiscordIntegrationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} discordId
 * @returns {ResponsePromise<DiscordIntegrationFetchResponse,never>}
 */
export function fetchDiscordIntegration(client: ChatBotKitClient, discordId: string): ResponsePromise<DiscordIntegrationFetchResponse, never>;
/**
 * @typedef {DiscordIntegrationOptions & {
 *   model?: import('../../model/v1.js').Model
 * }} DiscordIntegrationCreateRequest
 *
 * @typedef {{
 *   id: string
 * }} DiscordIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {DiscordIntegrationCreateRequest} request
 * @returns {Promise<DiscordIntegrationCreateResponse>}
 */
export function createDiscordIntegration(client: ChatBotKitClient, request: DiscordIntegrationCreateRequest): Promise<DiscordIntegrationCreateResponse>;
/**
 * @typedef {DiscordIntegrationOptions & {
 *   model?: import('../../model/v1.js').Model
 * }} DiscordIntegrationUpdateRequest
 *
 * @typedef {{
 *   id: string
 * }} DiscordIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} discordId
 * @param {DiscordIntegrationUpdateRequest} request
 * @returns {Promise<DiscordIntegrationUpdateResponse>}
 */
export function updateDiscordIntegration(client: ChatBotKitClient, discordId: string, request: DiscordIntegrationUpdateRequest): Promise<DiscordIntegrationUpdateResponse>;
/**
 * @typedef {{
 *   id: string
 * }} DiscordIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} discordId
 * @returns {Promise<DiscordIntegrationDeleteResponse>}
 */
export function deleteDiscordIntegration(client: ChatBotKitClient, discordId: string): Promise<DiscordIntegrationDeleteResponse>;
/**
 * @typedef {{
 *   id: string
 * }} DiscordIntegrationSetupResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} discordId
 * @returns {Promise<DiscordIntegrationSetupResponse>}
 */
export function setupDiscordIntegration(client: ChatBotKitClient, discordId: string): Promise<DiscordIntegrationSetupResponse>;
export type ChatBotKitClient = import('../../client.js').ChatBotKitClient;
export type ResponsePromise<T, U> = import('../../client.js').ResponsePromise<T, U>;
export type BotRef = {
    botId?: string;
};
export type BotConfig = {
    backstory?: string;
    model?: string;
    datasetId?: string;
    skillsetId?: string;
    privacy?: boolean;
    moderation?: boolean;
};
export type BotRefOrConfig = BotRef | BotConfig;
export type DiscordIntegrationOptions = BotRefOrConfig & {
    name?: string;
    description?: string;
    appId?: string;
    botToken?: string;
    publicKey?: string;
    handle?: string;
    contactCollection?: boolean;
    sessionDuration?: number;
    meta?: Record<string, any>;
};
export type DiscordIntegrationInstance = DiscordIntegrationOptions & {
    id: string;
    createdAt: number;
    updatedAt: number;
};
export type DiscordIntegrationListRequest = {
    cursor?: string;
    order?: 'desc' | 'asc';
    take?: number;
    meta?: Record<string, string>;
};
export type DiscordIntegrationListResponse = {
    items: DiscordIntegrationInstance[];
};
export type DiscordIntegrationListStreamItem = {
    type: 'item';
    data: DiscordIntegrationInstance;
};
export type DiscordIntegrationListStreamType = DiscordIntegrationListStreamItem;
export type DiscordIntegrationFetchResponse = DiscordIntegrationInstance & {};
export type DiscordIntegrationCreateRequest = DiscordIntegrationOptions & {
    model?: import('../../model/v1.js').Model;
};
export type DiscordIntegrationCreateResponse = {
    id: string;
};
export type DiscordIntegrationUpdateRequest = DiscordIntegrationOptions & {
    model?: import('../../model/v1.js').Model;
};
export type DiscordIntegrationUpdateResponse = {
    id: string;
};
export type DiscordIntegrationDeleteResponse = {
    id: string;
};
export type DiscordIntegrationSetupResponse = {
    id: string;
};
