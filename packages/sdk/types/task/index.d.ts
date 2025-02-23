/**
 * @template T
 * @template U
 * @typedef {import('../client.js').ResponsePromise<T,U>} ResponsePromise
 */
/**
 * Task client.
 */
export class TaskClient extends ChatBotKitClient {
    /**
     * Retrieves a list of all tasks.
     *
     * @param {import('./v1.js').TaskListRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').TaskListResponse,import('./v1.js').TaskListStreamType>}
     */
    list(request?: import("./v1.js").TaskListRequest | undefined): ResponsePromise<import('./v1.js').TaskListResponse, import('./v1.js').TaskListStreamType>;
    /**
     * Fetches a task.
     *
     * @param {string} taskId
     * @returns {ResponsePromise<import('./v1.js').TaskFetchResponse,never>}
     */
    fetch(taskId: string): ResponsePromise<import('./v1.js').TaskFetchResponse, never>;
    /**
     * Creates a new task.
     *
     * @param {import('./v1.js').TaskCreateRequest} request
     * @returns {Promise<import('./v1.js').TaskCreateResponse>}
     */
    create(request: import('./v1.js').TaskCreateRequest): Promise<import('./v1.js').TaskCreateResponse>;
    /**
     * Updates a task.
     *
     * @param {string} taskId
     * @param {import('./v1.js').TaskUpdateRequest} request
     * @returns {Promise<import('./v1.js').TaskUpdateResponse>}
     */
    update(taskId: string, request: import('./v1.js').TaskUpdateRequest): Promise<import('./v1.js').TaskUpdateResponse>;
    /**
     * Deletes the task.
     *
     * @param {string} taskId
     * @returns {Promise<import('./v1.js').TaskDeleteResponse>}
     */
    delete(taskId: string): Promise<import('./v1.js').TaskDeleteResponse>;
}
export default TaskClient;
export type ResponsePromise<T, U> = import('../client.js').ResponsePromise<T, U>;
import { ChatBotKitClient } from '../client.js';
