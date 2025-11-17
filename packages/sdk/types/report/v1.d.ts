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
 * }} ReportListRequest
 *
 * @typedef {import('../types/api/v1.js').operations['listReports']['responses']['200']['content']['application/json']} ReportListResponse
 *
 * @typedef {import('../types/api/v1.js').operations['listReports']['responses']['200']['content']['application/jsonl']} ReportListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {ReportListRequest} [request]
 * @returns {ResponsePromise<ReportListResponse,ReportListStreamType>}
 */
export function listReports(client: ChatBotKitClient, request?: ReportListRequest): ResponsePromise<ReportListResponse, ReportListStreamType>;
/**
 * @typedef {import('../types/api/v1.js').operations['fetchReport']['requestBody']['content']['application/json']} ReportFetchRequestBody
 *
 * @typedef {ReportFetchRequestBody} ReportFetchRequest
 *
 * @typedef {import('../types/api/v1.js').operations['fetchReport']['responses']['200']['content']['application/json']} ReportFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} reportId
 * @param {ReportFetchRequest} request
 * @returns {Promise<ReportFetchResponse>}
 */
export function fetchReport(client: ChatBotKitClient, reportId: string, request: ReportFetchRequest): Promise<ReportFetchResponse>;
export type ChatBotKitClient = import("../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../client.js").ResponsePromise<T, U>;
export type ReportListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type ReportListResponse = import("../types/api/v1.js").operations["listReports"]["responses"]["200"]["content"]["application/json"];
export type ReportListStreamType = import("../types/api/v1.js").operations["listReports"]["responses"]["200"]["content"]["application/jsonl"];
export type ReportFetchRequestBody = import("../types/api/v1.js").operations["fetchReport"]["requestBody"]["content"]["application/json"];
export type ReportFetchRequest = ReportFetchRequestBody;
export type ReportFetchResponse = import("../types/api/v1.js").operations["fetchReport"]["responses"]["200"]["content"]["application/json"];
