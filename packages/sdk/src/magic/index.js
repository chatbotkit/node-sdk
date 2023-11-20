import { ChatBotKitClient } from '../client.js'
import { generateMagic } from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../client.js').ResponsePromise<T,U>} ResponsePromise
 */

export class MagicClient extends ChatBotKitClient {
  /**
   * @param {import('../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Generates magic.
   *
   * @param {string} magicId
   * @param {import('./v1.js').MagicGenerateRequest} request
   * @param {import('./v1.js').MagicGenerateRequest|import('./v1.js').MagicGenerateStreamType} request
   */
  generate(magicId, request) {
    return generateMagic(this, magicId, request)
  }
}

export default MagicClient
