/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */
/**
 * Contact secret client.
 */
export class SecretClient extends ChatBotKitClient {
    /**
     * Retrieves a list of all contact secrets.
     *
     * @param {string} contactId
     * @param {import('./v1.js').SecretListRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').SecretListResponse,import('./v1.js').SecretListStreamType>}
     */
    list(contactId: string, request?: import("./v1.js").SecretListRequest | undefined): ResponsePromise<import('./v1.js').SecretListResponse, import('./v1.js').SecretListStreamType>;
    /**
     * Revokes the contact secret.
     *
     * @param {string} contactId
     * @param {string} secretId
     * @returns {ResponsePromise<import('./v1.js').SecretRevokeResponse,never>}
     */
    revoke(contactId: string, secretId: string): ResponsePromise<import('./v1.js').SecretRevokeResponse, never>;
    /**
     * Verifies the contact secret.
     *
     * @param {string} contactId
     * @param {string} secretId
     * @returns {ResponsePromise<import('./v1.js').SecretVerifyResponse,never>}
     */
    verify(contactId: string, secretId: string): ResponsePromise<import('./v1.js').SecretVerifyResponse, never>;
    /**
     * Authenticates the contact secret.
     *
     * @param {string} contactId
     * @param {string} secretId
     * @returns {ResponsePromise<import('./v1.js').SecretAuthenticateResponse,never>}
     */
    authenticate(contactId: string, secretId: string): ResponsePromise<import('./v1.js').SecretAuthenticateResponse, never>;
}
export default SecretClient;
export type ResponsePromise<T, U> = import('../../client.js').ResponsePromise<T, U>;
import { ChatBotKitClient } from '../../client.js';
