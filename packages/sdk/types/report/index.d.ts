/**
 * Report client.
 */
export class ReportClient extends ChatBotKitClient {
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
import { ChatBotKitClient } from '../client.js';
