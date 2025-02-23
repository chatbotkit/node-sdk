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
 *   visibility?: 'private'|'protected'|'public'
 *   meta?: Record<string,any>
 * }} SkillsetOptions
 *
 * @typedef {SkillsetOptions & {
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number
 * }} SkillsetInstance
 */
/**
 * @typedef {{cursor?: string, order?: 'desc'|'asc', take?: number, meta?: Record<string,string>}} SkillsetListRequest
 *
 * @typedef {{items: SkillsetInstance[]}} SkillsetListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: SkillsetInstance
 * }} SkillsetListStreamItemType
 *
 * @typedef {SkillsetListStreamItemType} SkillsetListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {SkillsetListRequest} [request]
 * @returns {ResponsePromise<SkillsetListResponse,SkillsetListStreamType>}
 */
export function listSkillsets(client: ChatBotKitClient, request?: SkillsetListRequest | undefined): ResponsePromise<SkillsetListResponse, SkillsetListStreamType>;
/**
 * @typedef {SkillsetInstance & {
 * }} SkillsetFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} skillsetId
 * @returns {ResponsePromise<SkillsetFetchResponse,never>}
 */
export function fetchSkillset(client: ChatBotKitClient, skillsetId: string): ResponsePromise<SkillsetFetchResponse, never>;
/**
 * @typedef {SkillsetOptions & {
 * }} SkillsetCreateRequest
 *
 * @typedef {{
 *   id: string
 * }} SkillsetCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {SkillsetCreateRequest} request
 * @returns {Promise<SkillsetCreateResponse>}
 */
export function createSkillset(client: ChatBotKitClient, request: SkillsetCreateRequest): Promise<SkillsetCreateResponse>;
/**
 * @typedef {SkillsetOptions & {
 * }} SkillsetUpdateRequest
 *
 * @typedef {{
 *   id: string
 * }} SkillsetUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} skillsetId
 * @param {SkillsetUpdateRequest} request
 * @returns {Promise<SkillsetUpdateResponse>}
 */
export function updateSkillset(client: ChatBotKitClient, skillsetId: string, request: SkillsetUpdateRequest): Promise<SkillsetUpdateResponse>;
/**
 * @typedef {{
 *   id: string
 * }} SkillsetDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} skillsetId
 * @returns {Promise<SkillsetDeleteResponse>}
 */
export function deleteSkillset(client: ChatBotKitClient, skillsetId: string): Promise<SkillsetDeleteResponse>;
export type ChatBotKitClient = import('../client.js').ChatBotKitClient;
export type ResponsePromise<T, U> = import('../client.js').ResponsePromise<T, U>;
export type SkillsetOptions = {
    name?: string;
    description?: string;
    visibility?: 'private' | 'protected' | 'public';
    meta?: Record<string, any>;
};
export type SkillsetInstance = SkillsetOptions & {
    id: string;
    createdAt: number;
    updatedAt: number;
};
export type SkillsetListRequest = {
    cursor?: string;
    order?: 'desc' | 'asc';
    take?: number;
    meta?: Record<string, string>;
};
export type SkillsetListResponse = {
    items: SkillsetInstance[];
};
export type SkillsetListStreamItemType = {
    type: 'item';
    data: SkillsetInstance;
};
export type SkillsetListStreamType = SkillsetListStreamItemType;
export type SkillsetFetchResponse = SkillsetInstance & {};
export type SkillsetCreateRequest = SkillsetOptions & {};
export type SkillsetCreateResponse = {
    id: string;
};
export type SkillsetUpdateRequest = SkillsetOptions & {};
export type SkillsetUpdateResponse = {
    id: string;
};
export type SkillsetDeleteResponse = {
    id: string;
};
