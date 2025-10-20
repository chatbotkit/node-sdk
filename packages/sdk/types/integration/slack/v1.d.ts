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
 *   signingSecret?: string,
 *   botToken?: string,
 *   visibleMessages?: number,
 *   contactCollection?: boolean,
 *   sessionDuration?: number,
 *   meta?: Record<string,any>,
 *   botId?: string,
 *   blueprintId?: string
 * }} SlackIntegrationOptions
 *
 * @typedef {SlackIntegrationOptions & {
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number
 * }} SlackIntegrationInstance
 */
/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} SlackIntegrationListRequest
 *
 * @typedef {{items: SlackIntegrationInstance[]}} SlackIntegrationListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: SlackIntegrationInstance
 * }} SlackIntegrationListStreamItem
 *
 * @typedef {SlackIntegrationListStreamItem} SlackIntegrationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {SlackIntegrationListRequest} [request]
 * @returns {ResponsePromise<SlackIntegrationListResponse,SlackIntegrationListStreamType>}
 */
export function listSlackIntegrations(client: ChatBotKitClient, request?: SlackIntegrationListRequest): ResponsePromise<SlackIntegrationListResponse, SlackIntegrationListStreamType>;
/**
 * @typedef {SlackIntegrationInstance & {
 * }} SlackIntegrationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} slackId
 * @returns {ResponsePromise<SlackIntegrationFetchResponse,never>}
 */
export function fetchSlackIntegration(client: ChatBotKitClient, slackId: string): ResponsePromise<SlackIntegrationFetchResponse, never>;
/**
 * @typedef {SlackIntegrationOptions & {
 *   model?: import('../../model/v1.js').Model
 * }} SlackIntegrationCreateRequest
 *
 * @typedef {{
 *   id: string
 * }} SlackIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {SlackIntegrationCreateRequest} request
 * @returns {Promise<SlackIntegrationCreateResponse>}
 */
export function createSlackIntegration(client: ChatBotKitClient, request: SlackIntegrationCreateRequest): Promise<SlackIntegrationCreateResponse>;
/**
 * @typedef {SlackIntegrationOptions & {
 *   model?: import('../../model/v1.js').Model
 * }} SlackIntegrationUpdateRequest
 *
 * @typedef {{
 *   id: string
 * }} SlackIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} slackId
 * @param {SlackIntegrationUpdateRequest} request
 * @returns {Promise<SlackIntegrationUpdateResponse>}
 */
export function updateSlackIntegration(client: ChatBotKitClient, slackId: string, request: SlackIntegrationUpdateRequest): Promise<SlackIntegrationUpdateResponse>;
/**
 * @typedef {{
 *   id: string
 * }} SlackIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} slackId
 * @returns {Promise<SlackIntegrationDeleteResponse>}
 */
export function deleteSlackIntegration(client: ChatBotKitClient, slackId: string): Promise<SlackIntegrationDeleteResponse>;
/**
 * @typedef {{
 *   id: string
 * }} SlackIntegrationSetupResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} slackId
 * @returns {Promise<SlackIntegrationSetupResponse>}
 */
export function setupSlackIntegration(client: ChatBotKitClient, slackId: string): Promise<SlackIntegrationSetupResponse>;
export type ChatBotKitClient = import("../../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
export type SlackIntegrationOptions = {
    name?: string;
    description?: string;
    signingSecret?: string;
    botToken?: string;
    visibleMessages?: number;
    contactCollection?: boolean;
    sessionDuration?: number;
    meta?: Record<string, any>;
    botId?: string;
    blueprintId?: string;
};
export type SlackIntegrationInstance = SlackIntegrationOptions & {
    id: string;
    createdAt: number;
    updatedAt: number;
};
export type SlackIntegrationListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type SlackIntegrationListResponse = {
    items: SlackIntegrationInstance[];
};
export type SlackIntegrationListStreamItem = {
    type: "item";
    data: SlackIntegrationInstance;
};
export type SlackIntegrationListStreamType = SlackIntegrationListStreamItem;
export type SlackIntegrationFetchResponse = SlackIntegrationInstance & {};
export type SlackIntegrationCreateRequest = SlackIntegrationOptions & {
    model?: import("../../model/v1.js").Model;
};
export type SlackIntegrationCreateResponse = {
    id: string;
};
export type SlackIntegrationUpdateRequest = SlackIntegrationOptions & {
    model?: import("../../model/v1.js").Model;
};
export type SlackIntegrationUpdateResponse = {
    id: string;
};
export type SlackIntegrationDeleteResponse = {
    id: string;
};
export type SlackIntegrationSetupResponse = {
    id: string;
};
