/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */
export class WidgetIntegrationClient extends ChatBotKitClient {
    /**
     * Retrieves a list of all widget integrations.
     *
     * @param {import('./v1.js').WidgetIntegrationListRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').WidgetIntegrationListResponse,import('./v1.js').WidgetIntegrationListStreamType>}
     */
    list(request?: import("./v1.js").WidgetIntegrationListRequest): ResponsePromise<import("./v1.js").WidgetIntegrationListResponse, import("./v1.js").WidgetIntegrationListStreamType>;
    /**
     * Fetches a widget integration.
     *
     * @param {string} widgetId
     * @returns {ResponsePromise<import('./v1.js').WidgetIntegrationFetchResponse,never>}
     */
    fetch(widgetId: string): ResponsePromise<import("./v1.js").WidgetIntegrationFetchResponse, never>;
    /**
     * Creates a new widget integration.
     *
     * @param {import('./v1.js').WidgetIntegrationCreateRequest} request
     * @returns {Promise<import('./v1.js').WidgetIntegrationCreateResponse>}
     */
    create(request: import("./v1.js").WidgetIntegrationCreateRequest): Promise<import("./v1.js").WidgetIntegrationCreateResponse>;
    /**
     * Updates a widget integration.
     *
     * @param {string} widgetId
     * @param {import('./v1.js').WidgetIntegrationUpdateRequest} request
     * @returns {Promise<import('./v1.js').WidgetIntegrationUpdateResponse>}
     */
    update(widgetId: string, request: import("./v1.js").WidgetIntegrationUpdateRequest): Promise<import("./v1.js").WidgetIntegrationUpdateResponse>;
    /**
     * Deletes a widget integration.
     *
     * @param {string} widgetId
     * @returns {Promise<import('./v1.js').WidgetIntegrationDeleteResponse>}
     */
    delete(widgetId: string): Promise<import("./v1.js").WidgetIntegrationDeleteResponse>;
    /**
     * Sets up a widget integration.
     *
     * @param {string} widgetId
     * @returns {Promise<import('./v1.js').WidgetIntegrationSetupResponse>}
     */
    setup(widgetId: string): Promise<import("./v1.js").WidgetIntegrationSetupResponse>;
}
export default WidgetIntegrationClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
import { ChatBotKitClient } from '../../client.js';
