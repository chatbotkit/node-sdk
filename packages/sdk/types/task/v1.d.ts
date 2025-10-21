/**
 * @typedef {import('../client.js').ChatBotKitClient} ChatBotKitClient
 */
/**
 * @template T
 * @template U
 * @typedef {import('../client.js').ResponsePromise<T,U>} ResponsePromise
 */
/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} TaskListRequest
 *
 * @typedef {import('../types/api/v1.js').operations['listTasks']['responses']['200']['content']['application/json']} TaskListResponse
 *
 * @typedef {import('../types/api/v1.js').operations['listTasks']['responses']['200']['content']['application/jsonl']} TaskListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {TaskListRequest} [request]
 * @returns {ResponsePromise<TaskListResponse,TaskListStreamType>}
 */
export function listTasks(client: ChatBotKitClient, request?: TaskListRequest): ResponsePromise<TaskListResponse, TaskListStreamType>;
/**
 * @typedef {import('../types/api/v1.js').operations['fetchTask']['responses']['200']['content']['application/json']} TaskFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} taskId
 * @returns {ResponsePromise<TaskFetchResponse,never>}
 */
export function fetchTask(client: ChatBotKitClient, taskId: string): ResponsePromise<TaskFetchResponse, never>;
/**
 * @typedef {{
 *   name?: string,
 *   description?: string,
 *   contactId?: string,
 *   botId?: string,
 *   schedule?: string,
 *   sessionDuration?: number,
 *   meta?: Record<string,any>
 * }} TaskCreateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['createTask']['requestBody']['content']['application/json']} TaskCreateRequestBody
 *
 * @typedef {import('../types/api/v1.js').operations['createTask']['responses']['200']['content']['application/json']} TaskCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {TaskCreateRequest} request
 * @returns {Promise<TaskCreateResponse>}
 */
export function createTask(client: ChatBotKitClient, request: TaskCreateRequest): Promise<TaskCreateResponse>;
/**
 * @typedef {{
 *   name?: string,
 *   description?: string,
 *   contactId?: string,
 *   botId?: string,
 *   schedule?: string,
 *   sessionDuration?: number,
 *   meta?: Record<string,any>
 * }} TaskUpdateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['updateTask']['requestBody']['content']['application/json']} TaskUpdateRequestBody
 *
 * @typedef {import('../types/api/v1.js').operations['updateTask']['responses']['200']['content']['application/json']} TaskUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} taskId
 * @param {TaskUpdateRequest} request
 * @returns {Promise<TaskUpdateResponse>}
 */
export function updateTask(client: ChatBotKitClient, taskId: string, request: TaskUpdateRequest): Promise<TaskUpdateResponse>;
/**
 * @typedef {import('../types/api/v1.js').operations['deleteTask']['requestBody']['content']['application/json']} TaskDeleteRequestBody
 *
 * @typedef {import('../types/api/v1.js').operations['deleteTask']['responses']['200']['content']['application/json']} TaskDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} taskId
 * @returns {Promise<TaskDeleteResponse>}
 */
export function deleteTask(client: ChatBotKitClient, taskId: string): Promise<TaskDeleteResponse>;
/**
 * @typedef {import('../types/api/v1.js').operations['triggerTask']['requestBody']['content']['application/json']} TaskTriggerRequestBody
 *
 * @typedef {import('../types/api/v1.js').operations['triggerTask']['responses']['200']['content']['application/json']} TaskTriggerResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} taskId
 * @returns {Promise<TaskTriggerResponse>}
 */
export function triggerTask(client: ChatBotKitClient, taskId: string): Promise<TaskTriggerResponse>;
/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number
 * }} TaskExportRequest
 *
 * @typedef {import('../types/api/v1.js').operations['exportTasks']['responses']['200']['content']['application/jsonl']} TaskExportStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {TaskExportRequest} [request]
 * @returns {ResponsePromise<never,TaskExportStreamType>}
 */
export function exportTasks(client: ChatBotKitClient, request?: TaskExportRequest): ResponsePromise<never, TaskExportStreamType>;
export type ChatBotKitClient = import("../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../client.js").ResponsePromise<T, U>;
export type TaskListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type TaskListResponse = import("../types/api/v1.js").operations["listTasks"]["responses"]["200"]["content"]["application/json"];
export type TaskListStreamType = import("../types/api/v1.js").operations["listTasks"]["responses"]["200"]["content"]["application/jsonl"];
export type TaskFetchResponse = import("../types/api/v1.js").operations["fetchTask"]["responses"]["200"]["content"]["application/json"];
export type TaskCreateRequest = {
    name?: string;
    description?: string;
    contactId?: string;
    botId?: string;
    schedule?: string;
    sessionDuration?: number;
    meta?: Record<string, any>;
};
export type TaskCreateRequestBody = import("../types/api/v1.js").operations["createTask"]["requestBody"]["content"]["application/json"];
export type TaskCreateResponse = import("../types/api/v1.js").operations["createTask"]["responses"]["200"]["content"]["application/json"];
export type TaskUpdateRequest = {
    name?: string;
    description?: string;
    contactId?: string;
    botId?: string;
    schedule?: string;
    sessionDuration?: number;
    meta?: Record<string, any>;
};
export type TaskUpdateRequestBody = import("../types/api/v1.js").operations["updateTask"]["requestBody"]["content"]["application/json"];
export type TaskUpdateResponse = import("../types/api/v1.js").operations["updateTask"]["responses"]["200"]["content"]["application/json"];
export type TaskDeleteRequestBody = import("../types/api/v1.js").operations["deleteTask"]["requestBody"]["content"]["application/json"];
export type TaskDeleteResponse = import("../types/api/v1.js").operations["deleteTask"]["responses"]["200"]["content"]["application/json"];
export type TaskTriggerRequestBody = import("../types/api/v1.js").operations["triggerTask"]["requestBody"]["content"]["application/json"];
export type TaskTriggerResponse = import("../types/api/v1.js").operations["triggerTask"]["responses"]["200"]["content"]["application/json"];
export type TaskExportRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
};
export type TaskExportStreamType = import("../types/api/v1.js").operations["exportTasks"]["responses"]["200"]["content"]["application/jsonl"];
