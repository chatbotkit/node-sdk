/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */
export class TelegramIntegrationClient extends ChatBotKitClient {
    /**
     * Retrieves a list of all telegram integrations.
     *
     * @param {import('./v1.js').TelegramIntegrationListRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').TelegramIntegrationListResponse,import('./v1.js').TelegramIntegrationListStreamType>}
     */
    list(request?: import("./v1.js").TelegramIntegrationListRequest): ResponsePromise<import("./v1.js").TelegramIntegrationListResponse, import("./v1.js").TelegramIntegrationListStreamType>;
    /**
     * Fetches a telegram integration.
     *
     * @param {string} telegramId
     * @returns {ResponsePromise<import('./v1.js').TelegramIntegrationFetchResponse,never>}
     */
    fetch(telegramId: string): ResponsePromise<import("./v1.js").TelegramIntegrationFetchResponse, never>;
    /**
     * Creates a new telegram integration.
     *
     * @param {import('./v1.js').TelegramIntegrationCreateRequest} request
     * @returns {Promise<import('./v1.js').TelegramIntegrationCreateResponse>}
     */
    create(request: import("./v1.js").TelegramIntegrationCreateRequest): Promise<import("./v1.js").TelegramIntegrationCreateResponse>;
    /**
     * Updates a telegram integration.
     *
     * @param {string} telegramId
     * @param {import('./v1.js').TelegramIntegrationUpdateRequest} request
     * @returns {Promise<import('./v1.js').TelegramIntegrationUpdateResponse>}
     */
    update(telegramId: string, request: import("./v1.js").TelegramIntegrationUpdateRequest): Promise<import("./v1.js").TelegramIntegrationUpdateResponse>;
    /**
     * Deletes a telegram integration.
     *
     * @param {string} telegramId
     * @returns {Promise<import('./v1.js').TelegramIntegrationDeleteResponse>}
     */
    delete(telegramId: string): Promise<import("./v1.js").TelegramIntegrationDeleteResponse>;
    /**
     * Setups a telegram integration.
     *
     * @param {string} telegramId
     * @returns {Promise<import('./v1.js').TelegramIntegrationSetupResponse>}
     */
    setup(telegramId: string): Promise<import("./v1.js").TelegramIntegrationSetupResponse>;
}
export default TelegramIntegrationClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
import { ChatBotKitClient } from '../../client.js';
