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
    list(request?: import("./v1.js").TaskListRequest): ResponsePromise<import("./v1.js").TaskListResponse, import("./v1.js").TaskListStreamType>;
    /**
     * Exports tasks.
     *
     * @param {import('./v1.js').TaskExportRequest} [request]
     * @returns {ResponsePromise<never,import('./v1.js').TaskExportStreamType>}
     */
    export(request?: import("./v1.js").TaskExportRequest): ResponsePromise<never, import("./v1.js").TaskExportStreamType>;
    /**
     * Fetches a task.
     *
     * @param {string} taskId
     * @returns {ResponsePromise<import('./v1.js').TaskFetchResponse,never>}
     */
    fetch(taskId: string): ResponsePromise<import("./v1.js").TaskFetchResponse, never>;
    /**
     * Creates a new task.
     *
     * @param {import('./v1.js').TaskCreateRequest} request
     * @returns {Promise<import('./v1.js').TaskCreateResponse>}
     */
    create(request: import("./v1.js").TaskCreateRequest): Promise<import("./v1.js").TaskCreateResponse>;
    /**
     * Updates a task.
     *
     * @param {string} taskId
     * @param {import('./v1.js').TaskUpdateRequest} request
     * @returns {Promise<import('./v1.js').TaskUpdateResponse>}
     */
    update(taskId: string, request: import("./v1.js").TaskUpdateRequest): Promise<import("./v1.js").TaskUpdateResponse>;
    /**
     * Deletes the task.
     *
     * @param {string} taskId
     * @returns {Promise<import('./v1.js').TaskDeleteResponse>}
     */
    delete(taskId: string): Promise<import("./v1.js").TaskDeleteResponse>;
    /**
     * Triggers a task.
     *
     * @param {string} taskId
     * @returns {Promise<import('./v1.js').TaskTriggerResponse>}
     */
    trigger(taskId: string): Promise<import("./v1.js").TaskTriggerResponse>;
}
export default TaskClient;
export type ResponsePromise<T, U> = import("../client.js").ResponsePromise<T, U>;
import { ChatBotKitClient } from '../client.js';
