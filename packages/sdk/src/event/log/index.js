import { ChatBotKitClient } from '../../client.js'
import { exportEventLogs, listEventLogs, subscribeEventLogs } from './v1.js'

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
   * @param {import('../../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Retrieves a list of event logs.
   *
   * @param {import('./v1.js').EventLogListRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').EventLogListResponse,import('./v1.js').EventLogListStreamType>}
   */
  list(request) {
    return listEventLogs(this, request)
  }

  /**
   * Exports event logs.
   *
   * @param {import('./v1.js').EventLogExportRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').EventLogExportResponse,import('./v1.js').EventLogExportStreamType>}
   */
  export(request) {
    return exportEventLogs(this, request)
  }

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
  subscribe(request) {
    return subscribeEventLogs(this, request)
  }
}

export default EventLogClient
