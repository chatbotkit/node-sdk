import { ChatBotKitClient } from '../client.js'
import {
  createContact,
  deleteContact,
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
   * @returns {Promise<import('./v1.js').ContactFetchResponse>}
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
}

export default ContactClient
