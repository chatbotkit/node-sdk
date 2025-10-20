/**
 * @template T
 * @template U
 * @typedef {import('../client.js').ResponsePromise<T,U>} ResponsePromise
 */
/**
 * Blueprint client.
 */
export class BlueprintClient extends ChatBotKitClient {
    /**
     * Retrieves a list of all blueprints.
     *
     * @param {import('./v1.js').BlueprintListRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').BlueprintListResponse,import('./v1.js').BlueprintListStreamType>}
     */
    list(request?: import("./v1.js").BlueprintListRequest): ResponsePromise<import("./v1.js").BlueprintListResponse, import("./v1.js").BlueprintListStreamType>;
    /**
     * Fetches a blueprint.
     *
     * @param {string} blueprintId
     * @returns {ResponsePromise<import('./v1.js').BlueprintFetchResponse,never>}
     */
    fetch(blueprintId: string): ResponsePromise<import("./v1.js").BlueprintFetchResponse, never>;
    /**
     * Creates a new blueprint.
     *
     * @param {import('./v1.js').BlueprintCreateRequest} request
     * @returns {Promise<import('./v1.js').BlueprintCreateResponse>}
     */
    create(request: import("./v1.js").BlueprintCreateRequest): Promise<import("./v1.js").BlueprintCreateResponse>;
    /**
     * Updates a blueprint.
     *
     * @param {string} blueprintId
     * @param {import('./v1.js').BlueprintUpdateRequest} request
     * @returns {Promise<import('./v1.js').BlueprintUpdateResponse>}
     */
    update(blueprintId: string, request: import("./v1.js").BlueprintUpdateRequest): Promise<import("./v1.js").BlueprintUpdateResponse>;
    /**
     * Deletes the blueprint.
     *
     * @param {string} blueprintId
     * @returns {Promise<import('./v1.js').BlueprintDeleteResponse>}
     */
    delete(blueprintId: string): Promise<import("./v1.js").BlueprintDeleteResponse>;
    /**
     * Clones a blueprint.
     *
     * @param {string} blueprintId
     * @returns {Promise<import('./v1.js').BlueprintCloneResponse>}
     */
    clone(blueprintId: string): Promise<import("./v1.js").BlueprintCloneResponse>;
    /**
     * Lists all resources for a blueprint.
     *
     * @param {string} blueprintId
     * @returns {Promise<import('./v1.js').BlueprintListResourcesResponse>}
     */
    listResources(blueprintId: string): Promise<import("./v1.js").BlueprintListResourcesResponse>;
}
export default BlueprintClient;
export type ResponsePromise<T, U> = import("../client.js").ResponsePromise<T, U>;
import { ChatBotKitClient } from '../client.js';
