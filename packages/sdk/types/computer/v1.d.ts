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
 * }} ComputerListRequest
 *
 * @typedef {import('../types/api/v1.js').operations['listComputers']['responses']['200']['content']['application/json']} ComputerListResponse
 *
 * @typedef {import('../types/api/v1.js').operations['listComputers']['responses']['200']['content']['application/jsonl']} ComputerListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {ComputerListRequest} [request]
 * @returns {ResponsePromise<ComputerListResponse,ComputerListStreamType>}
 */
export function listComputers(client: ChatBotKitClient, request?: ComputerListRequest): ResponsePromise<ComputerListResponse, ComputerListStreamType>;
/**
 * @typedef {import('../types/api/v1.js').operations['fetchComputer']['responses']['200']['content']['application/json']} ComputerFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} computerId
 * @returns {ResponsePromise<ComputerFetchResponse,never>}
 */
export function fetchComputer(client: ChatBotKitClient, computerId: string): ResponsePromise<ComputerFetchResponse, never>;
/**
 * @typedef {import('../types/api/v1.js').operations['createComputer']['requestBody']['content']['application/json']} ComputerCreateRequestBody
 *
 * @typedef {ComputerCreateRequestBody} ComputerCreateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['createComputer']['responses']['200']['content']['application/json']} ComputerCreateResponseBody
 *
 * @typedef {ComputerCreateResponseBody} ComputerCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {ComputerCreateRequest} request
 * @returns {Promise<ComputerCreateResponse>}
 */
export function createComputer(client: ChatBotKitClient, request: ComputerCreateRequest): Promise<ComputerCreateResponse>;
/**
 * @typedef {import('../types/api/v1.js').operations['updateComputer']['requestBody']['content']['application/json']} ComputerUpdateRequestBody
 *
 * @typedef {ComputerUpdateRequestBody} ComputerUpdateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['updateComputer']['responses']['200']['content']['application/json']} ComputerUpdateResponseBody
 *
 * @typedef {ComputerUpdateResponseBody} ComputerUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} computerId
 * @param {ComputerUpdateRequest} request
 * @returns {Promise<ComputerUpdateResponse>}
 */
export function updateComputer(client: ChatBotKitClient, computerId: string, request: ComputerUpdateRequest): Promise<ComputerUpdateResponse>;
/**
 * @typedef {{}} ComputerDeleteRequest
 *
 * @typedef {{ id: string }} ComputerDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} computerId
 * @param {ComputerDeleteRequest} [request]
 * @returns {Promise<ComputerDeleteResponse>}
 */
export function deleteComputer(client: ChatBotKitClient, computerId: string, request?: ComputerDeleteRequest): Promise<ComputerDeleteResponse>;
/**
 * @typedef {import('../types/api/v1.js').operations['startComputer']['responses']['200']['content']['application/json']} ComputerStartResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} computerId
 * @returns {Promise<ComputerStartResponse>}
 */
export function startComputer(client: ChatBotKitClient, computerId: string): Promise<ComputerStartResponse>;
/**
 * @typedef {import('../types/api/v1.js').operations['stopComputer']['responses']['200']['content']['application/json']} ComputerStopResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} computerId
 * @returns {Promise<ComputerStopResponse>}
 */
export function stopComputer(client: ChatBotKitClient, computerId: string): Promise<ComputerStopResponse>;
/**
 * @typedef {import('../types/api/v1.js').operations['restartComputer']['responses']['200']['content']['application/json']} ComputerRestartResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} computerId
 * @returns {Promise<ComputerRestartResponse>}
 */
export function restartComputer(client: ChatBotKitClient, computerId: string): Promise<ComputerRestartResponse>;
/**
 * @typedef {import('../types/api/v1.js').operations['execComputer']['requestBody']['content']['application/json']} ComputerExecRequestBody
 *
 * @typedef {ComputerExecRequestBody} ComputerExecRequest
 *
 * @typedef {import('../types/api/v1.js').operations['execComputer']['responses']['200']['content']['application/json']} ComputerExecResponseBody
 *
 * @typedef {ComputerExecResponseBody} ComputerExecResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} computerId
 * @param {ComputerExecRequest} request
 * @returns {Promise<ComputerExecResponse>}
 */
export function execComputer(client: ChatBotKitClient, computerId: string, request: ComputerExecRequest): Promise<ComputerExecResponse>;
export type ChatBotKitClient = import("../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../client.js").ResponsePromise<T, U>;
export type ComputerListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
    contactId?: string;
};
export type ComputerListResponse = import("../types/api/v1.js").operations["listComputers"]["responses"]["200"]["content"]["application/json"];
export type ComputerListStreamType = import("../types/api/v1.js").operations["listComputers"]["responses"]["200"]["content"]["application/jsonl"];
export type ComputerFetchResponse = import("../types/api/v1.js").operations["fetchComputer"]["responses"]["200"]["content"]["application/json"];
export type ComputerCreateRequestBody = import("../types/api/v1.js").operations["createComputer"]["requestBody"]["content"]["application/json"];
export type ComputerCreateRequest = ComputerCreateRequestBody;
export type ComputerCreateResponseBody = import("../types/api/v1.js").operations["createComputer"]["responses"]["200"]["content"]["application/json"];
export type ComputerCreateResponse = ComputerCreateResponseBody;
export type ComputerUpdateRequestBody = import("../types/api/v1.js").operations["updateComputer"]["requestBody"]["content"]["application/json"];
export type ComputerUpdateRequest = ComputerUpdateRequestBody;
export type ComputerUpdateResponseBody = import("../types/api/v1.js").operations["updateComputer"]["responses"]["200"]["content"]["application/json"];
export type ComputerUpdateResponse = ComputerUpdateResponseBody;
export type ComputerDeleteRequest = {};
export type ComputerDeleteResponse = {
    id: string;
};
export type ComputerStartResponse = import("../types/api/v1.js").operations["startComputer"]["responses"]["200"]["content"]["application/json"];
export type ComputerStopResponse = import("../types/api/v1.js").operations["stopComputer"]["responses"]["200"]["content"]["application/json"];
export type ComputerRestartResponse = import("../types/api/v1.js").operations["restartComputer"]["responses"]["200"]["content"]["application/json"];
export type ComputerExecRequestBody = import("../types/api/v1.js").operations["execComputer"]["requestBody"]["content"]["application/json"];
export type ComputerExecRequest = ComputerExecRequestBody;
export type ComputerExecResponseBody = import("../types/api/v1.js").operations["execComputer"]["responses"]["200"]["content"]["application/json"];
export type ComputerExecResponse = ComputerExecResponseBody;
