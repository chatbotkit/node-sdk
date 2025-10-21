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
 * @typedef {{
 *   name?: string,
 *   description?: string,
 *   fingerprint?: string,
 *   email?: string,
 *   phone?: string,
 *   nick?: string,
 *   preferences?: string,
 *   verifiedAt?: number,
 *   meta?: Record<string,any>
 * }} ContactCreateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['createContact']['requestBody']['content']['application/json']} ContactCreateRequestBody
 *
 * @typedef {import('../types/api/v1.js').operations['createContact']['responses']['200']['content']['application/json']} ContactCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {ContactCreateRequest} request
 * @returns {Promise<ContactCreateResponse>}
 */
export function createContact(client: ChatBotKitClient, request: ContactCreateRequest): Promise<ContactCreateResponse>;
/**
 * @typedef {{
 *   name?: string,
 *   description?: string,
 *   fingerprint?: string,
 *   email?: string,
 *   phone?: string,
 *   nick?: string,
 *   preferences?: string,
 *   verifiedAt?: number,
 *   meta?: Record<string,any>
 * }} ContactUpdateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['updateContact']['requestBody']['content']['application/json']} ContactUpdateRequestBody
 *
 * @typedef {import('../types/api/v1.js').operations['updateContact']['responses']['200']['content']['application/json']} ContactUpdateResponse
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
 * @typedef {import('../types/api/v1.js').operations['deleteContact']['responses']['200']['content']['application/json']} ContactDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} contactId
 * @returns {Promise<ContactDeleteResponse>}
 */
export function deleteContact(client: ChatBotKitClient, contactId: string): Promise<ContactDeleteResponse>;
/**
 * @typedef {{
 *   name?: string,
 *   description?: string,
 *   fingerprint: string,
 *   email?: string,
 *   phone?: string,
 *   nick?: string,
 *   preferences?: string,
 *   verifiedAt?: number,
 *   meta?: Record<string,any>
 * }} ContactEnsureRequest
 *
 * @typedef {import('../types/api/v1.js').operations['ensureContact']['requestBody']['content']['application/json']} ContactEnsureRequestBody
 *
 * @typedef {import('../types/api/v1.js').operations['ensureContact']['responses']['200']['content']['application/json']} ContactEnsureResponse
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
export type ContactCreateRequest = {
    name?: string;
    description?: string;
    fingerprint?: string;
    email?: string;
    phone?: string;
    nick?: string;
    preferences?: string;
    verifiedAt?: number;
    meta?: Record<string, any>;
};
export type ContactCreateRequestBody = import("../types/api/v1.js").operations["createContact"]["requestBody"]["content"]["application/json"];
export type ContactCreateResponse = import("../types/api/v1.js").operations["createContact"]["responses"]["200"]["content"]["application/json"];
export type ContactUpdateRequest = {
    name?: string;
    description?: string;
    fingerprint?: string;
    email?: string;
    phone?: string;
    nick?: string;
    preferences?: string;
    verifiedAt?: number;
    meta?: Record<string, any>;
};
export type ContactUpdateRequestBody = import("../types/api/v1.js").operations["updateContact"]["requestBody"]["content"]["application/json"];
export type ContactUpdateResponse = import("../types/api/v1.js").operations["updateContact"]["responses"]["200"]["content"]["application/json"];
export type ContactDeleteRequestBody = import("../types/api/v1.js").operations["deleteContact"]["requestBody"]["content"]["application/json"];
export type ContactDeleteResponse = import("../types/api/v1.js").operations["deleteContact"]["responses"]["200"]["content"]["application/json"];
export type ContactEnsureRequest = {
    name?: string;
    description?: string;
    fingerprint: string;
    email?: string;
    phone?: string;
    nick?: string;
    preferences?: string;
    verifiedAt?: number;
    meta?: Record<string, any>;
};
export type ContactEnsureRequestBody = import("../types/api/v1.js").operations["ensureContact"]["requestBody"]["content"]["application/json"];
export type ContactEnsureResponse = import("../types/api/v1.js").operations["ensureContact"]["responses"]["200"]["content"]["application/json"];
