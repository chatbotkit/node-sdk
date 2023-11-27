/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */
export class SitemapIntegrationClient extends ChatBotKitClient {
    /**
     * Retrieves a list of all sitemap integrations.
     *
     * @param {import('./v1.js').SitemapIntegrationListRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').SitemapIntegrationListResponse,import('./v1.js').SitemapIntegrationListStreamType>}
     */
    list(request?: import("./v1.js").SitemapIntegrationListRequest | undefined): ResponsePromise<import('./v1.js').SitemapIntegrationListResponse, import('./v1.js').SitemapIntegrationListStreamType>;
    /**
     * Fetches a sitemap integration.
     *
     * @param {string} sitemapId
     * @returns {Promise<import('./v1.js').SitemapIntegrationFetchResponse>}
     */
    fetch(sitemapId: string): Promise<import('./v1.js').SitemapIntegrationFetchResponse>;
    /**
     * Creates a new sitemap integration.
     *
     * @param {import('./v1.js').SitemapIntegrationCreateRequest} request
     * @returns {Promise<import('./v1.js').SitemapIntegrationCreateResponse>}
     */
    create(request: import('./v1.js').SitemapIntegrationCreateRequest): Promise<import('./v1.js').SitemapIntegrationCreateResponse>;
    /**
     * Updates a sitemap integration.
     *
     * @param {string} sitemapId
     * @param {import('./v1.js').SitemapIntegrationUpdateRequest} request
     * @returns {Promise<import('./v1.js').SitemapIntegrationUpdateResponse>}
     */
    update(sitemapId: string, request: import('./v1.js').SitemapIntegrationUpdateRequest): Promise<import('./v1.js').SitemapIntegrationUpdateResponse>;
    /**
     * Deletes a sitemap integration.
     *
     * @param {string} sitemapId
     * @returns {Promise<import('./v1.js').SitemapIntegrationDeleteResponse>}
     */
    delete(sitemapId: string): Promise<import('./v1.js').SitemapIntegrationDeleteResponse>;
    /**
     * Syncs a sitemap integration.
     *
     * @param {string} sitemapId
     * @returns {Promise<import('./v1.js').SitemapIntegrationSyncResponse>}
     */
    sync(sitemapId: string): Promise<import('./v1.js').SitemapIntegrationSyncResponse>;
}
export default SitemapIntegrationClient;
export type ResponsePromise<T, U> = import('../../client.js').ResponsePromise<T, U>;
import { ChatBotKitClient } from '../../client.js';
