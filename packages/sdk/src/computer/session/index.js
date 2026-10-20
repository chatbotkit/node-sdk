import { ChatBotKitClient } from '../../client.js'
import { createComputerSession } from './v1.js'

/**
 * Computer session client.
 */
export class ComputerSessionClient extends ChatBotKitClient {
  /**
   * @param {import('../../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Creates a short-lived remote access link to a desktop computer.
   *
   * @param {string} computerId
   * @param {import('./v1.js').ComputerSessionCreateRequest} [request]
   * @returns {Promise<import('./v1.js').ComputerSessionCreateResponse>}
   */
  create(computerId, request) {
    return createComputerSession(this, computerId, request)
  }
}

export default ComputerSessionClient
