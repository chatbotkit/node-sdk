/**
 * @template T
 * @template U
 * @typedef {import('../client.js').ResponsePromise<T,U>} ResponsePromise
 */
/**
 * Skillset client.
 */
export class SkillsetClient extends ChatBotKitClient {
    /**
     * @type {SkillsetAbilityClient} ability client
     */
    ability: SkillsetAbilityClient;
    /**
     * Retrieves a list of all skillsets.
     *
     * @param {import('./v1.js').SkillsetListRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').SkillsetListResponse,import('./v1.js').SkillsetListStreamType>}
     */
    list(request?: import("./v1.js").SkillsetListRequest): ResponsePromise<import("./v1.js").SkillsetListResponse, import("./v1.js").SkillsetListStreamType>;
    /**
     * Fetches a skillset.
     *
     * @param {string} skillsetId
     * @returns {ResponsePromise<import('./v1.js').SkillsetFetchResponse,never>}
     */
    fetch(skillsetId: string): ResponsePromise<import("./v1.js").SkillsetFetchResponse, never>;
    /**
     * Creates a new skillset.
     *
     * @param {import('./v1.js').SkillsetCreateRequest} request
     * @returns {Promise<import('./v1.js').SkillsetCreateResponse>}
     */
    create(request: import("./v1.js").SkillsetCreateRequest): Promise<import("./v1.js").SkillsetCreateResponse>;
    /**
     * Updates a skillset.
     *
     * @param {string} skillsetId
     * @param {import('./v1.js').SkillsetUpdateRequest} request
     * @returns {Promise<import('./v1.js').SkillsetUpdateResponse>}
     */
    update(skillsetId: string, request: import("./v1.js").SkillsetUpdateRequest): Promise<import("./v1.js").SkillsetUpdateResponse>;
    /**
     * Deletes the skillset.
     *
     * @param {string} skillsetId
     * @returns {Promise<import('./v1.js').SkillsetDeleteResponse>}
     */
    delete(skillsetId: string): Promise<import("./v1.js").SkillsetDeleteResponse>;
}
export default SkillsetClient;
export type ResponsePromise<T, U> = import("../client.js").ResponsePromise<T, U>;
import { ChatBotKitClient } from '../client.js';
import { SkillsetAbilityClient } from './ability/index.js';
