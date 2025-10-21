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
 * }} BotListRequest
 *
 * @typedef {import('../types/api/v1.js').operations['listBots']['responses']['200']['content']['application/json']} BotListResponse
 *
 * @typedef {import('../types/api/v1.js').operations['listBots']['responses']['200']['content']['application/jsonl']} BotListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {BotListRequest} [request]
 * @returns {ResponsePromise<BotListResponse,BotListStreamType>}
 */
export function listBots(client: ChatBotKitClient, request?: BotListRequest): ResponsePromise<BotListResponse, BotListStreamType>;
/**
 * @typedef {import('../types/api/v1.js').operations['fetchBot']['responses']['200']['content']['application/json']} BotFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} botId
 * @returns {ResponsePromise<BotFetchResponse,never>}
 */
export function fetchBot(client: ChatBotKitClient, botId: string): ResponsePromise<BotFetchResponse, never>;
/**
 * @typedef {{
 *   model?: import('../model/v1.js').Model,
 *   name?: string,
 *   description?: string,
 *   backstory?: string,
 *   datasetId?: string,
 *   skillsetId?: string,
 *   privacy?: boolean,
 *   moderation?: boolean,
 *   visibility?: 'private'|'protected'|'public',
 *   meta?: Record<string,any>,
 *   blueprintId?: string
 * }} BotCreateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['createBot']['requestBody']['content']['application/json']} BotCreateRequestBody
 *
 * @typedef {import('../types/api/v1.js').operations['createBot']['responses']['200']['content']['application/json']} BotCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {BotCreateRequest} request
 * @returns {Promise<BotCreateResponse>}
 */
export function createBot(client: ChatBotKitClient, request: BotCreateRequest): Promise<BotCreateResponse>;
/**
 * @typedef {{
 *   model?: import('../model/v1.js').Model,
 *   name?: string,
 *   description?: string,
 *   backstory?: string,
 *   datasetId?: string,
 *   skillsetId?: string,
 *   privacy?: boolean,
 *   moderation?: boolean,
 *   visibility?: 'private'|'protected'|'public',
 *   meta?: Record<string,any>,
 *   blueprintId?: string
 * }} BotUpdateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['updateBot']['requestBody']['content']['application/json']} BotUpdateRequestBody
 *
 * @typedef {import('../types/api/v1.js').operations['updateBot']['responses']['200']['content']['application/json']} BotUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} botId
 * @param {BotUpdateRequest} request
 * @returns {Promise<BotUpdateResponse>}
 */
export function updateBot(client: ChatBotKitClient, botId: string, request: BotUpdateRequest): Promise<BotUpdateResponse>;
/**
 * @typedef {import('../types/api/v1.js').operations['deleteBot']['requestBody']['content']['application/json']} BotDeleteRequestBody
 *
 * @typedef {import('../types/api/v1.js').operations['deleteBot']['responses']['200']['content']['application/json']} BotDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} botId
 * @returns {Promise<BotDeleteResponse>}
 */
export function deleteBot(client: ChatBotKitClient, botId: string): Promise<BotDeleteResponse>;
/**
 * @typedef {{
 *   value?: number,
 *   reason?: string
 * }} BotUpvoteRequest
 *
 * @typedef {import('../types/api/v1.js').operations['upvoteBot']['requestBody']['content']['application/json']} BotUpvoteRequestBody
 *
 * @typedef {import('../types/api/v1.js').operations['upvoteBot']['responses']['200']['content']['application/json']} BotUpvoteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} botId
 * @param {BotUpvoteRequest} request
 * @returns {Promise<BotUpvoteResponse>}
 */
export function upvoteBot(client: ChatBotKitClient, botId: string, request: BotUpvoteRequest): Promise<BotUpvoteResponse>;
/**
 * @typedef {{
 *   value?: number,
 *   reason?: string
 * }} BotDownvoteRequest
 *
 * @typedef {import('../types/api/v1.js').operations['downvoteBot']['requestBody']['content']['application/json']} BotDownvoteRequestBody
 *
 * @typedef {import('../types/api/v1.js').operations['downvoteBot']['responses']['200']['content']['application/json']} BotDownvoteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} botId
 * @param {BotDownvoteRequest} request
 * @returns {Promise<BotDownvoteResponse>}
 */
export function downvoteBot(client: ChatBotKitClient, botId: string, request: BotDownvoteRequest): Promise<BotDownvoteResponse>;
export type ChatBotKitClient = import("../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../client.js").ResponsePromise<T, U>;
export type BotListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type BotListResponse = import("../types/api/v1.js").operations["listBots"]["responses"]["200"]["content"]["application/json"];
export type BotListStreamType = import("../types/api/v1.js").operations["listBots"]["responses"]["200"]["content"]["application/jsonl"];
export type BotFetchResponse = import("../types/api/v1.js").operations["fetchBot"]["responses"]["200"]["content"]["application/json"];
export type BotCreateRequest = {
    model?: import("../model/v1.js").Model;
    name?: string;
    description?: string;
    backstory?: string;
    datasetId?: string;
    skillsetId?: string;
    privacy?: boolean;
    moderation?: boolean;
    visibility?: "private" | "protected" | "public";
    meta?: Record<string, any>;
    blueprintId?: string;
};
export type BotCreateRequestBody = import("../types/api/v1.js").operations["createBot"]["requestBody"]["content"]["application/json"];
export type BotCreateResponse = import("../types/api/v1.js").operations["createBot"]["responses"]["200"]["content"]["application/json"];
export type BotUpdateRequest = {
    model?: import("../model/v1.js").Model;
    name?: string;
    description?: string;
    backstory?: string;
    datasetId?: string;
    skillsetId?: string;
    privacy?: boolean;
    moderation?: boolean;
    visibility?: "private" | "protected" | "public";
    meta?: Record<string, any>;
    blueprintId?: string;
};
export type BotUpdateRequestBody = import("../types/api/v1.js").operations["updateBot"]["requestBody"]["content"]["application/json"];
export type BotUpdateResponse = import("../types/api/v1.js").operations["updateBot"]["responses"]["200"]["content"]["application/json"];
export type BotDeleteRequestBody = import("../types/api/v1.js").operations["deleteBot"]["requestBody"]["content"]["application/json"];
export type BotDeleteResponse = import("../types/api/v1.js").operations["deleteBot"]["responses"]["200"]["content"]["application/json"];
export type BotUpvoteRequest = {
    value?: number;
    reason?: string;
};
export type BotUpvoteRequestBody = import("../types/api/v1.js").operations["upvoteBot"]["requestBody"]["content"]["application/json"];
export type BotUpvoteResponse = import("../types/api/v1.js").operations["upvoteBot"]["responses"]["200"]["content"]["application/json"];
export type BotDownvoteRequest = {
    value?: number;
    reason?: string;
};
export type BotDownvoteRequestBody = import("../types/api/v1.js").operations["downvoteBot"]["requestBody"]["content"]["application/json"];
export type BotDownvoteResponse = import("../types/api/v1.js").operations["downvoteBot"]["responses"]["200"]["content"]["application/json"];
