/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */
export class TriggerIntegrationClient extends ChatBotKitClient {
    /**
     * Retrieves a list of all trigger integrations.
     *
     * @param {import('./v1.js').TriggerIntegrationListRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').TriggerIntegrationListResponse,import('./v1.js').TriggerIntegrationListStreamType>}
     */
    list(request?: import("./v1.js").TriggerIntegrationListRequest | undefined): ResponsePromise<import('./v1.js').TriggerIntegrationListResponse, import('./v1.js').TriggerIntegrationListStreamType>;
    /**
     * Fetches a trigger integration.
     *
     * @param {string} triggerId
     * @returns {ResponsePromise<import('./v1.js').TriggerIntegrationFetchResponse,never>}
     */
    fetch(triggerId: string): ResponsePromise<import('./v1.js').TriggerIntegrationFetchResponse, never>;
    /**
     * Creates a new trigger integration.
     *
     * @param {import('./v1.js').TriggerIntegrationCreateRequest} request
     * @returns {Promise<import('./v1.js').TriggerIntegrationCreateResponse>}
     */
    create(request: import('./v1.js').TriggerIntegrationCreateRequest): Promise<import('./v1.js').TriggerIntegrationCreateResponse>;
    /**
     * Updates a trigger integration.
     *
     * @param {string} triggerId
     * @param {import('./v1.js').TriggerIntegrationUpdateRequest} request
     * @returns {Promise<import('./v1.js').TriggerIntegrationUpdateResponse>}
     */
    update(triggerId: string, request: import('./v1.js').TriggerIntegrationUpdateRequest): Promise<import('./v1.js').TriggerIntegrationUpdateResponse>;
    /**
     * Deletes a trigger integration.
     *
     * @param {string} triggerId
     * @returns {Promise<import('./v1.js').TriggerIntegrationDeleteResponse>}
     */
    delete(triggerId: string): Promise<import('./v1.js').TriggerIntegrationDeleteResponse>;
    /**
     * Setups a trigger integration.
     *
     * @param {string} triggerId
     * @returns {Promise<import('./v1.js').TriggerIntegrationSetupResponse>}
     */
    setup(triggerId: string): Promise<import('./v1.js').TriggerIntegrationSetupResponse>;
    /**
     * Invoke a trigger integration.
     *
     * @param {string} triggerId
     * @param {import('./v1.js').TriggerIntegrationInvokeRequest} request
     * @returns {Promise<import('./v1.js').TriggerIntegrationInvokeResponse>}
     */
    invoke(triggerId: string, request: import('./v1.js').TriggerIntegrationInvokeRequest): Promise<import('./v1.js').TriggerIntegrationInvokeResponse>;
}
export default TriggerIntegrationClient;
export type ResponsePromise<T, U> = import('../../client.js').ResponsePromise<T, U>;
import { ChatBotKitClient } from '../../client.js';
