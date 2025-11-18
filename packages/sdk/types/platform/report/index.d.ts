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
}
export default PlatformReportClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
import { ChatBotKitClient } from '../../client.js';
