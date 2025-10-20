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
 *   meta?: Record<string,any>,
 *   botId?: string,
 *   contactCollection?: boolean,
 *   sessionDuration?: number
 * }} TwilioIntegrationOptions
 *
 * @typedef {TwilioIntegrationOptions & {
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number
 * }} TwilioIntegrationInstance
 */
/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} TwilioIntegrationListRequest
 *
 * @typedef {{items: TwilioIntegrationInstance[]}} TwilioIntegrationListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: TwilioIntegrationInstance
 * }} TwilioIntegrationListStreamItem
 *
 * @typedef {TwilioIntegrationListStreamItem} TwilioIntegrationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {TwilioIntegrationListRequest} [request]
 * @returns {ResponsePromise<TwilioIntegrationListResponse,TwilioIntegrationListStreamType>}
 */
export function listTwilioIntegrations(client: ChatBotKitClient, request?: TwilioIntegrationListRequest): ResponsePromise<TwilioIntegrationListResponse, TwilioIntegrationListStreamType>;
/**
 * @typedef {TwilioIntegrationInstance & {
 * }} TwilioIntegrationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} twilioId
 * @returns {ResponsePromise<TwilioIntegrationFetchResponse,never>}
 */
export function fetchTwilioIntegration(client: ChatBotKitClient, twilioId: string): ResponsePromise<TwilioIntegrationFetchResponse, never>;
/**
 * @typedef {TwilioIntegrationOptions & {
 *   model?: import('../../model/v1.js').Model
 * }} TwilioIntegrationCreateRequest
 *
 * @typedef {{
 *   id: string
 * }} TwilioIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {TwilioIntegrationCreateRequest} request
 * @returns {Promise<TwilioIntegrationCreateResponse>}
 */
export function createTwilioIntegration(client: ChatBotKitClient, request: TwilioIntegrationCreateRequest): Promise<TwilioIntegrationCreateResponse>;
/**
 * @typedef {TwilioIntegrationOptions & {
 *   model?: import('../../model/v1.js').Model
 * }} TwilioIntegrationUpdateRequest
 *
 * @typedef {{
 *   id: string
 * }} TwilioIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} twilioId
 * @param {TwilioIntegrationUpdateRequest} request
 * @returns {Promise<TwilioIntegrationUpdateResponse>}
 */
export function updateTwilioIntegration(client: ChatBotKitClient, twilioId: string, request: TwilioIntegrationUpdateRequest): Promise<TwilioIntegrationUpdateResponse>;
/**
 * @typedef {{
 *   id: string
 * }} TwilioIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} twilioId
 * @returns {Promise<TwilioIntegrationDeleteResponse>}
 */
export function deleteTwilioIntegration(client: ChatBotKitClient, twilioId: string): Promise<TwilioIntegrationDeleteResponse>;
/**
 * @typedef {{
 *   id: string
 * }} TwilioIntegrationSetupResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} twilioId
 * @returns {Promise<TwilioIntegrationSetupResponse>}
 */
export function setupTwilioIntegration(client: ChatBotKitClient, twilioId: string): Promise<TwilioIntegrationSetupResponse>;
export type ChatBotKitClient = import("../../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
export type TwilioIntegrationOptions = {
    name?: string;
    description?: string;
    meta?: Record<string, any>;
    botId?: string;
    contactCollection?: boolean;
    sessionDuration?: number;
};
export type TwilioIntegrationInstance = TwilioIntegrationOptions & {
    id: string;
    createdAt: number;
    updatedAt: number;
};
export type TwilioIntegrationListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type TwilioIntegrationListResponse = {
    items: TwilioIntegrationInstance[];
};
export type TwilioIntegrationListStreamItem = {
    type: "item";
    data: TwilioIntegrationInstance;
};
export type TwilioIntegrationListStreamType = TwilioIntegrationListStreamItem;
export type TwilioIntegrationFetchResponse = TwilioIntegrationInstance & {};
export type TwilioIntegrationCreateRequest = TwilioIntegrationOptions & {
    model?: import("../../model/v1.js").Model;
};
export type TwilioIntegrationCreateResponse = {
    id: string;
};
export type TwilioIntegrationUpdateRequest = TwilioIntegrationOptions & {
    model?: import("../../model/v1.js").Model;
};
export type TwilioIntegrationUpdateResponse = {
    id: string;
};
export type TwilioIntegrationDeleteResponse = {
    id: string;
};
export type TwilioIntegrationSetupResponse = {
    id: string;
};
