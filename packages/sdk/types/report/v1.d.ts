/**
 * @typedef {import('../client.js').ChatBotKitClient} ChatBotKitClient
 */
/**
 * @typedef {import('../types/api/v1.js').operations['generateReport']['requestBody']['content']['application/json']} ReportGenerateRequestBody
 *
 * @typedef {ReportGenerateRequestBody} ReportGenerateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['generateReport']['responses']['200']['content']['application/json']} ReportGenerateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} reportId
 * @param {ReportGenerateRequest} request
 * @returns {Promise<ReportGenerateResponse>}
 */
export function generateReport(client: ChatBotKitClient, reportId: string, request: ReportGenerateRequest): Promise<ReportGenerateResponse>;
/**
 * @typedef {import('../types/report.js').ReportId} ReportId
 * @typedef {import('../types/report.js').ReportInputTypes} ReportInputTypes
 * @typedef {import('../types/report.js').ReportOutputTypes} ReportOutputTypes
 */
/**
 * Generate a typed report with input and output type safety
 *
 * @template {ReportId} T
 * @param {ChatBotKitClient} client
 * @param {T} reportId - The report ID
 * @param {ReportInputTypes[T]} request - The report input
 * @returns {Promise<ReportOutputTypes[T]>}
 */
export function generateTypedReport<T extends ReportId>(client: ChatBotKitClient, reportId: T, request: ReportInputTypes[T]): Promise<ReportOutputTypes[T]>;
export type ChatBotKitClient = import("../client.js").ChatBotKitClient;
export type ReportGenerateRequestBody = import("../types/api/v1.js").operations["generateReport"]["requestBody"]["content"]["application/json"];
export type ReportGenerateRequest = ReportGenerateRequestBody;
export type ReportGenerateResponse = import("../types/api/v1.js").operations["generateReport"]["responses"]["200"]["content"]["application/json"];
export type ReportId = import("../types/report.js").ReportId;
export type ReportInputTypes = import("../types/report.js").ReportInputTypes;
export type ReportOutputTypes = import("../types/report.js").ReportOutputTypes;
