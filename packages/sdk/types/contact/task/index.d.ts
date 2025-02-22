/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */
/**
 * Contact task client.
 */
export class TaskClient extends ChatBotKitClient {
    /**
     * Retrieves a list of all contact tasks.
     *
     * @param {string} contactId
     * @param {import('./v1.js').TaskListRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').TaskListResponse,import('./v1.js').TaskListStreamType>}
     */
    list(contactId: string, request?: import("./v1.js").TaskListRequest | undefined): ResponsePromise<import('./v1.js').TaskListResponse, import('./v1.js').TaskListStreamType>;
}
export default TaskClient;
export type ResponsePromise<T, U> = import('../../client.js').ResponsePromise<T, U>;
import { ChatBotKitClient } from '../../client.js';
