/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */
/**
 * Task execution client.
 */
export class TaskExecutionClient extends ChatBotKitClient {
    /**
     * Retrieves a list of all executions for a task.
     *
     * @param {string} taskId
     * @param {import('./v1.js').TaskExecutionListRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').TaskExecutionListResponse,import('./v1.js').TaskExecutionListStreamType>}
     */
    list(taskId: string, request?: import("./v1.js").TaskExecutionListRequest): ResponsePromise<import("./v1.js").TaskExecutionListResponse, import("./v1.js").TaskExecutionListStreamType>;
    /**
     * Cancels a task execution.
     *
     * @param {string} taskId
     * @param {string} taskExecutionId
     * @returns {Promise<import('./v1.js').TaskExecutionCancelResponse>}
     */
    cancel(taskId: string, taskExecutionId: string): Promise<import("./v1.js").TaskExecutionCancelResponse>;
}
export default TaskExecutionClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
import { ChatBotKitClient } from '../../client.js';
