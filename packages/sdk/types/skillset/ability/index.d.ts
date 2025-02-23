/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */
/**
 * Skillset ability client.
 */
export class SkillsetAbilityClient extends ChatBotKitClient {
    /**
     * Retrieves a list of all abilitys.
     *
     * @param {string} skillsetId
     * @param {import('./v1.js').SkillsetAbilityListRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').SkillsetAbilityListResponse,import('./v1.js').SkillsetAbilityListStreamType>}
     */
    list(skillsetId: string, request?: import("./v1.js").SkillsetAbilityListRequest | undefined): ResponsePromise<import('./v1.js').SkillsetAbilityListResponse, import('./v1.js').SkillsetAbilityListStreamType>;
    /**
     * Fetches a ability.
     *
     * @param {string} skillsetId
     * @param {string} abilityId
     * @returns {ResponsePromise<import('./v1.js').SkillsetAbilityFetchResponse,never>}
     */
    fetch(skillsetId: string, abilityId: string): ResponsePromise<import('./v1.js').SkillsetAbilityFetchResponse, never>;
    /**
     * Creates a new ability.
     *
     * @param {string} skillsetId
     * @param {import('./v1.js').SkillsetAbilityCreateRequest} request
     * @returns {Promise<import('./v1.js').SkillsetAbilityCreateResponse>}
     */
    create(skillsetId: string, request: import('./v1.js').SkillsetAbilityCreateRequest): Promise<import('./v1.js').SkillsetAbilityCreateResponse>;
    /**
     * Updates an ability.
     *
     * @param {string} skillsetId
     * @param {string} abilityId
     * @param {import('./v1.js').SkillsetAbilityUpdateRequest} request
     * @returns {Promise<import('./v1.js').SkillsetAbilityUpdateResponse>}
     */
    update(skillsetId: string, abilityId: string, request: import('./v1.js').SkillsetAbilityUpdateRequest): Promise<import('./v1.js').SkillsetAbilityUpdateResponse>;
    /**
     * Deletes the ability.
     *
     * @param {string} skillsetId
     * @param {string} abilityId
     * @returns {Promise<import('./v1.js').SkillsetAbilityDeleteResponse>}
     */
    delete(skillsetId: string, abilityId: string): Promise<import('./v1.js').SkillsetAbilityDeleteResponse>;
}
export default SkillsetAbilityClient;
export type ResponsePromise<T, U> = import('../../client.js').ResponsePromise<T, U>;
import { ChatBotKitClient } from '../../client.js';
