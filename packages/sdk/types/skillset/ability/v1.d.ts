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
 *   secretId?: string,
 *   name: string,
 *   description: string,
 *   instruction: string,
 *   meta?: Record<string,any>
 * }} SkillsetAbilityOptions
 *
 * @typedef {SkillsetAbilityOptions & {
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number
 * }} SkillsetAbilityInstance
 */
/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} SkillsetAbilityListRequest
 *
 * @typedef {{items: SkillsetAbilityInstance[]}} SkillsetAbilityListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: SkillsetAbilityInstance
 * }} SkillsetAbilityListStreamItem
 *
 * @typedef {SkillsetAbilityListStreamItem} SkillsetAbilityListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} skillsetId
 * @param {SkillsetAbilityListRequest} [request]
 * @returns {ResponsePromise<SkillsetAbilityListResponse,SkillsetAbilityListStreamType>}
 */
export function listSkillsetAbilities(client: ChatBotKitClient, skillsetId: string, request?: SkillsetAbilityListRequest): ResponsePromise<SkillsetAbilityListResponse, SkillsetAbilityListStreamType>;
/**
 * @typedef {SkillsetAbilityInstance & {
 * }} SkillsetAbilityFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} skillsetId
 * @param {string} abilityId
 * @returns {ResponsePromise<SkillsetAbilityFetchResponse,never>}
 */
export function fetchSkillsetAbility(client: ChatBotKitClient, skillsetId: string, abilityId: string): ResponsePromise<SkillsetAbilityFetchResponse, never>;
/**
 * @typedef {SkillsetAbilityOptions & {
 * }} SkillsetAbilityCreateRequest
 *
 * @typedef {{
 *   id: string
 * }} SkillsetAbilityCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} skillsetId
 * @param {SkillsetAbilityCreateRequest} request
 * @returns {Promise<SkillsetAbilityCreateResponse>}
 */
export function createSkillsetAbility(client: ChatBotKitClient, skillsetId: string, request: SkillsetAbilityCreateRequest): Promise<SkillsetAbilityCreateResponse>;
/**
 * @typedef {SkillsetAbilityOptions & {
 * }} SkillsetAbilityUpdateRequest
 *
 * @typedef {{
 *   id: string
 * }} SkillsetAbilityUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} skillsetId
 * @param {string} abilityId
 * @param {SkillsetAbilityUpdateRequest} request
 * @returns {Promise<SkillsetAbilityUpdateResponse>}
 */
export function updateSkillsetAbility(client: ChatBotKitClient, skillsetId: string, abilityId: string, request: SkillsetAbilityUpdateRequest): Promise<SkillsetAbilityUpdateResponse>;
/**
 * @typedef {{
 *   id: string
 * }} SkillsetAbilityDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} skillsetId
 * @param {string} abilityId
 * @returns {Promise<SkillsetAbilityDeleteResponse>}
 */
export function deleteSkillsetAbility(client: ChatBotKitClient, skillsetId: string, abilityId: string): Promise<SkillsetAbilityDeleteResponse>;
export type ChatBotKitClient = import("../../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
export type SkillsetAbilityOptions = {
    secretId?: string;
    name: string;
    description: string;
    instruction: string;
    meta?: Record<string, any>;
};
export type SkillsetAbilityInstance = SkillsetAbilityOptions & {
    id: string;
    createdAt: number;
    updatedAt: number;
};
export type SkillsetAbilityListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type SkillsetAbilityListResponse = {
    items: SkillsetAbilityInstance[];
};
export type SkillsetAbilityListStreamItem = {
    type: "item";
    data: SkillsetAbilityInstance;
};
export type SkillsetAbilityListStreamType = SkillsetAbilityListStreamItem;
export type SkillsetAbilityFetchResponse = SkillsetAbilityInstance & {};
export type SkillsetAbilityCreateRequest = SkillsetAbilityOptions & {};
export type SkillsetAbilityCreateResponse = {
    id: string;
};
export type SkillsetAbilityUpdateRequest = SkillsetAbilityOptions & {};
export type SkillsetAbilityUpdateResponse = {
    id: string;
};
export type SkillsetAbilityDeleteResponse = {
    id: string;
};
