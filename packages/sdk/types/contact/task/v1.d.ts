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
 * }} TaskListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listContactTasks']['responses']['200']['content']['application/json']} TaskListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listContactTasks']['responses']['200']['content']['application/jsonl']} TaskListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} contactId
 * @param {TaskListRequest} [request]
 * @returns {ResponsePromise<TaskListResponse,TaskListStreamType>}
 */
export function listTasks(client: ChatBotKitClient, contactId: string, request?: TaskListRequest): ResponsePromise<TaskListResponse, TaskListStreamType>;
export type ChatBotKitClient = import("../../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
export type TaskListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type TaskListResponse = import("../../types/api/v1.js").operations["listContactTasks"]["responses"]["200"]["content"]["application/json"];
export type TaskListStreamType = import("../../types/api/v1.js").operations["listContactTasks"]["responses"]["200"]["content"]["application/jsonl"];
