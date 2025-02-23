import { ChatBotKitClient } from '../client.js'
import { ConversationClient } from './conversation/index.js'
import { SecretClient } from './secret/index.js'
import { TaskClient } from './task/index.js'
import {
  createContact,
  deleteContact,
  ensureContact,
  fetchContact,
  listContacts,
  updateContact,
} from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../client.js').ResponsePromise<T,U>} ResponsePromise
 */

/**
 * Contact client.
 */
export class ContactClient extends ChatBotKitClient {
  /**
   * @param {import('../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)

    this.task = new TaskClient(options)
    this.conversation = new ConversationClient(options)

    // @note overlapping name with the `secret` property
    this.secrets = new SecretClient(options)
  }

  /**
   * Retrieves a list of all contacts.
   *
   * @param {import('./v1.js').ContactListRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').ContactListResponse,import('./v1.js').ContactListStreamType>}
   */
  list(request) {
    return listContacts(this, request)
  }

  /**
   * Fetches a contact.
   *
   * @param {string} contactId
   * @returns {ResponsePromise<import('./v1.js').ContactFetchResponse,never>}
   */
  fetch(contactId) {
    return fetchContact(this, contactId)
  }

  /**
   * Creates a new contact.
   *
   * @param {import('./v1.js').ContactCreateRequest} request
   * @returns {Promise<import('./v1.js').ContactCreateResponse>}
   */
  create(request) {
    return createContact(this, request)
  }

  /**
   * Updates a contact.
   *
   * @param {string} contactId
   * @param {import('./v1.js').ContactUpdateRequest} request
   * @returns {Promise<import('./v1.js').ContactUpdateResponse>}
   */
  update(contactId, request) {
    return updateContact(this, contactId, request)
  }

  /**
   * Deletes the contact.
   *
   * @param {string} contactId
   * @returns {Promise<import('./v1.js').ContactDeleteResponse>}
   */
  delete(contactId) {
    return deleteContact(this, contactId)
  }

  /**
   * Ensures a contact exists.
   *
   * @param {import('./v1.js').ContactEnsureRequest} request
   * @returns {Promise<import('./v1.js').ContactEnsureResponse>}
   */
  ensure(request) {
    return ensureContact(this, request)
  }
}

export default ContactClient
