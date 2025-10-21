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
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} SkillsetAbilityListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listSkillsetAbilities']['responses']['200']['content']['application/json']} SkillsetAbilityListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listSkillsetAbilities']['responses']['200']['content']['application/jsonl']} SkillsetAbilityListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} skillsetId
 * @param {SkillsetAbilityListRequest} [request]
 * @returns {ResponsePromise<SkillsetAbilityListResponse,SkillsetAbilityListStreamType>}
 */
export function listSkillsetAbilities(client: ChatBotKitClient, skillsetId: string, request?: SkillsetAbilityListRequest): ResponsePromise<SkillsetAbilityListResponse, SkillsetAbilityListStreamType>;
/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} SkillsetAbilityExportRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['exportSkillsetAbilities']['responses']['200']['content']['application/json']} SkillsetAbilityExportResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['exportSkillsetAbilities']['responses']['200']['content']['application/jsonl']} SkillsetAbilityExportStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} skillsetId
 * @param {SkillsetAbilityExportRequest} [request]
 * @returns {ResponsePromise<SkillsetAbilityExportResponse,SkillsetAbilityExportStreamType>}
 */
export function exportSkillsetAbilities(client: ChatBotKitClient, skillsetId: string, request?: SkillsetAbilityExportRequest): ResponsePromise<SkillsetAbilityExportResponse, SkillsetAbilityExportStreamType>;
/**
 * @typedef {import('../../types/api/v1.js').operations['fetchSkillsetAbility']['responses']['200']['content']['application/json']} SkillsetAbilityFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} skillsetId
 * @param {string} abilityId
 * @returns {ResponsePromise<SkillsetAbilityFetchResponse,never>}
 */
export function fetchSkillsetAbility(client: ChatBotKitClient, skillsetId: string, abilityId: string): ResponsePromise<SkillsetAbilityFetchResponse, never>;
/**
 * @typedef {import('../../types/api/v1.js').operations['createSkillsetAbility']['requestBody']['content']['application/json']} SkillsetAbilityCreateRequestBody
 *
 * @typedef {SkillsetAbilityCreateRequestBody} SkillsetAbilityCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createSkillsetAbility']['responses']['200']['content']['application/json']} SkillsetAbilityCreateResponseBody
 *
 * @typedef {SkillsetAbilityCreateResponseBody} SkillsetAbilityCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} skillsetId
 * @param {SkillsetAbilityCreateRequest} request
 * @returns {Promise<SkillsetAbilityCreateResponse>}
 */
export function createSkillsetAbility(client: ChatBotKitClient, skillsetId: string, request: SkillsetAbilityCreateRequest): Promise<SkillsetAbilityCreateResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['updateSkillsetAbility']['requestBody']['content']['application/json']} SkillsetAbilityUpdateRequestBody
 *
 * @typedef {SkillsetAbilityUpdateRequestBody} SkillsetAbilityUpdateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['updateSkillsetAbility']['responses']['200']['content']['application/json']} SkillsetAbilityUpdateResponseBody
 *
 * @typedef {SkillsetAbilityUpdateResponseBody} SkillsetAbilityUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} skillsetId
 * @param {string} abilityId
 * @param {SkillsetAbilityUpdateRequest} request
 * @returns {Promise<SkillsetAbilityUpdateResponse>}
 */
export function updateSkillsetAbility(client: ChatBotKitClient, skillsetId: string, abilityId: string, request: SkillsetAbilityUpdateRequest): Promise<SkillsetAbilityUpdateResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['deleteSkillsetAbility']['requestBody']['content']['application/json']} SkillsetAbilityDeleteRequestBody
 *
 * @typedef {SkillsetAbilityDeleteRequestBody} SkillsetAbilityDeleteRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['deleteSkillsetAbility']['responses']['200']['content']['application/json']} SkillsetAbilityDeleteResponseBody
 *
 * @typedef {SkillsetAbilityDeleteResponseBody} SkillsetAbilityDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} skillsetId
 * @param {string} abilityId
 * @returns {Promise<SkillsetAbilityDeleteResponse>}
 */
export function deleteSkillsetAbility(client: ChatBotKitClient, skillsetId: string, abilityId: string): Promise<SkillsetAbilityDeleteResponse>;
export type ChatBotKitClient = import("../../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
export type SkillsetAbilityListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type SkillsetAbilityListResponse = import("../../types/api/v1.js").operations["listSkillsetAbilities"]["responses"]["200"]["content"]["application/json"];
export type SkillsetAbilityListStreamType = import("../../types/api/v1.js").operations["listSkillsetAbilities"]["responses"]["200"]["content"]["application/jsonl"];
export type SkillsetAbilityExportRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type SkillsetAbilityExportResponse = import("../../types/api/v1.js").operations["exportSkillsetAbilities"]["responses"]["200"]["content"]["application/json"];
export type SkillsetAbilityExportStreamType = import("../../types/api/v1.js").operations["exportSkillsetAbilities"]["responses"]["200"]["content"]["application/jsonl"];
export type SkillsetAbilityFetchResponse = import("../../types/api/v1.js").operations["fetchSkillsetAbility"]["responses"]["200"]["content"]["application/json"];
export type SkillsetAbilityCreateRequestBody = import("../../types/api/v1.js").operations["createSkillsetAbility"]["requestBody"]["content"]["application/json"];
export type SkillsetAbilityCreateRequest = SkillsetAbilityCreateRequestBody;
export type SkillsetAbilityCreateResponseBody = import("../../types/api/v1.js").operations["createSkillsetAbility"]["responses"]["200"]["content"]["application/json"];
export type SkillsetAbilityCreateResponse = SkillsetAbilityCreateResponseBody;
export type SkillsetAbilityUpdateRequestBody = import("../../types/api/v1.js").operations["updateSkillsetAbility"]["requestBody"]["content"]["application/json"];
export type SkillsetAbilityUpdateRequest = SkillsetAbilityUpdateRequestBody;
export type SkillsetAbilityUpdateResponseBody = import("../../types/api/v1.js").operations["updateSkillsetAbility"]["responses"]["200"]["content"]["application/json"];
export type SkillsetAbilityUpdateResponse = SkillsetAbilityUpdateResponseBody;
export type SkillsetAbilityDeleteRequestBody = import("../../types/api/v1.js").operations["deleteSkillsetAbility"]["requestBody"]["content"]["application/json"];
export type SkillsetAbilityDeleteRequest = SkillsetAbilityDeleteRequestBody;
export type SkillsetAbilityDeleteResponseBody = import("../../types/api/v1.js").operations["deleteSkillsetAbility"]["responses"]["200"]["content"]["application/json"];
export type SkillsetAbilityDeleteResponse = SkillsetAbilityDeleteResponseBody;
