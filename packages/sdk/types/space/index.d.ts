/**
 * @template T
 * @template U
 * @typedef {import('../client.js').ResponsePromise<T,U>} ResponsePromise
 */
/**
 * Space client.
 */
export class SpaceClient extends ChatBotKitClient {
    /**
     * Retrieves a list of all spaces.
     *
     * @param {import('./v1.js').SpaceListRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').SpaceListResponse,import('./v1.js').SpaceListStreamType>}
     */
    list(request?: import("./v1.js").SpaceListRequest): ResponsePromise<import("./v1.js").SpaceListResponse, import("./v1.js").SpaceListStreamType>;
    /**
     * Fetches a space.
     *
     * @param {string} spaceId
     * @returns {ResponsePromise<import('./v1.js').SpaceFetchResponse,never>}
     */
    fetch(spaceId: string): ResponsePromise<import("./v1.js").SpaceFetchResponse, never>;
    /**
     * Creates a new space.
     *
     * @param {import('./v1.js').SpaceCreateRequest} request
     * @returns {Promise<import('./v1.js').SpaceCreateResponse>}
     */
    create(request: import("./v1.js").SpaceCreateRequest): Promise<import("./v1.js").SpaceCreateResponse>;
    /**
     * Updates a space.
     *
     * @param {string} spaceId
     * @param {import('./v1.js').SpaceUpdateRequest} request
     * @returns {Promise<import('./v1.js').SpaceUpdateResponse>}
     */
    update(spaceId: string, request: import("./v1.js").SpaceUpdateRequest): Promise<import("./v1.js").SpaceUpdateResponse>;
    /**
     * Deletes the space.
     *
     * @param {string} spaceId
     * @returns {Promise<import('./v1.js').SpaceDeleteResponse>}
     */
    delete(spaceId: string): Promise<import("./v1.js").SpaceDeleteResponse>;
}
export default SpaceClient;
export type ResponsePromise<T, U> = import("../client.js").ResponsePromise<T, U>;
import { ChatBotKitClient } from '../client.js';
