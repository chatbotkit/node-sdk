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
    list(contactId: string, request?: import("./v1.js").SecretListRequest): ResponsePromise<import("./v1.js").SecretListResponse, import("./v1.js").SecretListStreamType>;
    /**
     * Revokes the contact secret.
     *
     * @param {string} contactId
     * @param {string} secretId
     * @returns {Promise<import('./v1.js').SecretRevokeResponse>}
     */
    revoke(contactId: string, secretId: string): Promise<import("./v1.js").SecretRevokeResponse>;
    /**
     * Verifies the contact secret.
     *
     * @param {string} contactId
     * @param {string} secretId
     * @returns {Promise<import('./v1.js').SecretVerifyResponse>}
     */
    verify(contactId: string, secretId: string): Promise<import("./v1.js").SecretVerifyResponse>;
    /**
     * Authenticates the contact secret.
     *
     * @param {string} contactId
     * @param {string} secretId
     * @returns {Promise<import('./v1.js').SecretAuthenticateResponse>}
     */
    authenticate(contactId: string, secretId: string): Promise<import("./v1.js").SecretAuthenticateResponse>;
    /**
     * Proxies a request through a contact's secret, injected server-side. Returns
     * the raw upstream `Response` (a non-2xx status is returned, not thrown).
     *
     * @param {string} contactId
     * @param {string} secretId
     * @param {import('./v1.js').SecretProxyRequest} request
     * @returns {Promise<Response>}
     */
    proxy(contactId: string, secretId: string, request: import("./v1.js").SecretProxyRequest): Promise<Response>;
    /**
     * Mints a usable token from a contact's secret (owner-only; `oauth`/`jwt` only).
     *
     * @param {string} contactId
     * @param {string} secretId
     * @returns {Promise<import('./v1.js').SecretMintResponse>}
     */
    mint(contactId: string, secretId: string): Promise<import("./v1.js").SecretMintResponse>;
}
export default SecretClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
import { ChatBotKitClient } from '../../client.js';
