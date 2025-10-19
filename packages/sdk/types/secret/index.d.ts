/**
 * @template T
 * @template U
 * @typedef {import('../client.js').ResponsePromise<T,U>} ResponsePromise
 */
/**
 * Secret client.
 */
export class SecretClient extends ChatBotKitClient {
    /**
     * Retrieves a list of all secrets.
     *
     * @param {import('./v1.js').SecretListRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').SecretListResponse,import('./v1.js').SecretListStreamType>}
     */
    list(request?: import("./v1.js").SecretListRequest): ResponsePromise<import("./v1.js").SecretListResponse, import("./v1.js").SecretListStreamType>;
    /**
     * Fetches a secret.
     *
     * @param {string} secretId
     * @returns {ResponsePromise<import('./v1.js').SecretFetchResponse,never>}
     */
    fetch(secretId: string): ResponsePromise<import("./v1.js").SecretFetchResponse, never>;
    /**
     * Creates a new secret.
     *
     * @param {import('./v1.js').SecretCreateRequest} request
     * @returns {Promise<import('./v1.js').SecretCreateResponse>}
     */
    create(request: import("./v1.js").SecretCreateRequest): Promise<import("./v1.js").SecretCreateResponse>;
    /**
     * Updates a secret.
     *
     * @param {string} secretId
     * @param {import('./v1.js').SecretUpdateRequest} request
     * @returns {Promise<import('./v1.js').SecretUpdateResponse>}
     */
    update(secretId: string, request: import("./v1.js").SecretUpdateRequest): Promise<import("./v1.js").SecretUpdateResponse>;
    /**
     * Deletes the secret.
     *
     * @param {string} secretId
     * @returns {Promise<import('./v1.js').SecretDeleteResponse>}
     */
    delete(secretId: string): Promise<import("./v1.js").SecretDeleteResponse>;
}
export default SecretClient;
export type ResponsePromise<T, U> = import("../client.js").ResponsePromise<T, U>;
import { ChatBotKitClient } from '../client.js';
