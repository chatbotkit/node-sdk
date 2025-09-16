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
 *   meta?: Record<string,any>
 * }} FileOptions
 *
 * @typedef {FileOptions & {
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number
 * }} FileInstance
 */
/**
 * @typedef {{cursor?: string, order?: 'desc'|'asc', take?: number, meta?: Record<string,string>}} FileListRequest
 * @typedef {{items: FileInstance[]}} FileListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: FileInstance
 * }} FileListStreamItemType
 *
 * @typedef {FileListStreamItemType} FileListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {FileListRequest} [request]
 * @returns {ResponsePromise<FileListResponse,FileListStreamType>}
 */
export function listFiles(client: ChatBotKitClient, request?: FileListRequest | undefined): ResponsePromise<FileListResponse, FileListStreamType>;
/**
 * @typedef {FileInstance & {
 * }} FileFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} fileId
 * @returns {ResponsePromise<FileFetchResponse,never>}
 */
export function fetchFile(client: ChatBotKitClient, fileId: string): ResponsePromise<FileFetchResponse, never>;
/**
 * @typedef {FileOptions & {
 * }} FileCreateRequest
 *
 * @typedef {{
 *   id: string
 * }} FileCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {FileCreateRequest} request
 * @returns {Promise<FileCreateResponse>}
 */
export function createFile(client: ChatBotKitClient, request: FileCreateRequest): Promise<FileCreateResponse>;
/**
 * @typedef {FileOptions & {
 * }} FileUpdateRequest
 *
 * @typedef {{
 *   id: string
 * }} FileUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} fileId
 * @param {FileUpdateRequest} request
 * @returns {Promise<FileUpdateResponse>}
 */
export function updateFile(client: ChatBotKitClient, fileId: string, request: FileUpdateRequest): Promise<FileUpdateResponse>;
/**
 * @typedef {{
 *   id: string
 * }} FileDeleteResponse
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
 * @typedef {{
 *   id: string
 * }} FileUploadResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} fileId
 * @param {FileUploadRequest} request
 * @returns {Promise<FileUploadResponse>}
 */
export function uploadFile(client: ChatBotKitClient, fileId: string, request: FileUploadRequest): Promise<FileUploadResponse>;
/**
 * @typedef {{
 *   data: ArrayBuffer
 * }} FileDownloadResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} fileId
 * @returns {Promise<FileDownloadResponse>}
 */
export function downloadFile(client: ChatBotKitClient, fileId: string): Promise<FileDownloadResponse>;
export type ChatBotKitClient = import('../client.js').ChatBotKitClient;
export type ResponsePromise<T, U> = import('../client.js').ResponsePromise<T, U>;
export type FileOptions = {
    name?: string;
    description?: string;
    meta?: Record<string, any>;
};
export type FileInstance = FileOptions & {
    id: string;
    createdAt: number;
    updatedAt: number;
};
export type FileListRequest = {
    cursor?: string;
    order?: 'desc' | 'asc';
    take?: number;
    meta?: Record<string, string>;
};
export type FileListResponse = {
    items: FileInstance[];
};
export type FileListStreamItemType = {
    type: 'item';
    data: FileInstance;
};
export type FileListStreamType = FileListStreamItemType;
export type FileFetchResponse = FileInstance & {};
export type FileCreateRequest = FileOptions & {};
export type FileCreateResponse = {
    id: string;
};
export type FileUpdateRequest = FileOptions & {};
export type FileUpdateResponse = {
    id: string;
};
export type FileDeleteResponse = {
    id: string;
};
export type FileUploadRequest = {
    data: string | ArrayBuffer;
    type: string;
    name?: string;
};
export type FileUploadResponse = {
    id: string;
};
export type FileDownloadResponse = {
    headers: Headers;
    data: ArrayBuffer;
};
