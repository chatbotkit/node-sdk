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
 * }} PlatformTutorialListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listPlatformTutorials']['responses']['200']['content']['application/json']} PlatformTutorialListResponse
 *
 * @typedef {PlatformTutorialListResponse['items'][number]} PlatformTutorialListItem
 *
 * @typedef {import('../../types/api/v1.js').operations['listPlatformTutorials']['responses']['200']['content']['application/jsonl']} PlatformTutorialListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {PlatformTutorialListRequest} [request]
 * @returns {ResponsePromise<PlatformTutorialListResponse,PlatformTutorialListStreamType>}
 */
export function listPlatformTutorials(client: ChatBotKitClient, request?: PlatformTutorialListRequest): ResponsePromise<PlatformTutorialListResponse, PlatformTutorialListStreamType>;
/**
 * @typedef {import('../../types/api/v1.js').operations['searchPlatformTutorials']['requestBody']['content']['application/json']} PlatformTutorialSearchRequestBody
 *
 * @typedef {PlatformTutorialSearchRequestBody} PlatformTutorialSearchRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['searchPlatformTutorials']['responses']['200']['content']['application/json']} PlatformTutorialSearchResponseBody
 *
 * @typedef {PlatformTutorialSearchResponseBody} PlatformTutorialSearchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {PlatformTutorialSearchRequest} request
 * @returns {Promise<PlatformTutorialSearchResponse>}
 */
export function searchPlatformTutorials(client: ChatBotKitClient, request: PlatformTutorialSearchRequest): Promise<PlatformTutorialSearchResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['fetchPlatformTutorial']['responses']['200']['content']['application/json']} PlatformTutorialFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} tutorialId
 * @returns {ResponsePromise<PlatformTutorialFetchResponse,never>}
 */
export function fetchPlatformTutorial(client: ChatBotKitClient, tutorialId: string): ResponsePromise<PlatformTutorialFetchResponse, never>;
export type ChatBotKitClient = import("../../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
export type PlatformTutorialListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type PlatformTutorialListResponse = import("../../types/api/v1.js").operations["listPlatformTutorials"]["responses"]["200"]["content"]["application/json"];
export type PlatformTutorialListItem = PlatformTutorialListResponse["items"][number];
export type PlatformTutorialListStreamType = import("../../types/api/v1.js").operations["listPlatformTutorials"]["responses"]["200"]["content"]["application/jsonl"];
export type PlatformTutorialSearchRequestBody = import("../../types/api/v1.js").operations["searchPlatformTutorials"]["requestBody"]["content"]["application/json"];
export type PlatformTutorialSearchRequest = PlatformTutorialSearchRequestBody;
export type PlatformTutorialSearchResponseBody = import("../../types/api/v1.js").operations["searchPlatformTutorials"]["responses"]["200"]["content"]["application/json"];
export type PlatformTutorialSearchResponse = PlatformTutorialSearchResponseBody;
export type PlatformTutorialFetchResponse = import("../../types/api/v1.js").operations["fetchPlatformTutorial"]["responses"]["200"]["content"]["application/json"];
