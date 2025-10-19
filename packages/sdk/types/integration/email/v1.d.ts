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
 *   contactCollection?: boolean,
 *   sessionDuration?: number,
 *   meta?: Record<string,any>,
 *   botId?: string
 * }} EmailIntegrationOptions
 *
 * @typedef {EmailIntegrationOptions & {
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number,
 * }} EmailIntegrationInstance
 */
/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} EmailIntegrationListRequest
 *
 * @typedef {{items: EmailIntegrationInstance[]}} EmailIntegrationListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: EmailIntegrationInstance
 * }} EmailIntegrationListStreamItem
 *
 * @typedef {EmailIntegrationListStreamItem} EmailIntegrationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {EmailIntegrationListRequest} [request]
 * @returns {ResponsePromise<EmailIntegrationListResponse,EmailIntegrationListStreamType>}
 */
export function listEmailIntegrations(client: ChatBotKitClient, request?: EmailIntegrationListRequest): ResponsePromise<EmailIntegrationListResponse, EmailIntegrationListStreamType>;
/**
 * @typedef {EmailIntegrationInstance & {
 * }} EmailIntegrationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} emailId
 * @returns {ResponsePromise<EmailIntegrationFetchResponse,never>}
 */
export function fetchEmailIntegration(client: ChatBotKitClient, emailId: string): ResponsePromise<EmailIntegrationFetchResponse, never>;
/**
 * @typedef {EmailIntegrationOptions & {
 *   model?: import('../../model/v1.js').Model
 * }} EmailIntegrationCreateRequest
 *
 * @typedef {{
 *   id: string
 * }} EmailIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {EmailIntegrationCreateRequest} request
 * @returns {Promise<EmailIntegrationCreateResponse>}
 */
export function createEmailIntegration(client: ChatBotKitClient, request: EmailIntegrationCreateRequest): Promise<EmailIntegrationCreateResponse>;
/**
 * @typedef {EmailIntegrationOptions & {
 *   model?: import('../../model/v1.js').Model
 * }} EmailIntegrationUpdateRequest
 *
 * @typedef {{
 *   id: string
 * }} EmailIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} emailId
 * @param {EmailIntegrationUpdateRequest} request
 * @returns {Promise<EmailIntegrationUpdateResponse>}
 */
export function updateEmailIntegration(client: ChatBotKitClient, emailId: string, request: EmailIntegrationUpdateRequest): Promise<EmailIntegrationUpdateResponse>;
/**
 * @typedef {{
 *   id: string
 * }} EmailIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} emailId
 * @returns {Promise<EmailIntegrationDeleteResponse>}
 */
export function deleteEmailIntegration(client: ChatBotKitClient, emailId: string): Promise<EmailIntegrationDeleteResponse>;
/**
 * @typedef {{
 *   id: string
 * }} EmailIntegrationSetupResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} emailId
 * @returns {Promise<EmailIntegrationSetupResponse>}
 */
export function setupEmailIntegration(client: ChatBotKitClient, emailId: string): Promise<EmailIntegrationSetupResponse>;
export type ChatBotKitClient = import("../../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
export type EmailIntegrationOptions = {
    name?: string;
    description?: string;
    contactCollection?: boolean;
    sessionDuration?: number;
    meta?: Record<string, any>;
    botId?: string;
};
export type EmailIntegrationInstance = EmailIntegrationOptions & {
    id: string;
    createdAt: number;
    updatedAt: number;
};
export type EmailIntegrationListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type EmailIntegrationListResponse = {
    items: EmailIntegrationInstance[];
};
export type EmailIntegrationListStreamItem = {
    type: "item";
    data: EmailIntegrationInstance;
};
export type EmailIntegrationListStreamType = EmailIntegrationListStreamItem;
export type EmailIntegrationFetchResponse = EmailIntegrationInstance & {};
export type EmailIntegrationCreateRequest = EmailIntegrationOptions & {
    model?: import("../../model/v1.js").Model;
};
export type EmailIntegrationCreateResponse = {
    id: string;
};
export type EmailIntegrationUpdateRequest = EmailIntegrationOptions & {
    model?: import("../../model/v1.js").Model;
};
export type EmailIntegrationUpdateResponse = {
    id: string;
};
export type EmailIntegrationDeleteResponse = {
    id: string;
};
export type EmailIntegrationSetupResponse = {
    id: string;
};
