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
 *   meta?: Record<string,any>
 * }} BlueprintOptions
 *
 * @typedef {BlueprintOptions & {
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number
 * }} BlueprintInstance
 */
/**
 * @typedef {{cursor?: string, order?: 'desc'|'asc', take?: number, meta?: Record<string,string>}} BlueprintListRequest
 *
 * @typedef {{items: BlueprintInstance[]}} BlueprintListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: BlueprintInstance
 * }} BlueprintListStreamItemType
 *
 * @typedef {BlueprintListStreamItemType} BlueprintListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {BlueprintListRequest} [request]
 * @returns {ResponsePromise<BlueprintListResponse,BlueprintListStreamType>}
 */
export function listBlueprints(client: ChatBotKitClient, request?: BlueprintListRequest | undefined): ResponsePromise<BlueprintListResponse, BlueprintListStreamType>;
/**
 * @typedef {BlueprintInstance & {
 * }} BlueprintFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} blueprintId
 * @returns {Promise<BlueprintFetchResponse>}
 */
export function fetchBlueprint(client: ChatBotKitClient, blueprintId: string): Promise<BlueprintFetchResponse>;
/**
 * @typedef {BlueprintOptions & {
 *   model?: import('../model/v1.js').Model,
 * }} BlueprintCreateRequest
 *
 * @typedef {{
 *   id: string
 * }} BlueprintCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {BlueprintCreateRequest} request
 * @returns {Promise<BlueprintCreateResponse>}
 */
export function createBlueprint(client: ChatBotKitClient, request: BlueprintCreateRequest): Promise<BlueprintCreateResponse>;
/**
 * @typedef {BlueprintOptions & {
 * }} BlueprintUpdateRequest
 *
 * @typedef {{
 *   id: string
 * }} BlueprintUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} blueprintId
 * @param {BlueprintUpdateRequest} request
 * @returns {Promise<BlueprintUpdateResponse>}
 */
export function updateBlueprint(client: ChatBotKitClient, blueprintId: string, request: BlueprintUpdateRequest): Promise<BlueprintUpdateResponse>;
/**
 * @typedef {{
 *   id: string
 * }} BlueprintDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} blueprintId
 * @returns {Promise<BlueprintDeleteResponse>}
 */
export function deleteBlueprint(client: ChatBotKitClient, blueprintId: string): Promise<BlueprintDeleteResponse>;
/**
 * @typedef {{
 *   id: string
 * }} BlueprintCloneResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} blueprintId
 * @returns {Promise<BlueprintCloneResponse>}
 */
export function cloneBlueprint(client: ChatBotKitClient, blueprintId: string): Promise<BlueprintCloneResponse>;
export type ChatBotKitClient = import('../client.js').ChatBotKitClient;
export type ResponsePromise<T, U> = import('../client.js').ResponsePromise<T, U>;
export type BlueprintOptions = {
    name?: string;
    description?: string;
    meta?: Record<string, any>;
};
export type BlueprintInstance = BlueprintOptions & {
    id: string;
    createdAt: number;
    updatedAt: number;
};
export type BlueprintListRequest = {
    cursor?: string;
    order?: 'desc' | 'asc';
    take?: number;
    meta?: Record<string, string>;
};
export type BlueprintListResponse = {
    items: BlueprintInstance[];
};
export type BlueprintListStreamItemType = {
    type: 'item';
    data: BlueprintInstance;
};
export type BlueprintListStreamType = BlueprintListStreamItemType;
export type BlueprintFetchResponse = BlueprintInstance & {};
export type BlueprintCreateRequest = BlueprintOptions & {
    model?: import('../model/v1.js').Model;
};
export type BlueprintCreateResponse = {
    id: string;
};
export type BlueprintUpdateRequest = BlueprintOptions & {};
export type BlueprintUpdateResponse = {
    id: string;
};
export type BlueprintDeleteResponse = {
    id: string;
};
export type BlueprintCloneResponse = {
    id: string;
};
