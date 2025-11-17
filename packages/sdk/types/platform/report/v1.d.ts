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
 * }} PlatformReportListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listPlatformReports']['responses']['200']['content']['application/json']} PlatformReportListResponse
 *
 * @typedef {PlatformReportListResponse['items'][number]} PlatformReportListItem
 *
 * @typedef {import('../../types/api/v1.js').operations['listPlatformReports']['responses']['200']['content']['application/jsonl']} PlatformReportListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {PlatformReportListRequest} [request]
 * @returns {ResponsePromise<PlatformReportListResponse,PlatformReportListStreamType>}
 */
export function listPlatformReports(client: ChatBotKitClient, request?: PlatformReportListRequest): ResponsePromise<PlatformReportListResponse, PlatformReportListStreamType>;
export type ChatBotKitClient = import("../../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
export type PlatformReportListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type PlatformReportListResponse = import("../../types/api/v1.js").operations["listPlatformReports"]["responses"]["200"]["content"]["application/json"];
export type PlatformReportListItem = PlatformReportListResponse["items"][number];
export type PlatformReportListStreamType = import("../../types/api/v1.js").operations["listPlatformReports"]["responses"]["200"]["content"]["application/jsonl"];
