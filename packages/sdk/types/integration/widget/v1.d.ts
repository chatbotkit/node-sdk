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
 *   theme?: string,
 *   layout?: string,
 *   title?: string,
 *   intro?: string,
 *   initial?: string,
 *   placeholder?: string,
 *   language?: string,
 *   origin?: string,
 *   stream?: boolean,
 *   verbose?: boolean,
 *   tools?: boolean,
 *   unfurl?: boolean,
 *   math?: boolean,
 *   attachments?: boolean,
 *   autoScroll?: boolean,
 *   startFirst?: boolean,
 *   contactCollection?: boolean,
 *   exportConversation?: boolean,
 *   restartConversation?: boolean,
 *   maxsimize?: boolean,
 *   messagePeek?: boolean,
 *   poweredBy?: boolean,
 *   sessionDuration?: number,
 *   meta?: Record<string,any>
 * }} WidgetIntegrationOptions
 *
 * @typedef {WidgetIntegrationOptions & {
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number
 * }} WidgetInegrationInstance
 */
/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} WidgetIntegrationListRequest
 *
 * @typedef {{items: WidgetInegrationInstance[]}} WidgetIntegrationListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: WidgetInegrationInstance
 * }} WidgetIntegrationListStreamItem
 *
 * @typedef {WidgetIntegrationListStreamItem} WidgetIntegrationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {WidgetIntegrationListRequest} [request]
 * @returns {ResponsePromise<WidgetIntegrationListResponse,WidgetIntegrationListStreamType>}
 */
export function listWidgetIntegrations(client: ChatBotKitClient, request?: WidgetIntegrationListRequest): ResponsePromise<WidgetIntegrationListResponse, WidgetIntegrationListStreamType>;
/**
 * @typedef {WidgetInegrationInstance & {
 * }} WidgetIntegrationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} widgetId
 * @returns {ResponsePromise<WidgetIntegrationFetchResponse,never>}
 */
export function fetchWidgetIntegration(client: ChatBotKitClient, widgetId: string): ResponsePromise<WidgetIntegrationFetchResponse, never>;
/**
 * @typedef {WidgetIntegrationOptions & {
 * }} WidgetIntegrationCreateRequest
 *
 * @typedef {{
 *   id: string
 * }} WidgetIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {WidgetIntegrationCreateRequest} request
 * @returns {Promise<WidgetIntegrationCreateResponse>}
 */
export function createWidgetIntegration(client: ChatBotKitClient, request: WidgetIntegrationCreateRequest): Promise<WidgetIntegrationCreateResponse>;
/**
 * @typedef {WidgetIntegrationOptions & {
 * }} WidgetIntegrationUpdateRequest
 *
 * @typedef {{
 *   id: string
 * }} WidgetIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} widgetId
 * @param {WidgetIntegrationUpdateRequest} request
 * @returns {Promise<WidgetIntegrationUpdateResponse>}
 */
export function updateWidgetIntegration(client: ChatBotKitClient, widgetId: string, request: WidgetIntegrationUpdateRequest): Promise<WidgetIntegrationUpdateResponse>;
/**
 * @typedef {{
 *   id: string
 * }} WidgetIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} widgetId
 * @returns {Promise<WidgetIntegrationDeleteResponse>}
 */
export function deleteWidgetIntegration(client: ChatBotKitClient, widgetId: string): Promise<WidgetIntegrationDeleteResponse>;
export type ChatBotKitClient = import("../../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
export type WidgetIntegrationOptions = {
    name?: string;
    description?: string;
    theme?: string;
    layout?: string;
    title?: string;
    intro?: string;
    initial?: string;
    placeholder?: string;
    language?: string;
    origin?: string;
    stream?: boolean;
    verbose?: boolean;
    tools?: boolean;
    unfurl?: boolean;
    math?: boolean;
    attachments?: boolean;
    autoScroll?: boolean;
    startFirst?: boolean;
    contactCollection?: boolean;
    exportConversation?: boolean;
    restartConversation?: boolean;
    maxsimize?: boolean;
    messagePeek?: boolean;
    poweredBy?: boolean;
    sessionDuration?: number;
    meta?: Record<string, any>;
};
export type WidgetInegrationInstance = WidgetIntegrationOptions & {
    id: string;
    createdAt: number;
    updatedAt: number;
};
export type WidgetIntegrationListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type WidgetIntegrationListResponse = {
    items: WidgetInegrationInstance[];
};
export type WidgetIntegrationListStreamItem = {
    type: "item";
    data: WidgetInegrationInstance;
};
export type WidgetIntegrationListStreamType = WidgetIntegrationListStreamItem;
export type WidgetIntegrationFetchResponse = WidgetInegrationInstance & {};
export type WidgetIntegrationCreateRequest = WidgetIntegrationOptions & {};
export type WidgetIntegrationCreateResponse = {
    id: string;
};
export type WidgetIntegrationUpdateRequest = WidgetIntegrationOptions & {};
export type WidgetIntegrationUpdateResponse = {
    id: string;
};
export type WidgetIntegrationDeleteResponse = {
    id: string;
};
