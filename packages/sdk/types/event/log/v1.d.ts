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
 * }} EventLogListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listEventLogs']['responses']['200']['content']['application/json']} EventLogListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listEventLogs']['responses']['200']['content']['application/jsonl']} EventLogListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {EventLogListRequest} [request]
 * @returns {ResponsePromise<EventLogListResponse,EventLogListStreamType>}
 */
export function listEventLogs(client: ChatBotKitClient, request?: EventLogListRequest): ResponsePromise<EventLogListResponse, EventLogListStreamType>;
/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} EventLogExportRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['exportEventLogs']['responses']['200']['content']['application/json']} EventLogExportResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['exportEventLogs']['responses']['200']['content']['application/jsonl']} EventLogExportStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {EventLogExportRequest} [request]
 * @returns {ResponsePromise<EventLogExportResponse,EventLogExportStreamType>}
 */
export function exportEventLogs(client: ChatBotKitClient, request?: EventLogExportRequest): ResponsePromise<EventLogExportResponse, EventLogExportStreamType>;
/**
 * @typedef {import('../../types/api/v1.js').operations['subscribeEventLogs']['requestBody']['content']['application/json']} EventLogSubscribeRequestBody
 *
 * @typedef {EventLogSubscribeRequestBody} EventLogSubscribeRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['subscribeEventLogs']['responses']['200']['content']['application/jsonl']} EventLogSubscribeStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {EventLogSubscribeRequest} [request]
 * @returns {ResponsePromise<never,EventLogSubscribeStreamType>}
 */
export function subscribeEventLogs(client: ChatBotKitClient, request?: EventLogSubscribeRequest): ResponsePromise<never, EventLogSubscribeStreamType>;
export type ChatBotKitClient = import("../../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
export type EventLogListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type EventLogListResponse = import("../../types/api/v1.js").operations["listEventLogs"]["responses"]["200"]["content"]["application/json"];
export type EventLogListStreamType = import("../../types/api/v1.js").operations["listEventLogs"]["responses"]["200"]["content"]["application/jsonl"];
export type EventLogExportRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type EventLogExportResponse = import("../../types/api/v1.js").operations["exportEventLogs"]["responses"]["200"]["content"]["application/json"];
export type EventLogExportStreamType = import("../../types/api/v1.js").operations["exportEventLogs"]["responses"]["200"]["content"]["application/jsonl"];
export type EventLogSubscribeRequestBody = import("../../types/api/v1.js").operations["subscribeEventLogs"]["requestBody"]["content"]["application/json"];
export type EventLogSubscribeRequest = EventLogSubscribeRequestBody;
export type EventLogSubscribeStreamType = import("../../types/api/v1.js").operations["subscribeEventLogs"]["responses"]["200"]["content"]["application/jsonl"];
