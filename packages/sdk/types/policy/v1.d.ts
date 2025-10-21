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
 * }} PolicyListRequest
 *
 * @typedef {import('../types/api/v1.js').operations['listPolicies']['responses']['200']['content']['application/json']} PolicyListResponse
 *
 * @typedef {import('../types/api/v1.js').operations['listPolicies']['responses']['200']['content']['application/jsonl']} PolicyListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {PolicyListRequest} [request]
 * @returns {ResponsePromise<PolicyListResponse,PolicyListStreamType>}
 */
export function listPolicies(client: ChatBotKitClient, request?: PolicyListRequest): ResponsePromise<PolicyListResponse, PolicyListStreamType>;
/**
 * @typedef {import('../types/api/v1.js').operations['fetchPolicy']['responses']['200']['content']['application/json']} PolicyFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} policyId
 * @returns {ResponsePromise<PolicyFetchResponse,never>}
 */
export function fetchPolicy(client: ChatBotKitClient, policyId: string): ResponsePromise<PolicyFetchResponse, never>;
/**
 * @typedef {{
 *   name?: string,
 *   description?: string,
 *   meta?: Record<string,any>,
 *   type: 'retention',
 *   config?: Record<string,any>
 * }} PolicyCreateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['createPolicy']['requestBody']['content']['application/json']} PolicyCreateRequestBody
 *
 * @typedef {import('../types/api/v1.js').operations['createPolicy']['responses']['200']['content']['application/json']} PolicyCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {PolicyCreateRequest} request
 * @returns {Promise<PolicyCreateResponse>}
 */
export function createPolicy(client: ChatBotKitClient, request: PolicyCreateRequest): Promise<PolicyCreateResponse>;
/**
 * @typedef {{
 *   name?: string,
 *   description?: string,
 *   meta?: Record<string,any>,
 *   type?: 'retention',
 *   config?: Record<string,any>
 * }} PolicyUpdateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['updatePolicy']['requestBody']['content']['application/json']} PolicyUpdateRequestBody
 *
 * @typedef {import('../types/api/v1.js').operations['updatePolicy']['responses']['200']['content']['application/json']} PolicyUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} policyId
 * @param {PolicyUpdateRequest} request
 * @returns {Promise<PolicyUpdateResponse>}
 */
export function updatePolicy(client: ChatBotKitClient, policyId: string, request: PolicyUpdateRequest): Promise<PolicyUpdateResponse>;
/**
 * @typedef {import('../types/api/v1.js').operations['deletePolicy']['requestBody']['content']['application/json']} PolicyDeleteRequestBody
 *
 * @typedef {import('../types/api/v1.js').operations['deletePolicy']['responses']['200']['content']['application/json']} PolicyDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} policyId
 * @returns {Promise<PolicyDeleteResponse>}
 */
export function deletePolicy(client: ChatBotKitClient, policyId: string): Promise<PolicyDeleteResponse>;
export type ChatBotKitClient = import("../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../client.js").ResponsePromise<T, U>;
export type PolicyListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type PolicyListResponse = import("../types/api/v1.js").operations["listPolicies"]["responses"]["200"]["content"]["application/json"];
export type PolicyListStreamType = import("../types/api/v1.js").operations["listPolicies"]["responses"]["200"]["content"]["application/jsonl"];
export type PolicyFetchResponse = import("../types/api/v1.js").operations["fetchPolicy"]["responses"]["200"]["content"]["application/json"];
export type PolicyCreateRequest = {
    name?: string;
    description?: string;
    meta?: Record<string, any>;
    type: "retention";
    config?: Record<string, any>;
};
export type PolicyCreateRequestBody = import("../types/api/v1.js").operations["createPolicy"]["requestBody"]["content"]["application/json"];
export type PolicyCreateResponse = import("../types/api/v1.js").operations["createPolicy"]["responses"]["200"]["content"]["application/json"];
export type PolicyUpdateRequest = {
    name?: string;
    description?: string;
    meta?: Record<string, any>;
    type?: "retention";
    config?: Record<string, any>;
};
export type PolicyUpdateRequestBody = import("../types/api/v1.js").operations["updatePolicy"]["requestBody"]["content"]["application/json"];
export type PolicyUpdateResponse = import("../types/api/v1.js").operations["updatePolicy"]["responses"]["200"]["content"]["application/json"];
export type PolicyDeleteRequestBody = import("../types/api/v1.js").operations["deletePolicy"]["requestBody"]["content"]["application/json"];
export type PolicyDeleteResponse = import("../types/api/v1.js").operations["deletePolicy"]["responses"]["200"]["content"]["application/json"];
