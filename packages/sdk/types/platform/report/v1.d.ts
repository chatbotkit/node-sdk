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
/**
 * @typedef {import('../../types/api/v1.js').operations['generatePlatformReport']['requestBody']['content']['application/json']} PlatformReportGenerateRequestBody
 *
 * @typedef {PlatformReportGenerateRequestBody} PlatformReportGenerateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['generatePlatformReport']['responses']['200']['content']['application/json']} PlatformReportGenerateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} reportId
 * @param {PlatformReportGenerateRequest} request
 * @returns {Promise<PlatformReportGenerateResponse>}
 */
export function generatePlatformReport(client: ChatBotKitClient, reportId: string, request: PlatformReportGenerateRequest): Promise<PlatformReportGenerateResponse>;
/**
 * @typedef {import('../../types/report.js').ReportId} ReportId
 * @typedef {import('../../types/report.js').ReportInputTypes} ReportInputTypes
 * @typedef {import('../../types/report.js').ReportOutputTypes} ReportOutputTypes
 */
/**
 * Generate a typed platform report with input and output type safety
 *
 * @template {ReportId} T
 * @param {ChatBotKitClient} client
 * @param {T} reportId - The report ID
 * @param {ReportInputTypes[T]} request - The report input
 * @returns {Promise<ReportOutputTypes[T]>}
 */
export function generateTypedPlatformReport<T extends ReportId>(client: ChatBotKitClient, reportId: T, request: ReportInputTypes[T]): Promise<ReportOutputTypes[T]>;
/**
 * @typedef {import('../../types/api/v1.js').operations['generatePlatformReports']['requestBody']['content']['application/json']} PlatformReportsGenerateRequestBody
 *
 * @typedef {PlatformReportsGenerateRequestBody} PlatformReportsGenerateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['generatePlatformReports']['responses']['200']['content']['application/json']} PlatformReportsGenerateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {PlatformReportsGenerateRequest} request
 * @returns {Promise<PlatformReportsGenerateResponse>}
 */
export function generatePlatformReports(client: ChatBotKitClient, request: PlatformReportsGenerateRequest): Promise<PlatformReportsGenerateResponse>;
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
export type PlatformReportGenerateRequestBody = import("../../types/api/v1.js").operations["generatePlatformReport"]["requestBody"]["content"]["application/json"];
export type PlatformReportGenerateRequest = PlatformReportGenerateRequestBody;
export type PlatformReportGenerateResponse = import("../../types/api/v1.js").operations["generatePlatformReport"]["responses"]["200"]["content"]["application/json"];
export type ReportId = import("../../types/report.js").ReportId;
export type ReportInputTypes = import("../../types/report.js").ReportInputTypes;
export type ReportOutputTypes = import("../../types/report.js").ReportOutputTypes;
export type PlatformReportsGenerateRequestBody = import("../../types/api/v1.js").operations["generatePlatformReports"]["requestBody"]["content"]["application/json"];
export type PlatformReportsGenerateRequest = PlatformReportsGenerateRequestBody;
export type PlatformReportsGenerateResponse = import("../../types/api/v1.js").operations["generatePlatformReports"]["responses"]["200"]["content"]["application/json"];
