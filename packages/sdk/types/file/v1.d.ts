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
 * }} FileListRequest
 *
 * @typedef {import('../types/api/v1.js').operations['listFiles']['responses']['200']['content']['application/json']} FileListResponse
 *
 * @typedef {import('../types/api/v1.js').operations['listFiles']['responses']['200']['content']['application/jsonl']} FileListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {FileListRequest} [request]
 * @returns {ResponsePromise<FileListResponse,FileListStreamType>}
 */
export function listFiles(client: ChatBotKitClient, request?: FileListRequest): ResponsePromise<FileListResponse, FileListStreamType>;
/**
 * @typedef {import('../types/api/v1.js').operations['fetchFile']['responses']['200']['content']['application/json']} FileFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} fileId
 * @returns {ResponsePromise<FileFetchResponse,never>}
 */
export function fetchFile(client: ChatBotKitClient, fileId: string): ResponsePromise<FileFetchResponse, never>;
/**
 * @typedef {{
 *   name?: string,
 *   description?: string,
 *   visibility?: 'private'|'protected'|'public',
 *   meta?: Record<string,any>,
 *   blueprintId?: string
 * }} FileCreateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['createFile']['requestBody']['content']['application/json']} FileCreateRequestBody
 *
 * @typedef {import('../types/api/v1.js').operations['createFile']['responses']['200']['content']['application/json']} FileCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {FileCreateRequest} request
 * @returns {Promise<FileCreateResponse>}
 */
export function createFile(client: ChatBotKitClient, request: FileCreateRequest): Promise<FileCreateResponse>;
/**
 * @typedef {{
 *   name?: string,
 *   description?: string,
 *   visibility?: 'private'|'protected'|'public',
 *   meta?: Record<string,any>,
 *   blueprintId?: string
 * }} FileUpdateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['updateFile']['requestBody']['content']['application/json']} FileUpdateRequestBody
 *
 * @typedef {import('../types/api/v1.js').operations['updateFile']['responses']['200']['content']['application/json']} FileUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} fileId
 * @param {FileUpdateRequest} request
 * @returns {Promise<FileUpdateResponse>}
 */
export function updateFile(client: ChatBotKitClient, fileId: string, request: FileUpdateRequest): Promise<FileUpdateResponse>;
/**
 * @typedef {import('../types/api/v1.js').operations['deleteFile']['requestBody']['content']['application/json']} FileDeleteRequestBody
 *
 * @typedef {import('../types/api/v1.js').operations['deleteFile']['responses']['200']['content']['application/json']} FileDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} fileId
 * @returns {Promise<FileDeleteResponse>}
 */
export function deleteFile(client: ChatBotKitClient, fileId: string): Promise<FileDeleteResponse>;
/**
 * @typedef {{
 *   data: string|ArrayBuffer
 *   type: string,
 *   name?: string,
 * }} FileUploadRequest
 *
 * @typedef {import('../types/api/v1.js').operations['uploadFile']['requestBody']['content']['application/json']} FileUploadRequestBody
 *
 * @typedef {import('../types/api/v1.js').operations['uploadFile']['responses']['200']['content']['application/json']} FileUploadResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} fileId
 * @param {FileUploadRequest} request
 * @returns {Promise<FileUploadResponse>}
 */
export function uploadFile(client: ChatBotKitClient, fileId: string, request: FileUploadRequest): Promise<FileUploadResponse>;
/**
 * @typedef {{
 *   url: string,
 *   headers: Headers,
 *   data: ArrayBuffer
 * }} FileDownloadResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} fileId
 * @returns {Promise<FileDownloadResponse>}
 */
export function downloadFile(client: ChatBotKitClient, fileId: string): Promise<FileDownloadResponse>;
/**
 * @typedef {import('../types/api/v1.js').operations['syncFile']['requestBody']['content']['application/json']} FileSyncRequestBody
 *
 * @typedef {import('../types/api/v1.js').operations['syncFile']['responses']['200']['content']['application/json']} FileSyncResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} fileId
 * @returns {Promise<FileSyncResponse>}
 */
export function syncFile(client: ChatBotKitClient, fileId: string): Promise<FileSyncResponse>;
export type ChatBotKitClient = import("../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../client.js").ResponsePromise<T, U>;
export type FileListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type FileListResponse = import("../types/api/v1.js").operations["listFiles"]["responses"]["200"]["content"]["application/json"];
export type FileListStreamType = import("../types/api/v1.js").operations["listFiles"]["responses"]["200"]["content"]["application/jsonl"];
export type FileFetchResponse = import("../types/api/v1.js").operations["fetchFile"]["responses"]["200"]["content"]["application/json"];
export type FileCreateRequest = {
    name?: string;
    description?: string;
    visibility?: "private" | "protected" | "public";
    meta?: Record<string, any>;
    blueprintId?: string;
};
export type FileCreateRequestBody = import("../types/api/v1.js").operations["createFile"]["requestBody"]["content"]["application/json"];
export type FileCreateResponse = import("../types/api/v1.js").operations["createFile"]["responses"]["200"]["content"]["application/json"];
export type FileUpdateRequest = {
    name?: string;
    description?: string;
    visibility?: "private" | "protected" | "public";
    meta?: Record<string, any>;
    blueprintId?: string;
};
export type FileUpdateRequestBody = import("../types/api/v1.js").operations["updateFile"]["requestBody"]["content"]["application/json"];
export type FileUpdateResponse = import("../types/api/v1.js").operations["updateFile"]["responses"]["200"]["content"]["application/json"];
export type FileDeleteRequestBody = import("../types/api/v1.js").operations["deleteFile"]["requestBody"]["content"]["application/json"];
export type FileDeleteResponse = import("../types/api/v1.js").operations["deleteFile"]["responses"]["200"]["content"]["application/json"];
export type FileUploadRequest = {
    data: string | ArrayBuffer;
    type: string;
    name?: string;
};
export type FileUploadRequestBody = import("../types/api/v1.js").operations["uploadFile"]["requestBody"]["content"]["application/json"];
export type FileUploadResponse = import("../types/api/v1.js").operations["uploadFile"]["responses"]["200"]["content"]["application/json"];
export type FileDownloadResponse = {
    url: string;
    headers: Headers;
    data: ArrayBuffer;
};
export type FileSyncRequestBody = import("../types/api/v1.js").operations["syncFile"]["requestBody"]["content"]["application/json"];
export type FileSyncResponse = import("../types/api/v1.js").operations["syncFile"]["responses"]["200"]["content"]["application/json"];
