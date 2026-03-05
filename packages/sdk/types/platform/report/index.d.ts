/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */
/**
 * Platform Report client.
 */
export class PlatformReportClient extends ChatBotKitClient {
    /**
     * Retrieves a list of all available reports.
     *
     * @param {import('./v1.js').PlatformReportListRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').PlatformReportListResponse,import('./v1.js').PlatformReportListStreamType>}
     */
    list(request?: import("./v1.js").PlatformReportListRequest): ResponsePromise<import("./v1.js").PlatformReportListResponse, import("./v1.js").PlatformReportListStreamType>;
    /**
     * Generates a specific report.
     *
     * @param {string} reportId
     * @param {import('./v1.js').PlatformReportGenerateRequest} request
     * @returns {Promise<import('./v1.js').PlatformReportGenerateResponse>}
     */
    generate(reportId: string, request: import("./v1.js").PlatformReportGenerateRequest): Promise<import("./v1.js").PlatformReportGenerateResponse>;
    /**
     * Generates a typed report with full type safety for input and output.
     *
     * @template {import('./v1.js').ReportId} T
     * @param {T} reportId - The report ID
     * @param {import('./v1.js').ReportInputTypes[T]} request - The report input
     * @returns {Promise<import('./v1.js').ReportOutputTypes[T]>}
     */
    generateTyped<T extends import("./v1.js").ReportId>(reportId: T, request: import("./v1.js").ReportInputTypes[T]): Promise<import("./v1.js").ReportOutputTypes[T]>;
    /**
     * Generates multiple reports in a single request.
     *
     * @param {import('./v1.js').PlatformReportsGenerateRequest} request
     * @returns {Promise<import('./v1.js').PlatformReportsGenerateResponse>}
     */
    generateBatch(request: import("./v1.js").PlatformReportsGenerateRequest): Promise<import("./v1.js").PlatformReportsGenerateResponse>;
}
export default PlatformReportClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
import { ChatBotKitClient } from '../../client.js';
