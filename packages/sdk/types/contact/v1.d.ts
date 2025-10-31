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
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} ContactListRequest
 *
 * @typedef {import('../types/api/v1.js').operations['listContacts']['responses']['200']['content']['application/json']} ContactListResponse
 *
 * @typedef {import('../types/api/v1.js').operations['listContacts']['responses']['200']['content']['application/jsonl']} ContactListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {ContactListRequest} [request]
 * @returns {ResponsePromise<ContactListResponse,ContactListStreamType>}
 */
export function listContacts(client: ChatBotKitClient, request?: ContactListRequest): ResponsePromise<ContactListResponse, ContactListStreamType>;
/**
 * @typedef {import('../types/api/v1.js').operations['fetchContact']['responses']['200']['content']['application/json']} ContactFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} contactId
 * @returns {ResponsePromise<ContactFetchResponse,never>}
 */
export function fetchContact(client: ChatBotKitClient, contactId: string): ResponsePromise<ContactFetchResponse, never>;
/**
 * @typedef {import('../types/api/v1.js').operations['createContact']['requestBody']['content']['application/json']} ContactCreateRequestBody
 *
 * @typedef {ContactCreateRequestBody} ContactCreateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['createContact']['responses']['200']['content']['application/json']} ContactCreateResponseBody
 *
 * @typedef {ContactCreateResponseBody} ContactCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {ContactCreateRequest} request
 * @returns {Promise<ContactCreateResponse>}
 */
export function createContact(client: ChatBotKitClient, request: ContactCreateRequest): Promise<ContactCreateResponse>;
/**
 * @typedef {import('../types/api/v1.js').operations['updateContact']['requestBody']['content']['application/json']} ContactUpdateRequestBody
 *
 * @typedef {ContactUpdateRequestBody} ContactUpdateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['updateContact']['responses']['200']['content']['application/json']} ContactUpdateResponseBody
 *
 * @typedef {ContactUpdateResponseBody} ContactUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} contactId
 * @param {ContactUpdateRequest} request
 * @returns {Promise<ContactUpdateResponse>}
 */
export function updateContact(client: ChatBotKitClient, contactId: string, request: ContactUpdateRequest): Promise<ContactUpdateResponse>;
/**
 * @typedef {import('../types/api/v1.js').operations['deleteContact']['requestBody']['content']['application/json']} ContactDeleteRequestBody
 *
 * @typedef {ContactDeleteRequestBody} ContactDeleteRequest
 *
 * @typedef {import('../types/api/v1.js').operations['deleteContact']['responses']['200']['content']['application/json']} ContactDeleteResponseBody
 *
 * @typedef {ContactDeleteResponseBody} ContactDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} contactId
 * @returns {Promise<ContactDeleteResponse>}
 */
export function deleteContact(client: ChatBotKitClient, contactId: string): Promise<ContactDeleteResponse>;
/**
 * @typedef {import('../types/api/v1.js').operations['ensureContact']['requestBody']['content']['application/json']} ContactEnsureRequestBody
 *
 * @typedef {ContactEnsureRequestBody} ContactEnsureRequest
 *
 * @typedef {import('../types/api/v1.js').operations['ensureContact']['responses']['200']['content']['application/json']} ContactEnsureResponseBody
 *
 * @typedef {ContactEnsureResponseBody} ContactEnsureResponse
 *
 * @param {ChatBotKitClient} client
 * @param {ContactEnsureRequest} request
 * @returns {Promise<ContactEnsureResponse>}
 */
export function ensureContact(client: ChatBotKitClient, request: ContactEnsureRequest): Promise<ContactEnsureResponse>;
export type ChatBotKitClient = import("../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../client.js").ResponsePromise<T, U>;
export type ContactListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type ContactListResponse = import("../types/api/v1.js").operations["listContacts"]["responses"]["200"]["content"]["application/json"];
export type ContactListStreamType = import("../types/api/v1.js").operations["listContacts"]["responses"]["200"]["content"]["application/jsonl"];
export type ContactFetchResponse = import("../types/api/v1.js").operations["fetchContact"]["responses"]["200"]["content"]["application/json"];
export type ContactCreateRequestBody = import("../types/api/v1.js").operations["createContact"]["requestBody"]["content"]["application/json"];
export type ContactCreateRequest = ContactCreateRequestBody;
export type ContactCreateResponseBody = import("../types/api/v1.js").operations["createContact"]["responses"]["200"]["content"]["application/json"];
export type ContactCreateResponse = ContactCreateResponseBody;
export type ContactUpdateRequestBody = import("../types/api/v1.js").operations["updateContact"]["requestBody"]["content"]["application/json"];
export type ContactUpdateRequest = ContactUpdateRequestBody;
export type ContactUpdateResponseBody = import("../types/api/v1.js").operations["updateContact"]["responses"]["200"]["content"]["application/json"];
export type ContactUpdateResponse = ContactUpdateResponseBody;
export type ContactDeleteRequestBody = import("../types/api/v1.js").operations["deleteContact"]["requestBody"]["content"]["application/json"];
export type ContactDeleteRequest = ContactDeleteRequestBody;
export type ContactDeleteResponseBody = import("../types/api/v1.js").operations["deleteContact"]["responses"]["200"]["content"]["application/json"];
export type ContactDeleteResponse = ContactDeleteResponseBody;
export type ContactEnsureRequestBody = import("../types/api/v1.js").operations["ensureContact"]["requestBody"]["content"]["application/json"];
export type ContactEnsureRequest = ContactEnsureRequestBody;
export type ContactEnsureResponseBody = import("../types/api/v1.js").operations["ensureContact"]["responses"]["200"]["content"]["application/json"];
export type ContactEnsureResponse = ContactEnsureResponseBody;
