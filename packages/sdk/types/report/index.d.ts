/**
 * @template T
 * @template U
 * @typedef {import('../client.js').ResponsePromise<T,U>} ResponsePromise
 */
/**
 * Report client.
 */
export class ReportClient extends ChatBotKitClient {
    /**
     * Retrieves a list of all available reports.
     *
     * @param {import('./v1.js').ReportListRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').ReportListResponse,import('./v1.js').ReportListStreamType>}
     */
    list(request?: import("./v1.js").ReportListRequest): ResponsePromise<import("./v1.js").ReportListResponse, import("./v1.js").ReportListStreamType>;
    /**
     * Generates a report.
     *
     * @param {string} reportId
     * @param {import('./v1.js').ReportFetchRequest} request
     * @returns {Promise<import('./v1.js').ReportFetchResponse>}
     */
    fetch(reportId: string, request: import("./v1.js").ReportFetchRequest): Promise<import("./v1.js").ReportFetchResponse>;
    /**
     * Generates a typed report with full type safety for input and output.
     *
     * @template {import('./v1.js').ReportId} T
     * @param {T} reportId - The report ID
     * @param {import('./v1.js').ReportInputTypes[T]} request - The report input
     * @returns {Promise<import('./v1.js').ReportOutputTypes[T]>}
     */
    fetchTyped<T extends import("./v1.js").ReportId>(reportId: T, request: import("./v1.js").ReportInputTypes[T]): Promise<import("./v1.js").ReportOutputTypes[T]>;
}
export default ReportClient;
export type ResponsePromise<T, U> = import("../client.js").ResponsePromise<T, U>;
import { ChatBotKitClient } from '../client.js';
