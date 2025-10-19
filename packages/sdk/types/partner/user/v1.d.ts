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
 *   image?: string,
 *   email?: string,
 *   meta?: Record<string,any>
 * }} PartnerUserOptions
 *
 * @typedef {PartnerUserOptions & {
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number
 * }} PartnerUserInstance
 */
/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} PartnerUserListRequest
 *
 * @typedef {{items: PartnerUserInstance[]}} PartnerUserListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: PartnerUserInstance
 * }} PartnerUserListStreamItem
 *
 * @typedef {PartnerUserListStreamItem} PartnerUserListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {PartnerUserListRequest} [request]
 * @returns {ResponsePromise<PartnerUserListResponse,PartnerUserListStreamType>}
 */
export function listPartnerUsers(client: ChatBotKitClient, request?: PartnerUserListRequest): ResponsePromise<PartnerUserListResponse, PartnerUserListStreamType>;
/**
 * @typedef {PartnerUserInstance & {
 * }} PartnerUserFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} userId
 * @returns {ResponsePromise<PartnerUserFetchResponse,never>}
 */
export function fetchPartnerUser(client: ChatBotKitClient, userId: string): ResponsePromise<PartnerUserFetchResponse, never>;
/**
 * @typedef {PartnerUserOptions & {
 * }} PartnerUserCreateRequest
 *
 * @typedef {{
 *   id: string
 * }} PartnerUserCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {PartnerUserCreateRequest} request
 * @returns {Promise<PartnerUserCreateResponse>}
 */
export function createPartnerUser(client: ChatBotKitClient, request: PartnerUserCreateRequest): Promise<PartnerUserCreateResponse>;
/**
 * @typedef {PartnerUserOptions & {
 * }} PartnerUserUpdateRequest
 *
 * @typedef {{
 *   id: string
 * }} PartnerUserUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} userId
 * @param {PartnerUserUpdateRequest} request
 * @returns {Promise<PartnerUserUpdateResponse>}
 */
export function updatePartnerUser(client: ChatBotKitClient, userId: string, request: PartnerUserUpdateRequest): Promise<PartnerUserUpdateResponse>;
/**
 * @typedef {{
 *   id: string
 * }} PartnerUserDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} userId
 * @returns {Promise<PartnerUserDeleteResponse>}
 */
export function deletePartnerUser(client: ChatBotKitClient, userId: string): Promise<PartnerUserDeleteResponse>;
export type ChatBotKitClient = import("../../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
export type PartnerUserOptions = {
    name?: string;
    image?: string;
    email?: string;
    meta?: Record<string, any>;
};
export type PartnerUserInstance = PartnerUserOptions & {
    id: string;
    createdAt: number;
    updatedAt: number;
};
export type PartnerUserListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type PartnerUserListResponse = {
    items: PartnerUserInstance[];
};
export type PartnerUserListStreamItem = {
    type: "item";
    data: PartnerUserInstance;
};
export type PartnerUserListStreamType = PartnerUserListStreamItem;
export type PartnerUserFetchResponse = PartnerUserInstance & {};
export type PartnerUserCreateRequest = PartnerUserOptions & {};
export type PartnerUserCreateResponse = {
    id: string;
};
export type PartnerUserUpdateRequest = PartnerUserOptions & {};
export type PartnerUserUpdateResponse = {
    id: string;
};
export type PartnerUserDeleteResponse = {
    id: string;
};
