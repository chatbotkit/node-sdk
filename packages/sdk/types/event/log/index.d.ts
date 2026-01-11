/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */
/**
 * Event log client for accessing event logs.
 *
 * This client provides access to ChatBotKit's event logging system, which
 * records all significant events that occur in your account. Events include
 * conversation creation, message exchanges, bot interactions, and other
 * platform activities. Use this client to retrieve historical events, export
 * event data, or subscribe to live event streams for real-time monitoring.
 *
 * @example
 * // List recent events
 * const events = await client.event.log.list({ take: 100 })
 *
 * @example
 * // Filter events by conversation
 * const conversationEvents = await client.event.log.list({
 *   conversationId: 'conv_123',
 *   take: 50
 * })
 *
 * @example
 * // Subscribe to live events (requires Pro+ plan)
 * const stream = client.event.log.subscribe({ historyLength: 10 })
 * for await (const event of stream) {
 *   console.log('Event:', event.data.type, event.data.id)
 * }
 */
export class EventLogClient extends ChatBotKitClient {
    /**
     * Retrieves a list of event logs.
     *
     * @param {import('./v1.js').EventLogListRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').EventLogListResponse,import('./v1.js').EventLogListStreamType>}
     */
    list(request?: import("./v1.js").EventLogListRequest): ResponsePromise<import("./v1.js").EventLogListResponse, import("./v1.js").EventLogListStreamType>;
    /**
     * Exports event logs.
     *
     * @param {import('./v1.js').EventLogExportRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').EventLogExportResponse,import('./v1.js').EventLogExportStreamType>}
     */
    export(request?: import("./v1.js").EventLogExportRequest): ResponsePromise<import("./v1.js").EventLogExportResponse, import("./v1.js").EventLogExportStreamType>;
    /**
     * Subscribes to live event logs.
     *
     * This method establishes a streaming connection to receive real-time events
     * as they occur. The connection remains open until closed by the client.
     * This feature requires a Pro plan or higher.
     *
     * @param {import('./v1.js').EventLogSubscribeRequest} [request]
     * @returns {ResponsePromise<never,import('./v1.js').EventLogSubscribeStreamType>}
     */
    subscribe(request?: import("./v1.js").EventLogSubscribeRequest): ResponsePromise<never, import("./v1.js").EventLogSubscribeStreamType>;
}
export default EventLogClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
import { ChatBotKitClient } from '../../client.js';
