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
 *   authenticate?: boolean,
 *   triggerSchedule?: "never"|"quarterhourly"|"halfhourly"|"hourly"|"daily"|"weekly"|"monthly",
 *   sessionDuration?: number,
 *   meta?: Record<string,any>
 * }} TriggerIntegrationOptions
 *
 * @typedef {TriggerIntegrationOptions & {
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number,
 * }} TriggerIntegrationInstance
 */
/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} TriggerIntegrationListRequest
 *
 * @typedef {{items: TriggerIntegrationInstance[]}} TriggerIntegrationListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: TriggerIntegrationInstance
 * }} TriggerIntegrationListStreamItem
 *
 * @typedef {TriggerIntegrationListStreamItem} TriggerIntegrationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {TriggerIntegrationListRequest} [request]
 * @returns {ResponsePromise<TriggerIntegrationListResponse,TriggerIntegrationListStreamType>}
 */
export function listTriggerIntegrations(client: ChatBotKitClient, request?: TriggerIntegrationListRequest | undefined): ResponsePromise<TriggerIntegrationListResponse, TriggerIntegrationListStreamType>;
/**
 * @typedef {TriggerIntegrationInstance & {
 * }} TriggerIntegrationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} triggerId
 * @returns {ResponsePromise<TriggerIntegrationFetchResponse,never>}
 */
export function fetchTriggerIntegration(client: ChatBotKitClient, triggerId: string): ResponsePromise<TriggerIntegrationFetchResponse, never>;
/**
 * @typedef {TriggerIntegrationOptions & {
 *   model?: import('../../model/v1.js').Model
 * }} TriggerIntegrationCreateRequest
 *
 * @typedef {{
 *   id: string
 * }} TriggerIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {TriggerIntegrationCreateRequest} request
 * @returns {Promise<TriggerIntegrationCreateResponse>}
 */
export function createTriggerIntegration(client: ChatBotKitClient, request: TriggerIntegrationCreateRequest): Promise<TriggerIntegrationCreateResponse>;
/**
 * @typedef {TriggerIntegrationOptions & {
 *   model?: import('../../model/v1.js').Model
 * }} TriggerIntegrationUpdateRequest
 *
 * @typedef {{
 *   id: string
 * }} TriggerIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} triggerId
 * @param {TriggerIntegrationUpdateRequest} request
 * @returns {Promise<TriggerIntegrationUpdateResponse>}
 */
export function updateTriggerIntegration(client: ChatBotKitClient, triggerId: string, request: TriggerIntegrationUpdateRequest): Promise<TriggerIntegrationUpdateResponse>;
/**
 * @typedef {{
 *   id: string
 * }} TriggerIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} triggerId
 * @returns {Promise<TriggerIntegrationDeleteResponse>}
 */
export function deleteTriggerIntegration(client: ChatBotKitClient, triggerId: string): Promise<TriggerIntegrationDeleteResponse>;
/**
 * @typedef {{
 *   id: string
 * }} TriggerIntegrationSetupResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} triggerId
 * @returns {Promise<TriggerIntegrationSetupResponse>}
 */
export function setupTriggerIntegration(client: ChatBotKitClient, triggerId: string): Promise<TriggerIntegrationSetupResponse>;
/**
 * @typedef {object} TriggerIntegrationInvokeRequest
 *
 * @typedef {{
 *   id: string
 * }} TriggerIntegrationInvokeResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} triggerId
 * @param {TriggerIntegrationInvokeRequest} request
 * @returns {Promise<TriggerIntegrationInvokeResponse>}
 */
export function invokeTriggerIntegration(client: ChatBotKitClient, triggerId: string, request: TriggerIntegrationInvokeRequest): Promise<TriggerIntegrationInvokeResponse>;
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
export type TriggerIntegrationOptions = BotRefOrConfig & {
    name?: string;
    description?: string;
    authenticate?: boolean;
    triggerSchedule?: "never" | "quarterhourly" | "halfhourly" | "hourly" | "daily" | "weekly" | "monthly";
    sessionDuration?: number;
    meta?: Record<string, any>;
};
export type TriggerIntegrationInstance = TriggerIntegrationOptions & {
    id: string;
    createdAt: number;
    updatedAt: number;
};
export type TriggerIntegrationListRequest = {
    cursor?: string;
    order?: 'desc' | 'asc';
    take?: number;
    meta?: Record<string, string>;
};
export type TriggerIntegrationListResponse = {
    items: TriggerIntegrationInstance[];
};
export type TriggerIntegrationListStreamItem = {
    type: 'item';
    data: TriggerIntegrationInstance;
};
export type TriggerIntegrationListStreamType = TriggerIntegrationListStreamItem;
export type TriggerIntegrationFetchResponse = TriggerIntegrationInstance & {};
export type TriggerIntegrationCreateRequest = TriggerIntegrationOptions & {
    model?: import('../../model/v1.js').Model;
};
export type TriggerIntegrationCreateResponse = {
    id: string;
};
export type TriggerIntegrationUpdateRequest = TriggerIntegrationOptions & {
    model?: import('../../model/v1.js').Model;
};
export type TriggerIntegrationUpdateResponse = {
    id: string;
};
export type TriggerIntegrationDeleteResponse = {
    id: string;
};
export type TriggerIntegrationSetupResponse = {
    id: string;
};
export type TriggerIntegrationInvokeRequest = object;
export type TriggerIntegrationInvokeResponse = {
    id: string;
};
