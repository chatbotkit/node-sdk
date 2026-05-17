/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */
export class MicrosoftteamsIntegrationClient extends ChatBotKitClient {
    /**
     * Retrieves a list of all Microsoft Teams integrations.
     *
     * @param {import('./v1.js').MicrosoftteamsIntegrationListRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').MicrosoftteamsIntegrationListResponse,import('./v1.js').MicrosoftteamsIntegrationListStreamType>}
     */
    list(request?: import("./v1.js").MicrosoftteamsIntegrationListRequest): ResponsePromise<import("./v1.js").MicrosoftteamsIntegrationListResponse, import("./v1.js").MicrosoftteamsIntegrationListStreamType>;
    /**
     * Fetches a Microsoft Teams integration.
     *
     * @param {string} microsoftteamsId
     * @returns {ResponsePromise<import('./v1.js').MicrosoftteamsIntegrationFetchResponse,never>}
     */
    fetch(microsoftteamsId: string): ResponsePromise<import("./v1.js").MicrosoftteamsIntegrationFetchResponse, never>;
    /**
     * Creates a new Microsoft Teams integration.
     *
     * @param {import('./v1.js').MicrosoftteamsIntegrationCreateRequest} request
     * @returns {Promise<import('./v1.js').MicrosoftteamsIntegrationCreateResponse>}
     */
    create(request: import("./v1.js").MicrosoftteamsIntegrationCreateRequest): Promise<import("./v1.js").MicrosoftteamsIntegrationCreateResponse>;
    /**
     * Updates a Microsoft Teams integration.
     *
     * @param {string} microsoftteamsId
     * @param {import('./v1.js').MicrosoftteamsIntegrationUpdateRequest} request
     * @returns {Promise<import('./v1.js').MicrosoftteamsIntegrationUpdateResponse>}
     */
    update(microsoftteamsId: string, request: import("./v1.js").MicrosoftteamsIntegrationUpdateRequest): Promise<import("./v1.js").MicrosoftteamsIntegrationUpdateResponse>;
    /**
     * Deletes a Microsoft Teams integration.
     *
     * @param {string} microsoftteamsId
     * @returns {Promise<import('./v1.js').MicrosoftteamsIntegrationDeleteResponse>}
     */
    delete(microsoftteamsId: string): Promise<import("./v1.js").MicrosoftteamsIntegrationDeleteResponse>;
    /**
     * Setups a Microsoft Teams integration.
     *
     * @param {string} microsoftteamsId
     * @returns {Promise<import('./v1.js').MicrosoftteamsIntegrationSetupResponse>}
     */
    setup(microsoftteamsId: string): Promise<import("./v1.js").MicrosoftteamsIntegrationSetupResponse>;
    /**
     * Initiates a Microsoft Teams integration conversation.
     *
     * @param {string} microsoftteamsId
     * @param {import('./v1.js').MicrosoftteamsInitiateRequest} request
     * @returns {Promise<import('./v1.js').MicrosoftteamsInitiateResponse>}
     */
    initiate(microsoftteamsId: string, request: import("./v1.js").MicrosoftteamsInitiateRequest): Promise<import("./v1.js").MicrosoftteamsInitiateResponse>;
}
export default MicrosoftteamsIntegrationClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
import { ChatBotKitClient } from '../../client.js';
