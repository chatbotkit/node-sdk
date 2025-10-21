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
 * }} PlatformExampleListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listPlatformExamples']['responses']['200']['content']['application/json']} PlatformExampleListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listPlatformExamples']['responses']['200']['content']['application/jsonl']} PlatformExampleListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {PlatformExampleListRequest} [request]
 * @returns {ResponsePromise<PlatformExampleListResponse,PlatformExampleListStreamType>}
 */
export function listPlatformExamples(client: ChatBotKitClient, request?: PlatformExampleListRequest): ResponsePromise<PlatformExampleListResponse, PlatformExampleListStreamType>;
/**
 * @typedef {import('../../types/api/v1.js').operations['fetchPlatformExample']['responses']['200']['content']['application/json']} PlatformExampleFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} exampleId
 * @returns {ResponsePromise<PlatformExampleFetchResponse,never>}
 */
export function fetchPlatformExample(client: ChatBotKitClient, exampleId: string): ResponsePromise<PlatformExampleFetchResponse, never>;
/**
 * @typedef {import('../../types/api/v1.js').operations['searchPlatformExamples']['requestBody']['content']['application/json']} PlatformExampleSearchRequestBody
 *
 * @typedef {PlatformExampleSearchRequestBody} PlatformExampleSearchRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['searchPlatformExamples']['responses']['200']['content']['application/json']} PlatformExampleSearchResponseBody
 *
 * @typedef {PlatformExampleSearchResponseBody} PlatformExampleSearchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {PlatformExampleSearchRequest} request
 * @returns {Promise<PlatformExampleSearchResponse>}
 */
export function searchPlatformExamples(client: ChatBotKitClient, request: PlatformExampleSearchRequest): Promise<PlatformExampleSearchResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['clonePlatformExample']['requestBody']['content']['application/json']} PlatformExampleCloneRequestBody
 *
 * @typedef {PlatformExampleCloneRequestBody} PlatformExampleCloneRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['clonePlatformExample']['responses']['200']['content']['application/json']} PlatformExampleCloneResponseBody
 *
 * @typedef {PlatformExampleCloneResponseBody} PlatformExampleCloneResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} exampleId
 * @returns {Promise<PlatformExampleCloneResponse>}
 */
export function clonePlatformExample(client: ChatBotKitClient, exampleId: string): Promise<PlatformExampleCloneResponse>;
export type ChatBotKitClient = import("../../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
export type PlatformExampleListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
};
export type PlatformExampleListResponse = import("../../types/api/v1.js").operations["listPlatformExamples"]["responses"]["200"]["content"]["application/json"];
export type PlatformExampleListStreamType = import("../../types/api/v1.js").operations["listPlatformExamples"]["responses"]["200"]["content"]["application/jsonl"];
export type PlatformExampleFetchResponse = import("../../types/api/v1.js").operations["fetchPlatformExample"]["responses"]["200"]["content"]["application/json"];
export type PlatformExampleSearchRequestBody = import("../../types/api/v1.js").operations["searchPlatformExamples"]["requestBody"]["content"]["application/json"];
export type PlatformExampleSearchRequest = PlatformExampleSearchRequestBody;
export type PlatformExampleSearchResponseBody = import("../../types/api/v1.js").operations["searchPlatformExamples"]["responses"]["200"]["content"]["application/json"];
export type PlatformExampleSearchResponse = PlatformExampleSearchResponseBody;
export type PlatformExampleCloneRequestBody = import("../../types/api/v1.js").operations["clonePlatformExample"]["requestBody"]["content"]["application/json"];
export type PlatformExampleCloneRequest = PlatformExampleCloneRequestBody;
export type PlatformExampleCloneResponseBody = import("../../types/api/v1.js").operations["clonePlatformExample"]["responses"]["200"]["content"]["application/json"];
export type PlatformExampleCloneResponse = PlatformExampleCloneResponseBody;
