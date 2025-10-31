import { ChatBotKitClient } from '../client.js'
import {
  createPolicy,
  deletePolicy,
  fetchPolicy,
  listPolicies,
  updatePolicy,
} from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../client.js').ResponsePromise<T,U>} ResponsePromise
 */

/**
 * Policy client.
 */
export class PolicyClient extends ChatBotKitClient {
  /**
   * @param {import('../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Retrieves a list of all policies.
   *
   * @param {import('./v1.js').PolicyListRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').PolicyListResponse,import('./v1.js').PolicyListStreamType>}
   */
  list(request) {
    return listPolicies(this, request)
  }

  /**
   * Fetches a policy.
   *
   * @param {string} policyId
   * @returns {ResponsePromise<import('./v1.js').PolicyFetchResponse,never>}
   */
  fetch(policyId) {
    return fetchPolicy(this, policyId)
  }

  /**
   * Creates a new policy.
   *
   * @param {import('./v1.js').PolicyCreateRequest} request
   * @returns {Promise<import('./v1.js').PolicyCreateResponse>}
   */
  create(request) {
    return createPolicy(this, request)
  }

  /**
   * Updates a policy.
   *
   * @param {string} policyId
   * @param {import('./v1.js').PolicyUpdateRequest} request
   * @returns {Promise<import('./v1.js').PolicyUpdateResponse>}
   */
  update(policyId, request) {
    return updatePolicy(this, policyId, request)
  }

  /**
   * Deletes the policy.
   *
   * @param {string} policyId
   * @returns {Promise<import('./v1.js').PolicyDeleteResponse>}
   */
  delete(policyId) {
    return deletePolicy(this, policyId)
  }
}

export default PolicyClient
