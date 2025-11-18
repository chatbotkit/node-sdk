/**
 * Report client for generating and fetching various analytics reports.
 *
 * This client provides access to ChatBotKit's reporting system, which offers
 * various types of reports for analyzing conversations, usage, performance
 * metrics, and other platform data. Reports are identified by unique report IDs,
 * which can be discovered using the platform.report.list() method. Each report
 * may have different input parameters and output formats depending on the
 * specific analytics it provides.
 *
 * @example
 * const client = new ReportClient({ secret: 'your-secret' })
 *
 * // First, discover available reports
 * const reports = await client.platform.report.list()
 *
 * // Then fetch a specific report using its ID
 * const report = await client.fetch('clr3m5n8k000508jq2j9k0l6f', {
 *   periodDays: 30
 * })
 *
 * console.log(`Total conversations: ${report.value}`)
 *
 * @example
 * // Using typed reports for full type safety with total ratings
 * const report = await client.fetchTyped('clr3m5n8k000008jq7h9e5b1a', {
 *   periodDays: 7
 * })
 *
 * console.log(`Thumbs up: ${report.thumbsUp}, Thumbs down: ${report.thumbsDown}`)
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
