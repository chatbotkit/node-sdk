import { ChatBotKitClient } from '../client.js'
import { EventLogClient } from './log/index.js'

/**
 * Event client for accessing event-related functionality.
 *
 * This client provides access to ChatBotKit's event system, including
 * event logs that record all significant platform activities. Use the
 * `log` sub-client to list, export, or subscribe to events.
 *
 * @example
 * const client = new EventClient({ secret: 'your-secret' })
 *
 * // List recent events
 * const events = await client.log.list({ take: 100 })
 *
 * // Export events for a specific conversation
 * const exported = await client.log.export({ conversationId: 'conv_123' })
 *
 * // Subscribe to live events (Pro+ only)
 * const stream = client.log.subscribe()
 * for await (const event of stream) {
 *   console.log('Live event:', event.data.type)
 * }
 */
export class EventClient extends ChatBotKitClient {
  /**
   * @param {import('../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)

    /**
     * @type {EventLogClient} Event log client
     */
    this.log = new EventLogClient(options)
  }
}

export default EventClient
