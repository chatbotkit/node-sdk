/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */
export class TeamsIntegrationClient extends ChatBotKitClient {
    /**
     * Retrieves a list of all teams integrations.
     *
     * @param {import('./v1.js').TeamsIntegrationListRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').TeamsIntegrationListResponse,import('./v1.js').TeamsIntegrationListStreamType>}
     */
    list(request?: import("./v1.js").TeamsIntegrationListRequest): ResponsePromise<import("./v1.js").TeamsIntegrationListResponse, import("./v1.js").TeamsIntegrationListStreamType>;
    /**
     * Fetches a teams integration.
     *
     * @param {string} teamsId
     * @returns {ResponsePromise<import('./v1.js').TeamsIntegrationFetchResponse,never>}
     */
    fetch(teamsId: string): ResponsePromise<import("./v1.js").TeamsIntegrationFetchResponse, never>;
    /**
     * Creates a new teams integration.
     *
     * @param {import('./v1.js').TeamsIntegrationCreateRequest} request
     * @returns {Promise<import('./v1.js').TeamsIntegrationCreateResponse>}
     */
    create(request: import("./v1.js").TeamsIntegrationCreateRequest): Promise<import("./v1.js").TeamsIntegrationCreateResponse>;
    /**
     * Updates a teams integration.
     *
     * @param {string} teamsId
     * @param {import('./v1.js').TeamsIntegrationUpdateRequest} request
     * @returns {Promise<import('./v1.js').TeamsIntegrationUpdateResponse>}
     */
    update(teamsId: string, request: import("./v1.js").TeamsIntegrationUpdateRequest): Promise<import("./v1.js").TeamsIntegrationUpdateResponse>;
    /**
     * Deletes a teams integration.
     *
     * @param {string} teamsId
     * @returns {Promise<import('./v1.js').TeamsIntegrationDeleteResponse>}
     */
    delete(teamsId: string): Promise<import("./v1.js").TeamsIntegrationDeleteResponse>;
    /**
     * Setups a teams integration.
     *
     * @param {string} teamsId
     * @returns {Promise<import('./v1.js').TeamsIntegrationSetupResponse>}
     */
    setup(teamsId: string): Promise<import("./v1.js").TeamsIntegrationSetupResponse>;
}
export default TeamsIntegrationClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
import { ChatBotKitClient } from '../../client.js';
