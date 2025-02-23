/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */
export class WhatsAppIntegrationClient extends ChatBotKitClient {
    /**
     * Retrieves a list of all whatsapp integrations.
     *
     * @param {import('./v1.js').WhatsAppIntegrationListRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').WhatsAppIntegrationListResponse,import('./v1.js').WhatsAppIntegrationListStreamType>}
     */
    list(request?: import("./v1.js").WhatsAppIntegrationListRequest | undefined): ResponsePromise<import('./v1.js').WhatsAppIntegrationListResponse, import('./v1.js').WhatsAppIntegrationListStreamType>;
    /**
     * Fetches a whatsapp integration.
     *
     * @param {string} whatsappId
     * @returns {ResponsePromise<import('./v1.js').WhatsAppIntegrationFetchResponse,never>}
     */
    fetch(whatsappId: string): ResponsePromise<import('./v1.js').WhatsAppIntegrationFetchResponse, never>;
    /**
     * Creates a new whatsapp integration.
     *
     * @param {import('./v1.js').WhatsAppIntegrationCreateRequest} request
     * @returns {Promise<import('./v1.js').WhatsAppIntegrationCreateResponse>}
     */
    create(request: import('./v1.js').WhatsAppIntegrationCreateRequest): Promise<import('./v1.js').WhatsAppIntegrationCreateResponse>;
    /**
     * Updates a whatsapp integration.
     *
     * @param {string} whatsappId
     * @param {import('./v1.js').WhatsAppIntegrationUpdateRequest} request
     * @returns {Promise<import('./v1.js').WhatsAppIntegrationUpdateResponse>}
     */
    update(whatsappId: string, request: import('./v1.js').WhatsAppIntegrationUpdateRequest): Promise<import('./v1.js').WhatsAppIntegrationUpdateResponse>;
    /**
     * Deletes a whatsapp integration.
     *
     * @param {string} whatsappId
     * @returns {Promise<import('./v1.js').WhatsAppIntegrationDeleteResponse>}
     */
    delete(whatsappId: string): Promise<import('./v1.js').WhatsAppIntegrationDeleteResponse>;
    /**
     * Setups a whatsapp integration.
     *
     * @param {string} whatsappId
     * @returns {Promise<import('./v1.js').WhatsAppIntegrationSetupResponse>}
     */
    setup(whatsappId: string): Promise<import('./v1.js').WhatsAppIntegrationSetupResponse>;
}
export default WhatsAppIntegrationClient;
export type ResponsePromise<T, U> = import('../../client.js').ResponsePromise<T, U>;
import { ChatBotKitClient } from '../../client.js';
