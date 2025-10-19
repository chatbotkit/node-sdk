/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */
export class EmailIntegrationClient extends ChatBotKitClient {
    /**
     * Retrieves a list of all email integrations.
     *
     * @param {import('./v1.js').EmailIntegrationListRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').EmailIntegrationListResponse,import('./v1.js').EmailIntegrationListStreamType>}
     */
    list(request?: import("./v1.js").EmailIntegrationListRequest): ResponsePromise<import("./v1.js").EmailIntegrationListResponse, import("./v1.js").EmailIntegrationListStreamType>;
    /**
     * Fetches a email integration.
     *
     * @param {string} emailId
     * @returns {ResponsePromise<import('./v1.js').EmailIntegrationFetchResponse,never>}
     */
    fetch(emailId: string): ResponsePromise<import("./v1.js").EmailIntegrationFetchResponse, never>;
    /**
     * Creates a new email integration.
     *
     * @param {import('./v1.js').EmailIntegrationCreateRequest} request
     * @returns {Promise<import('./v1.js').EmailIntegrationCreateResponse>}
     */
    create(request: import("./v1.js").EmailIntegrationCreateRequest): Promise<import("./v1.js").EmailIntegrationCreateResponse>;
    /**
     * Updates a email integration.
     *
     * @param {string} emailId
     * @param {import('./v1.js').EmailIntegrationUpdateRequest} request
     * @returns {Promise<import('./v1.js').EmailIntegrationUpdateResponse>}
     */
    update(emailId: string, request: import("./v1.js").EmailIntegrationUpdateRequest): Promise<import("./v1.js").EmailIntegrationUpdateResponse>;
    /**
     * Deletes a email integration.
     *
     * @param {string} emailId
     * @returns {Promise<import('./v1.js').EmailIntegrationDeleteResponse>}
     */
    delete(emailId: string): Promise<import("./v1.js").EmailIntegrationDeleteResponse>;
    /**
     * Setups a email integration.
     *
     * @param {string} emailId
     * @returns {Promise<import('./v1.js').EmailIntegrationSetupResponse>}
     */
    setup(emailId: string): Promise<import("./v1.js").EmailIntegrationSetupResponse>;
}
export default EmailIntegrationClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
import { ChatBotKitClient } from '../../client.js';
