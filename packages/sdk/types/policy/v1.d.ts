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
 * @typedef {import('../types/api/v1.js').operations['createPolicy']['requestBody']['content']['application/json']} PolicyCreateRequestBody
 *
 * @typedef {PolicyCreateRequestBody} PolicyCreateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['createPolicy']['responses']['200']['content']['application/json']} PolicyCreateResponseBody
 *
 * @typedef {PolicyCreateResponseBody} PolicyCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {PolicyCreateRequest} request
 * @returns {Promise<PolicyCreateResponse>}
 */
export function createPolicy(client: ChatBotKitClient, request: PolicyCreateRequest): Promise<PolicyCreateResponse>;
/**
 * @typedef {import('../types/api/v1.js').operations['updatePolicy']['requestBody']['content']['application/json']} PolicyUpdateRequestBody
 *
 * @typedef {PolicyUpdateRequestBody} PolicyUpdateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['updatePolicy']['responses']['200']['content']['application/json']} PolicyUpdateResponseBody
 *
 * @typedef {PolicyUpdateResponseBody} PolicyUpdateResponse
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
 * @typedef {PolicyDeleteRequestBody} PolicyDeleteRequest
 *
 * @typedef {import('../types/api/v1.js').operations['deletePolicy']['responses']['200']['content']['application/json']} PolicyDeleteResponseBody
 *
 * @typedef {PolicyDeleteResponseBody} PolicyDeleteResponse
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
export type PolicyCreateRequestBody = import("../types/api/v1.js").operations["createPolicy"]["requestBody"]["content"]["application/json"];
export type PolicyCreateRequest = PolicyCreateRequestBody;
export type PolicyCreateResponseBody = import("../types/api/v1.js").operations["createPolicy"]["responses"]["200"]["content"]["application/json"];
export type PolicyCreateResponse = PolicyCreateResponseBody;
export type PolicyUpdateRequestBody = import("../types/api/v1.js").operations["updatePolicy"]["requestBody"]["content"]["application/json"];
export type PolicyUpdateRequest = PolicyUpdateRequestBody;
export type PolicyUpdateResponseBody = import("../types/api/v1.js").operations["updatePolicy"]["responses"]["200"]["content"]["application/json"];
export type PolicyUpdateResponse = PolicyUpdateResponseBody;
export type PolicyDeleteRequestBody = import("../types/api/v1.js").operations["deletePolicy"]["requestBody"]["content"]["application/json"];
export type PolicyDeleteRequest = PolicyDeleteRequestBody;
export type PolicyDeleteResponseBody = import("../types/api/v1.js").operations["deletePolicy"]["responses"]["200"]["content"]["application/json"];
export type PolicyDeleteResponse = PolicyDeleteResponseBody;
