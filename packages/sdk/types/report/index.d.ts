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
}
export default ReportClient;
export type ResponsePromise<T, U> = import("../client.js").ResponsePromise<T, U>;
import { ChatBotKitClient } from '../client.js';
