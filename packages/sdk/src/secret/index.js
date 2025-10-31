import { ChatBotKitClient } from '../client.js'
import {
  authenticateSecret,
  createSecret,
  deleteSecret,
  fetchSecret,
  listSecrets,
  revokeSecret,
  updateSecret,
  verifySecret,
} from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../client.js').ResponsePromise<T,U>} ResponsePromise
 */

/**
 * Secret client.
 */
export class SecretClient extends ChatBotKitClient {
  /**
   * @param {import('../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Retrieves a list of all secrets.
   *
   * @param {import('./v1.js').SecretListRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').SecretListResponse,import('./v1.js').SecretListStreamType>}
   */
  list(request) {
    return listSecrets(this, request)
  }

  /**
   * Fetches a secret.
   *
   * @param {string} secretId
   * @returns {ResponsePromise<import('./v1.js').SecretFetchResponse,never>}
   */
  fetch(secretId) {
    return fetchSecret(this, secretId)
  }

  /**
   * Creates a new secret.
   *
   * @param {import('./v1.js').SecretCreateRequest} request
   * @returns {Promise<import('./v1.js').SecretCreateResponse>}
   */
  create(request) {
    return createSecret(this, request)
  }

  /**
   * Updates a secret.
   *
   * @param {string} secretId
   * @param {import('./v1.js').SecretUpdateRequest} request
   * @returns {Promise<import('./v1.js').SecretUpdateResponse>}
   */
  update(secretId, request) {
    return updateSecret(this, secretId, request)
  }

  /**
   * Deletes the secret.
   *
   * @param {string} secretId
   * @returns {Promise<import('./v1.js').SecretDeleteResponse>}
   */
  delete(secretId) {
    return deleteSecret(this, secretId)
  }

  /**
   * Revokes a secret.
   *
   * @param {string} secretId
   * @returns {Promise<import('./v1.js').SecretRevokeResponse>}
   */
  revoke(secretId) {
    return revokeSecret(this, secretId)
  }

  /**
   * Verifies the secret.
   *
   * @param {string} secretId
   * @returns {Promise<import('./v1.js').SecretVerifyResponse>}
   */
  verify(secretId) {
    return verifySecret(this, secretId)
  }

  /**
   * Authenticates the secret.
   *
   * @param {string} secretId
   * @returns {Promise<import('./v1.js').SecretAuthenticateResponse>}
   */
  authenticate(secretId) {
    return authenticateSecret(this, secretId)
  }
}

export default SecretClient
