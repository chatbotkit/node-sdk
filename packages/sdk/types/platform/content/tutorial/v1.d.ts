/**
 * @typedef {import('../../../client.js').ChatBotKitClient} ChatBotKitClient
 */
/**
 * @template T
 * @template U
 * @typedef {import('../../../client.js').ResponsePromise<T,U>} ResponsePromise
 */
/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} PlatformContentTutorialListRequest
 *
 * @typedef {import('../../../types/api/v1.js').operations['listPlatformContentTutorials']['responses']['200']['content']['application/json']} PlatformContentTutorialListResponse
 *
 * @typedef {PlatformContentTutorialListResponse['items'][number]} PlatformContentTutorialListItem
 *
 * @typedef {import('../../../types/api/v1.js').operations['listPlatformContentTutorials']['responses']['200']['content']['application/jsonl']} PlatformContentTutorialListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {PlatformContentTutorialListRequest} [request]
 * @returns {ResponsePromise<PlatformContentTutorialListResponse,PlatformContentTutorialListStreamType>}
 */
export function listPlatformContentTutorials(client: ChatBotKitClient, request?: PlatformContentTutorialListRequest): ResponsePromise<PlatformContentTutorialListResponse, PlatformContentTutorialListStreamType>;
/**
 * @typedef {import('../../../types/api/v1.js').operations['searchPlatformContentTutorials']['requestBody']['content']['application/json']} PlatformContentTutorialSearchRequestBody
 *
 * @typedef {PlatformContentTutorialSearchRequestBody} PlatformContentTutorialSearchRequest
 *
 * @typedef {import('../../../types/api/v1.js').operations['searchPlatformContentTutorials']['responses']['200']['content']['application/json']} PlatformContentTutorialSearchResponseBody
 *
 * @typedef {PlatformContentTutorialSearchResponseBody} PlatformContentTutorialSearchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {PlatformContentTutorialSearchRequest} request
 * @returns {Promise<PlatformContentTutorialSearchResponse>}
 */
export function searchPlatformContentTutorials(client: ChatBotKitClient, request: PlatformContentTutorialSearchRequest): Promise<PlatformContentTutorialSearchResponse>;
/**
 * @typedef {import('../../../types/api/v1.js').operations['fetchPlatformContentTutorial']['responses']['200']['content']['application/json']} PlatformContentTutorialFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} tutorialId
 * @returns {ResponsePromise<PlatformContentTutorialFetchResponse,never>}
 */
export function fetchPlatformContentTutorial(client: ChatBotKitClient, tutorialId: string): ResponsePromise<PlatformContentTutorialFetchResponse, never>;
export type ChatBotKitClient = import("../../../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../../../client.js").ResponsePromise<T, U>;
export type PlatformContentTutorialListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type PlatformContentTutorialListResponse = import("../../../types/api/v1.js").operations["listPlatformContentTutorials"]["responses"]["200"]["content"]["application/json"];
export type PlatformContentTutorialListItem = PlatformContentTutorialListResponse["items"][number];
export type PlatformContentTutorialListStreamType = import("../../../types/api/v1.js").operations["listPlatformContentTutorials"]["responses"]["200"]["content"]["application/jsonl"];
export type PlatformContentTutorialSearchRequestBody = import("../../../types/api/v1.js").operations["searchPlatformContentTutorials"]["requestBody"]["content"]["application/json"];
export type PlatformContentTutorialSearchRequest = PlatformContentTutorialSearchRequestBody;
export type PlatformContentTutorialSearchResponseBody = import("../../../types/api/v1.js").operations["searchPlatformContentTutorials"]["responses"]["200"]["content"]["application/json"];
export type PlatformContentTutorialSearchResponse = PlatformContentTutorialSearchResponseBody;
export type PlatformContentTutorialFetchResponse = import("../../../types/api/v1.js").operations["fetchPlatformContentTutorial"]["responses"]["200"]["content"]["application/json"];
