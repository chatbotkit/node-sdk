/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */
export class DiscordIntegrationClient extends ChatBotKitClient {
    /**
     * Retrieves a list of all discord integrations.
     *
     * @param {import('./v1.js').DiscordIntegrationListRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').DiscordIntegrationListResponse,import('./v1.js').DiscordIntegrationListStreamType>}
     */
    list(request?: import("./v1.js").DiscordIntegrationListRequest | undefined): ResponsePromise<import('./v1.js').DiscordIntegrationListResponse, import('./v1.js').DiscordIntegrationListStreamType>;
    /**
     * Fetches a discord integration.
     *
     * @param {string} discordId
     * @returns {Promise<import('./v1.js').DiscordIntegrationFetchResponse>}
     */
    fetch(discordId: string): Promise<import('./v1.js').DiscordIntegrationFetchResponse>;
    /**
     * Creates a new discord integration.
     *
     * @param {import('./v1.js').DiscordIntegrationCreateRequest} request
     * @returns {Promise<import('./v1.js').DiscordIntegrationCreateResponse>}
     */
    create(request: import('./v1.js').DiscordIntegrationCreateRequest): Promise<import('./v1.js').DiscordIntegrationCreateResponse>;
    /**
     * Updates a discord integration.
     *
     * @param {string} discordId
     * @param {import('./v1.js').DiscordIntegrationUpdateRequest} request
     * @returns {Promise<import('./v1.js').DiscordIntegrationUpdateResponse>}
     */
    update(discordId: string, request: import('./v1.js').DiscordIntegrationUpdateRequest): Promise<import('./v1.js').DiscordIntegrationUpdateResponse>;
    /**
     * Deletes a discord integration.
     *
     * @param {string} discordId
     * @returns {Promise<import('./v1.js').DiscordIntegrationDeleteResponse>}
     */
    delete(discordId: string): Promise<import('./v1.js').DiscordIntegrationDeleteResponse>;
    /**
     * Setups a discord integration.
     *
     * @param {string} discordId
     * @returns {Promise<import('./v1.js').DiscordIntegrationSetupResponse>}
     */
    setup(discordId: string): Promise<import('./v1.js').DiscordIntegrationSetupResponse>;
}
export default DiscordIntegrationClient;
export type ResponsePromise<T, U> = import('../../client.js').ResponsePromise<T, U>;
import { ChatBotKitClient } from '../../client.js';
