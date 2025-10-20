/**
 * @template T
 * @template U
 * @typedef {import('../client.js').ResponsePromise<T,U>} ResponsePromise
 */
/**
 * Team client.
 */
export class TeamClient extends ChatBotKitClient {
    /**
     * Retrieves a list of all teams.
     *
     * @param {import('./v1.js').TeamListRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').TeamListResponse,import('./v1.js').TeamListStreamType>}
     */
    list(request?: import("./v1.js").TeamListRequest): ResponsePromise<import("./v1.js").TeamListResponse, import("./v1.js").TeamListStreamType>;
}
export default TeamClient;
export type ResponsePromise<T, U> = import("../client.js").ResponsePromise<T, U>;
import { ChatBotKitClient } from '../client.js';
