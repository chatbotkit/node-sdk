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
 *   name?: string,
 *   description?: string,
 *   contactId?: string,
 *   botId?: string,
 *   schedule?: string,
 *   sessionDuration?: number,
 *   meta?: Record<string,any>
 * }} TaskOptions
 *
 * @typedef {TaskOptions & {
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number
 * }} TaskInstance
 */
/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} TaskListRequest
 *
 * @typedef {{items: TaskInstance[]}} TaskListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: TaskInstance
 * }} TaskListStreamItemType
 *
 * @typedef {TaskListStreamItemType} TaskListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {TaskListRequest} [request]
 * @returns {ResponsePromise<TaskListResponse,TaskListStreamType>}
 */
export function listTasks(client: ChatBotKitClient, request?: TaskListRequest): ResponsePromise<TaskListResponse, TaskListStreamType>;
/**
 * @typedef {TaskInstance & {
 * }} TaskFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} taskId
 * @returns {ResponsePromise<TaskFetchResponse,never>}
 */
export function fetchTask(client: ChatBotKitClient, taskId: string): ResponsePromise<TaskFetchResponse, never>;
/**
 * @typedef {TaskOptions & {
 * }} TaskCreateRequest
 *
 * @typedef {{
 *   id: string
 * }} TaskCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {TaskCreateRequest} request
 * @returns {Promise<TaskCreateResponse>}
 */
export function createTask(client: ChatBotKitClient, request: TaskCreateRequest): Promise<TaskCreateResponse>;
/**
 * @typedef {TaskOptions & {
 * }} TaskUpdateRequest
 *
 * @typedef {{
 *   id: string
 * }} TaskUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} taskId
 * @param {TaskUpdateRequest} request
 * @returns {Promise<TaskUpdateResponse>}
 */
export function updateTask(client: ChatBotKitClient, taskId: string, request: TaskUpdateRequest): Promise<TaskUpdateResponse>;
/**
 * @typedef {{
 *   id: string
 * }} TaskDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} taskId
 * @returns {Promise<TaskDeleteResponse>}
 */
export function deleteTask(client: ChatBotKitClient, taskId: string): Promise<TaskDeleteResponse>;
/**
 * @typedef {{
 *   id: string
 * }} TaskTriggerResponse
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
 * @typedef {{
 *   type: 'item',
 *   data: TaskInstance
 * }} TaskExportStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {TaskExportRequest} [request]
 * @returns {ResponsePromise<never,TaskExportStreamType>}
 */
export function exportTasks(client: ChatBotKitClient, request?: TaskExportRequest): ResponsePromise<never, TaskExportStreamType>;
export type ChatBotKitClient = import("../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../client.js").ResponsePromise<T, U>;
export type TaskOptions = {
    name?: string;
    description?: string;
    contactId?: string;
    botId?: string;
    schedule?: string;
    sessionDuration?: number;
    meta?: Record<string, any>;
};
export type TaskInstance = TaskOptions & {
    id: string;
    createdAt: number;
    updatedAt: number;
};
export type TaskListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type TaskListResponse = {
    items: TaskInstance[];
};
export type TaskListStreamItemType = {
    type: "item";
    data: TaskInstance;
};
export type TaskListStreamType = TaskListStreamItemType;
export type TaskFetchResponse = TaskInstance & {};
export type TaskCreateRequest = TaskOptions & {};
export type TaskCreateResponse = {
    id: string;
};
export type TaskUpdateRequest = TaskOptions & {};
export type TaskUpdateResponse = {
    id: string;
};
export type TaskDeleteResponse = {
    id: string;
};
export type TaskTriggerResponse = {
    id: string;
};
export type TaskExportRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
};
export type TaskExportStreamType = {
    type: "item";
    data: TaskInstance;
};
