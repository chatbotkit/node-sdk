/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */
/**
 * Contact space client.
 */
export class SpaceClient extends ChatBotKitClient {
    /**
     * Retrieves a list of all contact spaces.
     *
     * @param {string} contactId
     * @param {import('./v1.js').SpaceListRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').SpaceListResponse,import('./v1.js').SpaceListStreamType>}
     */
    list(contactId: string, request?: import("./v1.js").SpaceListRequest): ResponsePromise<import("./v1.js").SpaceListResponse, import("./v1.js").SpaceListStreamType>;
}
export default SpaceClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
import { ChatBotKitClient } from '../../client.js';
