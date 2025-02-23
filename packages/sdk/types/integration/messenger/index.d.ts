/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */
export class MessengerIntegrationClient extends ChatBotKitClient {
    /**
     * Retrieves a list of all messenger integrations.
     *
     * @param {import('./v1.js').MessengerIntegrationListRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').MessengerIntegrationListResponse,import('./v1.js').MessengerIntegrationListStreamType>}
     */
    list(request?: import("./v1.js").MessengerIntegrationListRequest | undefined): ResponsePromise<import('./v1.js').MessengerIntegrationListResponse, import('./v1.js').MessengerIntegrationListStreamType>;
    /**
     * Fetches a messenger integration.
     *
     * @param {string} messengerId
     * @returns {ResponsePromise<import('./v1.js').MessengerIntegrationFetchResponse,never>}
     */
    fetch(messengerId: string): ResponsePromise<import('./v1.js').MessengerIntegrationFetchResponse, never>;
    /**
     * Creates a new messenger integration.
     *
     * @param {import('./v1.js').MessengerIntegrationCreateRequest} request
     * @returns {Promise<import('./v1.js').MessengerIntegrationCreateResponse>}
     */
    create(request: import('./v1.js').MessengerIntegrationCreateRequest): Promise<import('./v1.js').MessengerIntegrationCreateResponse>;
    /**
     * Updates a messenger integration.
     *
     * @param {string} messengerId
     * @param {import('./v1.js').MessengerIntegrationUpdateRequest} request
     * @returns {Promise<import('./v1.js').MessengerIntegrationUpdateResponse>}
     */
    update(messengerId: string, request: import('./v1.js').MessengerIntegrationUpdateRequest): Promise<import('./v1.js').MessengerIntegrationUpdateResponse>;
    /**
     * Deletes a messenger integration.
     *
     * @param {string} messengerId
     * @returns {Promise<import('./v1.js').MessengerIntegrationDeleteResponse>}
     */
    delete(messengerId: string): Promise<import('./v1.js').MessengerIntegrationDeleteResponse>;
    /**
     * Setups a messenger integration.
     *
     * @param {string} messengerId
     * @returns {Promise<import('./v1.js').MessengerIntegrationSetupResponse>}
     */
    setup(messengerId: string): Promise<import('./v1.js').MessengerIntegrationSetupResponse>;
}
export default MessengerIntegrationClient;
export type ResponsePromise<T, U> = import('../../client.js').ResponsePromise<T, U>;
import { ChatBotKitClient } from '../../client.js';
