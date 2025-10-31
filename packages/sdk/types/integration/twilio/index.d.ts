/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */
export class TwilioIntegrationClient extends ChatBotKitClient {
    /**
     * Retrieves a list of all twilio integrations.
     *
     * @param {import('./v1.js').TwilioIntegrationListRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').TwilioIntegrationListResponse,import('./v1.js').TwilioIntegrationListStreamType>}
     */
    list(request?: import("./v1.js").TwilioIntegrationListRequest): ResponsePromise<import("./v1.js").TwilioIntegrationListResponse, import("./v1.js").TwilioIntegrationListStreamType>;
    /**
     * Fetches a twilio integration.
     *
     * @param {string} twilioId
     * @returns {ResponsePromise<import('./v1.js').TwilioIntegrationFetchResponse,never>}
     */
    fetch(twilioId: string): ResponsePromise<import("./v1.js").TwilioIntegrationFetchResponse, never>;
    /**
     * Creates a new twilio integration.
     *
     * @param {import('./v1.js').TwilioIntegrationCreateRequest} request
     * @returns {Promise<import('./v1.js').TwilioIntegrationCreateResponse>}
     */
    create(request: import("./v1.js").TwilioIntegrationCreateRequest): Promise<import("./v1.js").TwilioIntegrationCreateResponse>;
    /**
     * Updates a twilio integration.
     *
     * @param {string} twilioId
     * @param {import('./v1.js').TwilioIntegrationUpdateRequest} request
     * @returns {Promise<import('./v1.js').TwilioIntegrationUpdateResponse>}
     */
    update(twilioId: string, request: import("./v1.js").TwilioIntegrationUpdateRequest): Promise<import("./v1.js").TwilioIntegrationUpdateResponse>;
    /**
     * Deletes a twilio integration.
     *
     * @param {string} twilioId
     * @returns {Promise<import('./v1.js').TwilioIntegrationDeleteResponse>}
     */
    delete(twilioId: string): Promise<import("./v1.js").TwilioIntegrationDeleteResponse>;
    /**
     * Sets up a twilio integration.
     *
     * @param {string} twilioId
     * @returns {Promise<import('./v1.js').TwilioIntegrationSetupResponse>}
     */
    setup(twilioId: string): Promise<import("./v1.js").TwilioIntegrationSetupResponse>;
}
export default TwilioIntegrationClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
import { ChatBotKitClient } from '../../client.js';
