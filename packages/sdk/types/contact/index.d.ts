/**
 * @template T
 * @template U
 * @typedef {import('../client.js').ResponsePromise<T,U>} ResponsePromise
 */
/**
 * Contact client.
 */
export class ContactClient extends ChatBotKitClient {
    task: TaskClient;
    secrets: SecretClient;
    /**
     * Retrieves a list of all contacts.
     *
     * @param {import('./v1.js').ContactListRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').ContactListResponse,import('./v1.js').ContactListStreamType>}
     */
    list(request?: import("./v1.js").ContactListRequest | undefined): ResponsePromise<import('./v1.js').ContactListResponse, import('./v1.js').ContactListStreamType>;
    /**
     * Fetches a contact.
     *
     * @param {string} contactId
     * @returns {Promise<import('./v1.js').ContactFetchResponse>}
     */
    fetch(contactId: string): Promise<import('./v1.js').ContactFetchResponse>;
    /**
     * Creates a new contact.
     *
     * @param {import('./v1.js').ContactCreateRequest} request
     * @returns {Promise<import('./v1.js').ContactCreateResponse>}
     */
    create(request: import('./v1.js').ContactCreateRequest): Promise<import('./v1.js').ContactCreateResponse>;
    /**
     * Updates a contact.
     *
     * @param {string} contactId
     * @param {import('./v1.js').ContactUpdateRequest} request
     * @returns {Promise<import('./v1.js').ContactUpdateResponse>}
     */
    update(contactId: string, request: import('./v1.js').ContactUpdateRequest): Promise<import('./v1.js').ContactUpdateResponse>;
    /**
     * Deletes the contact.
     *
     * @param {string} contactId
     * @returns {Promise<import('./v1.js').ContactDeleteResponse>}
     */
    delete(contactId: string): Promise<import('./v1.js').ContactDeleteResponse>;
    /**
     * Ensures a contact exists.
     *
     * @param {import('./v1.js').ContactEnsureRequest} request
     * @returns {Promise<import('./v1.js').ContactEnsureResponse>}
     */
    ensure(request: import('./v1.js').ContactEnsureRequest): Promise<import('./v1.js').ContactEnsureResponse>;
}
export default ContactClient;
export type ResponsePromise<T, U> = import('../client.js').ResponsePromise<T, U>;
import { ChatBotKitClient } from '../client.js';
import { TaskClient } from './task/index.js';
import { SecretClient } from './secret/index.js';
