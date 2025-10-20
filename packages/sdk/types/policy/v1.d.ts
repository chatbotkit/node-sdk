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
 *   meta?: Record<string,any>,
 *   type: 'retention',
 *   config?: Record<string,any>
 * }} PolicyOptions
 *
 * @typedef {PolicyOptions & {
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number
 * }} PolicyInstance
 */
/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} PolicyListRequest
 *
 * @typedef {{items: PolicyInstance[]}} PolicyListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: PolicyInstance
 * }} PolicyListStreamItemType
 *
 * @typedef {PolicyListStreamItemType} PolicyListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {PolicyListRequest} [request]
 * @returns {ResponsePromise<PolicyListResponse,PolicyListStreamType>}
 */
export function listPolicies(client: ChatBotKitClient, request?: PolicyListRequest): ResponsePromise<PolicyListResponse, PolicyListStreamType>;
/**
 * @typedef {PolicyOptions & {
 *   type: string
 * }} PolicyFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} policyId
 * @returns {ResponsePromise<PolicyFetchResponse,never>}
 */
export function fetchPolicy(client: ChatBotKitClient, policyId: string): ResponsePromise<PolicyFetchResponse, never>;
/**
 * @typedef {PolicyOptions & {
 * }} PolicyCreateRequest
 *
 * @typedef {{
 *   id: string
 * }} PolicyCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {PolicyCreateRequest} request
 * @returns {Promise<PolicyCreateResponse>}
 */
export function createPolicy(client: ChatBotKitClient, request: PolicyCreateRequest): Promise<PolicyCreateResponse>;
/**
 * @typedef {PolicyOptions & {
 * }} PolicyUpdateRequest
 *
 * @typedef {{
 *   id: string
 * }} PolicyUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} policyId
 * @param {PolicyUpdateRequest} request
 * @returns {Promise<PolicyUpdateResponse>}
 */
export function updatePolicy(client: ChatBotKitClient, policyId: string, request: PolicyUpdateRequest): Promise<PolicyUpdateResponse>;
/**
 * @typedef {{
 *   id: string
 * }} PolicyDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} policyId
 * @returns {Promise<PolicyDeleteResponse>}
 */
export function deletePolicy(client: ChatBotKitClient, policyId: string): Promise<PolicyDeleteResponse>;
export type ChatBotKitClient = import("../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../client.js").ResponsePromise<T, U>;
export type PolicyOptions = {
    name?: string;
    description?: string;
    meta?: Record<string, any>;
    type: "retention";
    config?: Record<string, any>;
};
export type PolicyInstance = PolicyOptions & {
    id: string;
    createdAt: number;
    updatedAt: number;
};
export type PolicyListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type PolicyListResponse = {
    items: PolicyInstance[];
};
export type PolicyListStreamItemType = {
    type: "item";
    data: PolicyInstance;
};
export type PolicyListStreamType = PolicyListStreamItemType;
export type PolicyFetchResponse = PolicyOptions & {
    type: string;
};
export type PolicyCreateRequest = PolicyOptions & {};
export type PolicyCreateResponse = {
    id: string;
};
export type PolicyUpdateRequest = PolicyOptions & {};
export type PolicyUpdateResponse = {
    id: string;
};
export type PolicyDeleteResponse = {
    id: string;
};
