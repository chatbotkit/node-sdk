/**
 * @typedef {import('../client.js').ChatBotKitClient} ChatBotKitClient
 */
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
/**
 * @typedef {import('../types/report.js').ReportId} ReportId
 * @typedef {import('../types/report.js').ReportInputTypes} ReportInputTypes
 * @typedef {import('../types/report.js').ReportOutputTypes} ReportOutputTypes
 */
/**
 * Fetch a typed report with input and output type safety
 *
 * @template {ReportId} T
 * @param {ChatBotKitClient} client
 * @param {T} reportId - The report ID
 * @param {ReportInputTypes[T]} request - The report input
 * @returns {Promise<ReportOutputTypes[T]>}
 */
export function fetchTypedReport<T extends ReportId>(client: ChatBotKitClient, reportId: T, request: ReportInputTypes[T]): Promise<ReportOutputTypes[T]>;
export type ChatBotKitClient = import("../client.js").ChatBotKitClient;
export type ReportFetchRequestBody = import("../types/api/v1.js").operations["fetchReport"]["requestBody"]["content"]["application/json"];
export type ReportFetchRequest = ReportFetchRequestBody;
export type ReportFetchResponse = import("../types/api/v1.js").operations["fetchReport"]["responses"]["200"]["content"]["application/json"];
export type ReportId = import("../types/report.js").ReportId;
export type ReportInputTypes = import("../types/report.js").ReportInputTypes;
export type ReportOutputTypes = import("../types/report.js").ReportOutputTypes;
