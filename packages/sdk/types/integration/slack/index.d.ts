/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */
export class SlackIntegrationClient extends ChatBotKitClient {
    /**
     * Retrieves a list of all slack integrations.
     *
     * @param {import('./v1.js').SlackIntegrationListRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').SlackIntegrationListResponse,import('./v1.js').SlackIntegrationListStreamType>}
     */
    list(request?: import("./v1.js").SlackIntegrationListRequest): ResponsePromise<import("./v1.js").SlackIntegrationListResponse, import("./v1.js").SlackIntegrationListStreamType>;
    /**
     * Fetches a slack integration.
     *
     * @param {string} slackId
     * @returns {ResponsePromise<import('./v1.js').SlackIntegrationFetchResponse,never>}
     */
    fetch(slackId: string): ResponsePromise<import("./v1.js").SlackIntegrationFetchResponse, never>;
    /**
     * Creates a new slack integration.
     *
     * @param {import('./v1.js').SlackIntegrationCreateRequest} request
     * @returns {Promise<import('./v1.js').SlackIntegrationCreateResponse>}
     */
    create(request: import("./v1.js").SlackIntegrationCreateRequest): Promise<import("./v1.js").SlackIntegrationCreateResponse>;
    /**
     * Updates a slack integration.
     *
     * @param {string} slackId
     * @param {import('./v1.js').SlackIntegrationUpdateRequest} request
     * @returns {Promise<import('./v1.js').SlackIntegrationUpdateResponse>}
     */
    update(slackId: string, request: import("./v1.js").SlackIntegrationUpdateRequest): Promise<import("./v1.js").SlackIntegrationUpdateResponse>;
    /**
     * Deletes a slack integration.
     *
     * @param {string} slackId
     * @returns {Promise<import('./v1.js').SlackIntegrationDeleteResponse>}
     */
    delete(slackId: string): Promise<import("./v1.js").SlackIntegrationDeleteResponse>;
    /**
     * Setups a slack integration.
     *
     * @param {string} slackId
     * @returns {Promise<import('./v1.js').SlackIntegrationSetupResponse>}
     */
    setup(slackId: string): Promise<import("./v1.js").SlackIntegrationSetupResponse>;
}
export default SlackIntegrationClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
import { ChatBotKitClient } from '../../client.js';
