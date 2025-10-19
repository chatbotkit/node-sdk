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
 *   name?: string,
 *   description?: string,
 *   contactId?: string,
 *   botId?: string,
 *   schedule?: string
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
 * @param {string} contactId
 * @param {TaskListRequest} [request]
 * @returns {ResponsePromise<TaskListResponse,TaskListStreamType>}
 */
export function listTasks(client: ChatBotKitClient, contactId: string, request?: TaskListRequest | undefined): ResponsePromise<TaskListResponse, TaskListStreamType>;
export type ChatBotKitClient = import('../../client.js').ChatBotKitClient;
export type ResponsePromise<T, U> = import('../../client.js').ResponsePromise<T, U>;
export type TaskOptions = {
    name?: string;
    description?: string;
    contactId?: string;
    botId?: string;
    schedule?: string;
    meta?: Record<string, any>;
};
export type TaskInstance = TaskOptions & {
    id: string;
    createdAt: number;
    updatedAt: number;
};
export type TaskListRequest = {
    cursor?: string;
    order?: 'desc' | 'asc';
    take?: number;
    meta?: Record<string, string>;
};
export type TaskListResponse = {
    items: TaskInstance[];
};
export type TaskListStreamItemType = {
    type: 'item';
    data: TaskInstance;
};
export type TaskListStreamType = TaskListStreamItemType;
