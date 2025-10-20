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
 *   phoneNumberId?: string,
 *   accessToken?: string,
 *   contactCollection?: boolean,
 *   sessionDuration?: number,
 *   attachments?: boolean,
 *   meta?: Record<string,any>,
 *   botId?: string,
 *   blueprintId?: string
 * }} WhatsAppIntegrationOptions
 *
 * @typedef {WhatsAppIntegrationOptions & {
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number,
 *   verifyToken: string
 * }} WhatsAppIntegrationInstance
 */
/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} WhatsAppIntegrationListRequest
 *
 * @typedef {{items: WhatsAppIntegrationInstance[]}} WhatsAppIntegrationListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: WhatsAppIntegrationInstance
 * }} WhatsAppIntegrationListStreamItem
 *
 * @typedef {WhatsAppIntegrationListStreamItem} WhatsAppIntegrationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {WhatsAppIntegrationListRequest} [request]
 * @returns {ResponsePromise<WhatsAppIntegrationListResponse,WhatsAppIntegrationListStreamType>}
 */
export function listWhatsAppIntegrations(client: ChatBotKitClient, request?: WhatsAppIntegrationListRequest): ResponsePromise<WhatsAppIntegrationListResponse, WhatsAppIntegrationListStreamType>;
/**
 * @typedef {WhatsAppIntegrationInstance & {
 * }} WhatsAppIntegrationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} whatsappId
 * @returns {ResponsePromise<WhatsAppIntegrationFetchResponse,never>}
 */
export function fetchWhatsAppIntegration(client: ChatBotKitClient, whatsappId: string): ResponsePromise<WhatsAppIntegrationFetchResponse, never>;
/**
 * @typedef {WhatsAppIntegrationOptions & {
 *   model?: import('../../model/v1.js').Model
 * }} WhatsAppIntegrationCreateRequest
 *
 * @typedef {{
 *   id: string
 * }} WhatsAppIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {WhatsAppIntegrationCreateRequest} request
 * @returns {Promise<WhatsAppIntegrationCreateResponse>}
 */
export function createWhatsAppIntegration(client: ChatBotKitClient, request: WhatsAppIntegrationCreateRequest): Promise<WhatsAppIntegrationCreateResponse>;
/**
 * @typedef {WhatsAppIntegrationOptions & {
 *   model?: import('../../model/v1.js').Model
 * }} WhatsAppIntegrationUpdateRequest
 *
 * @typedef {{
 *   id: string
 * }} WhatsAppIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} whatsappId
 * @param {WhatsAppIntegrationUpdateRequest} request
 * @returns {Promise<WhatsAppIntegrationUpdateResponse>}
 */
export function updateWhatsAppIntegration(client: ChatBotKitClient, whatsappId: string, request: WhatsAppIntegrationUpdateRequest): Promise<WhatsAppIntegrationUpdateResponse>;
/**
 * @typedef {{
 *   id: string
 * }} WhatsAppIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} whatsappId
 * @returns {Promise<WhatsAppIntegrationDeleteResponse>}
 */
export function deleteWhatsAppIntegration(client: ChatBotKitClient, whatsappId: string): Promise<WhatsAppIntegrationDeleteResponse>;
/**
 * @typedef {{
 *   id: string
 * }} WhatsAppIntegrationSetupResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} whatsappId
 * @returns {Promise<WhatsAppIntegrationSetupResponse>}
 */
export function setupWhatsAppIntegration(client: ChatBotKitClient, whatsappId: string): Promise<WhatsAppIntegrationSetupResponse>;
export type ChatBotKitClient = import("../../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
export type WhatsAppIntegrationOptions = {
    name?: string;
    description?: string;
    phoneNumberId?: string;
    accessToken?: string;
    contactCollection?: boolean;
    sessionDuration?: number;
    attachments?: boolean;
    meta?: Record<string, any>;
    botId?: string;
    blueprintId?: string;
};
export type WhatsAppIntegrationInstance = WhatsAppIntegrationOptions & {
    id: string;
    createdAt: number;
    updatedAt: number;
    verifyToken: string;
};
export type WhatsAppIntegrationListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type WhatsAppIntegrationListResponse = {
    items: WhatsAppIntegrationInstance[];
};
export type WhatsAppIntegrationListStreamItem = {
    type: "item";
    data: WhatsAppIntegrationInstance;
};
export type WhatsAppIntegrationListStreamType = WhatsAppIntegrationListStreamItem;
export type WhatsAppIntegrationFetchResponse = WhatsAppIntegrationInstance & {};
export type WhatsAppIntegrationCreateRequest = WhatsAppIntegrationOptions & {
    model?: import("../../model/v1.js").Model;
};
export type WhatsAppIntegrationCreateResponse = {
    id: string;
};
export type WhatsAppIntegrationUpdateRequest = WhatsAppIntegrationOptions & {
    model?: import("../../model/v1.js").Model;
};
export type WhatsAppIntegrationUpdateResponse = {
    id: string;
};
export type WhatsAppIntegrationDeleteResponse = {
    id: string;
};
export type WhatsAppIntegrationSetupResponse = {
    id: string;
};
