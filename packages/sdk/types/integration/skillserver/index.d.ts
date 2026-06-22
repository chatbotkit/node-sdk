/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */
export class SkillServerIntegrationClient extends ChatBotKitClient {
    /**
     * Retrieves a list of all skillserver integrations.
     *
     * @param {import('./v1.js').SkillServerIntegrationListRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').SkillServerIntegrationListResponse,import('./v1.js').SkillServerIntegrationListStreamType>}
     */
    list(request?: import("./v1.js").SkillServerIntegrationListRequest): ResponsePromise<import("./v1.js").SkillServerIntegrationListResponse, import("./v1.js").SkillServerIntegrationListStreamType>;
    /**
     * Fetches a skillserver integration.
     *
     * @param {string} skillserverId
     * @returns {ResponsePromise<import('./v1.js').SkillServerIntegrationFetchResponse,never>}
     */
    fetch(skillserverId: string): ResponsePromise<import("./v1.js").SkillServerIntegrationFetchResponse, never>;
    /**
     * Creates a new skillserver integration.
     *
     * @param {import('./v1.js').SkillServerIntegrationCreateRequest} request
     * @returns {Promise<import('./v1.js').SkillServerIntegrationCreateResponse>}
     */
    create(request: import("./v1.js").SkillServerIntegrationCreateRequest): Promise<import("./v1.js").SkillServerIntegrationCreateResponse>;
    /**
     * Updates a skillserver integration.
     *
     * @param {string} skillserverId
     * @param {import('./v1.js').SkillServerIntegrationUpdateRequest} request
     * @returns {Promise<import('./v1.js').SkillServerIntegrationUpdateResponse>}
     */
    update(skillserverId: string, request: import("./v1.js").SkillServerIntegrationUpdateRequest): Promise<import("./v1.js").SkillServerIntegrationUpdateResponse>;
    /**
     * Deletes a skillserver integration.
     *
     * @param {string} skillserverId
     * @returns {Promise<import('./v1.js').SkillServerIntegrationDeleteResponse>}
     */
    delete(skillserverId: string): Promise<import("./v1.js").SkillServerIntegrationDeleteResponse>;
}
export default SkillServerIntegrationClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
import { ChatBotKitClient } from '../../client.js';
