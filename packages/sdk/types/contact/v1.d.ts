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
 *   fingerprint?: string,
 *   email?: string,
 *   phone?: string,
 *   nick?: string,
 *   verifiedAt?: number,
 *   meta?: Record<string,any>
 * }} ContactOptions
 *
 * @typedef {ContactOptions & {
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number
 * }} ContactInstance
 */
/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} ContactListRequest
 *
 * @typedef {{items: ContactInstance[]}} ContactListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: ContactInstance
 * }} ContactListStreamItemType
 *
 * @typedef {ContactListStreamItemType} ContactListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {ContactListRequest} [request]
 * @returns {ResponsePromise<ContactListResponse,ContactListStreamType>}
 */
export function listContacts(client: ChatBotKitClient, request?: ContactListRequest): ResponsePromise<ContactListResponse, ContactListStreamType>;
/**
 * @typedef {ContactInstance & {
 * }} ContactFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} contactId
 * @returns {ResponsePromise<ContactFetchResponse,never>}
 */
export function fetchContact(client: ChatBotKitClient, contactId: string): ResponsePromise<ContactFetchResponse, never>;
/**
 * @typedef {ContactOptions & {
 * }} ContactCreateRequest
 *
 * @typedef {{
 *   id: string
 * }} ContactCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {ContactCreateRequest} request
 * @returns {Promise<ContactCreateResponse>}
 */
export function createContact(client: ChatBotKitClient, request: ContactCreateRequest): Promise<ContactCreateResponse>;
/**
 * @typedef {ContactOptions & {
 * }} ContactUpdateRequest
 *
 * @typedef {{
 *   id: string
 * }} ContactUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} contactId
 * @param {ContactUpdateRequest} request
 * @returns {Promise<ContactUpdateResponse>}
 */
export function updateContact(client: ChatBotKitClient, contactId: string, request: ContactUpdateRequest): Promise<ContactUpdateResponse>;
/**
 * @typedef {{
 *   id: string
 * }} ContactDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} contactId
 * @returns {Promise<ContactDeleteResponse>}
 */
export function deleteContact(client: ChatBotKitClient, contactId: string): Promise<ContactDeleteResponse>;
/**
 * @typedef {ContactOptions & {
 *   fingerprint: string
 * }} ContactEnsureRequest
 *
 * @typedef {{
 *   id: string
 * }} ContactEnsureResponse
 *
 * @param {ChatBotKitClient} client
 * @param {ContactEnsureRequest} request
 * @returns {Promise<ContactEnsureResponse>}
 */
export function ensureContact(client: ChatBotKitClient, request: ContactEnsureRequest): Promise<ContactEnsureResponse>;
export type ChatBotKitClient = import("../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../client.js").ResponsePromise<T, U>;
export type ContactOptions = {
    name?: string;
    description?: string;
    fingerprint?: string;
    email?: string;
    phone?: string;
    nick?: string;
    verifiedAt?: number;
    meta?: Record<string, any>;
};
export type ContactInstance = ContactOptions & {
    id: string;
    createdAt: number;
    updatedAt: number;
};
export type ContactListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type ContactListResponse = {
    items: ContactInstance[];
};
export type ContactListStreamItemType = {
    type: "item";
    data: ContactInstance;
};
export type ContactListStreamType = ContactListStreamItemType;
export type ContactFetchResponse = ContactInstance & {};
export type ContactCreateRequest = ContactOptions & {};
export type ContactCreateResponse = {
    id: string;
};
export type ContactUpdateRequest = ContactOptions & {};
export type ContactUpdateResponse = {
    id: string;
};
export type ContactDeleteResponse = {
    id: string;
};
export type ContactEnsureRequest = ContactOptions & {
    fingerprint: string;
};
export type ContactEnsureResponse = {
    id: string;
};
