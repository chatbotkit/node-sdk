import { ChatBotKitClient } from '../../client.js'
import {
  authenticateSecret,
  listSecrets,
  revokeSecret,
  verifySecret,
} from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */

/**
 * Contact secret client.
 */
export class SecretClient extends ChatBotKitClient {
  /**
   * @param {import('../../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Retrieves a list of all contact secrets.
   *
   * @param {string} contactId
   * @param {import('./v1.js').SecretListRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').SecretListResponse,import('./v1.js').SecretListStreamType>}
   */
  list(contactId, request) {
    return listSecrets(this, contactId, request)
  }

  /**
   * Revokes the contact secret.
   *
   * @param {string} contactId
   * @param {string} secretId
   * @returns {Promise<import('./v1.js').SecretRevokeResponse>}
   */
  revoke(contactId, secretId) {
    return revokeSecret(this, contactId, secretId)
  }

  /**
   * Verifies the contact secret.
   *
   * @param {string} contactId
   * @param {string} secretId
   * @returns {Promise<import('./v1.js').SecretVerifyResponse>}
   */
  verify(contactId, secretId) {
    return verifySecret(this, contactId, secretId)
  }

  /**
   * Authenticates the contact secret.
   *
   * @param {string} contactId
   * @param {string} secretId
   * @returns {Promise<import('./v1.js').SecretAuthenticateResponse>}
   */
  authenticate(contactId, secretId) {
    return authenticateSecret(this, contactId, secretId)
  }
}

export default SecretClient
