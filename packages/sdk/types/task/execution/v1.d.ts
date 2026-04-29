/**
 * @typedef {import('../../client.js').ChatBotKitClient} ChatBotKitClient
 */
/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */
/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} TaskExecutionListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listTaskExecutions']['responses']['200']['content']['application/json']} TaskExecutionListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listTaskExecutions']['responses']['200']['content']['application/jsonl']} TaskExecutionListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} taskId
 * @param {TaskExecutionListRequest} [request]
 * @returns {ResponsePromise<TaskExecutionListResponse,TaskExecutionListStreamType>}
 */
export function listTaskExecutions(client: ChatBotKitClient, taskId: string, request?: TaskExecutionListRequest): ResponsePromise<TaskExecutionListResponse, TaskExecutionListStreamType>;
/**
 * @typedef {import('../../types/api/v1.js').operations['cancelTaskExecution']['requestBody']['content']['application/json']} TaskExecutionCancelRequestBody
 *
 * @typedef {TaskExecutionCancelRequestBody} TaskExecutionCancelRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['cancelTaskExecution']['responses']['200']['content']['application/json']} TaskExecutionCancelResponseBody
 *
 * @typedef {TaskExecutionCancelResponseBody} TaskExecutionCancelResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} taskId
 * @param {string} taskExecutionId
 * @returns {Promise<TaskExecutionCancelResponse>}
 */
export function cancelTaskExecution(client: ChatBotKitClient, taskId: string, taskExecutionId: string): Promise<TaskExecutionCancelResponse>;
export type ChatBotKitClient = import("../../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
export type TaskExecutionListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type TaskExecutionListResponse = import("../../types/api/v1.js").operations["listTaskExecutions"]["responses"]["200"]["content"]["application/json"];
export type TaskExecutionListStreamType = import("../../types/api/v1.js").operations["listTaskExecutions"]["responses"]["200"]["content"]["application/jsonl"];
export type TaskExecutionCancelRequestBody = import("../../types/api/v1.js").operations["cancelTaskExecution"]["requestBody"]["content"]["application/json"];
export type TaskExecutionCancelRequest = TaskExecutionCancelRequestBody;
export type TaskExecutionCancelResponseBody = import("../../types/api/v1.js").operations["cancelTaskExecution"]["responses"]["200"]["content"]["application/json"];
export type TaskExecutionCancelResponse = TaskExecutionCancelResponseBody;
