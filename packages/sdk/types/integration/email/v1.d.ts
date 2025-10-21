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
 * }} EmailIntegrationListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listEmailIntegrations']['responses']['200']['content']['application/json']} EmailIntegrationListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listEmailIntegrations']['responses']['200']['content']['application/jsonl']} EmailIntegrationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {EmailIntegrationListRequest} [request]
 * @returns {ResponsePromise<EmailIntegrationListResponse,EmailIntegrationListStreamType>}
 */
export function listEmailIntegrations(client: ChatBotKitClient, request?: EmailIntegrationListRequest): ResponsePromise<EmailIntegrationListResponse, EmailIntegrationListStreamType>;
/**
 * @typedef {import('../../types/api/v1.js').operations['fetchEmailIntegration']['responses']['200']['content']['application/json']} EmailIntegrationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} emailId
 * @returns {ResponsePromise<EmailIntegrationFetchResponse,never>}
 */
export function fetchEmailIntegration(client: ChatBotKitClient, emailId: string): ResponsePromise<EmailIntegrationFetchResponse, never>;
/**
 * @typedef {import('../../types/api/v1.js').operations['createEmailIntegration']['requestBody']['content']['application/json']} EmailIntegrationCreateRequestBody
 *
 * @typedef {EmailIntegrationCreateRequestBody} EmailIntegrationCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createEmailIntegration']['responses']['200']['content']['application/json']} EmailIntegrationCreateResponseBody
 *
 * @typedef {EmailIntegrationCreateResponseBody} EmailIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {EmailIntegrationCreateRequest} request
 * @returns {Promise<EmailIntegrationCreateResponse>}
 */
export function createEmailIntegration(client: ChatBotKitClient, request: EmailIntegrationCreateRequest): Promise<EmailIntegrationCreateResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['updateEmailIntegration']['requestBody']['content']['application/json']} EmailIntegrationUpdateRequestBody
 *
 * @typedef {EmailIntegrationUpdateRequestBody} EmailIntegrationUpdateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['updateEmailIntegration']['responses']['200']['content']['application/json']} EmailIntegrationUpdateResponseBody
 *
 * @typedef {EmailIntegrationUpdateResponseBody} EmailIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} emailId
 * @param {EmailIntegrationUpdateRequest} request
 * @returns {Promise<EmailIntegrationUpdateResponse>}
 */
export function updateEmailIntegration(client: ChatBotKitClient, emailId: string, request: EmailIntegrationUpdateRequest): Promise<EmailIntegrationUpdateResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['deleteEmailIntegration']['requestBody']['content']['application/json']} EmailIntegrationDeleteRequestBody
 *
 * @typedef {EmailIntegrationDeleteRequestBody} EmailIntegrationDeleteRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['deleteEmailIntegration']['responses']['200']['content']['application/json']} EmailIntegrationDeleteResponseBody
 *
 * @typedef {EmailIntegrationDeleteResponseBody} EmailIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} emailId
 * @returns {Promise<EmailIntegrationDeleteResponse>}
 */
export function deleteEmailIntegration(client: ChatBotKitClient, emailId: string): Promise<EmailIntegrationDeleteResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['setupEmailIntegration']['requestBody']['content']['application/json']} EmailIntegrationSetupRequestBody
 *
 * @typedef {EmailIntegrationSetupRequestBody} EmailIntegrationSetupRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['setupEmailIntegration']['responses']['200']['content']['application/json']} EmailIntegrationSetupResponseBody
 *
 * @typedef {EmailIntegrationSetupResponseBody} EmailIntegrationSetupResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} emailId
 * @returns {Promise<EmailIntegrationSetupResponse>}
 */
export function setupEmailIntegration(client: ChatBotKitClient, emailId: string): Promise<EmailIntegrationSetupResponse>;
export type ChatBotKitClient = import("../../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
export type EmailIntegrationListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type EmailIntegrationListResponse = import("../../types/api/v1.js").operations["listEmailIntegrations"]["responses"]["200"]["content"]["application/json"];
export type EmailIntegrationListStreamType = import("../../types/api/v1.js").operations["listEmailIntegrations"]["responses"]["200"]["content"]["application/jsonl"];
export type EmailIntegrationFetchResponse = import("../../types/api/v1.js").operations["fetchEmailIntegration"]["responses"]["200"]["content"]["application/json"];
export type EmailIntegrationCreateRequestBody = import("../../types/api/v1.js").operations["createEmailIntegration"]["requestBody"]["content"]["application/json"];
export type EmailIntegrationCreateRequest = EmailIntegrationCreateRequestBody;
export type EmailIntegrationCreateResponseBody = import("../../types/api/v1.js").operations["createEmailIntegration"]["responses"]["200"]["content"]["application/json"];
export type EmailIntegrationCreateResponse = EmailIntegrationCreateResponseBody;
export type EmailIntegrationUpdateRequestBody = import("../../types/api/v1.js").operations["updateEmailIntegration"]["requestBody"]["content"]["application/json"];
export type EmailIntegrationUpdateRequest = EmailIntegrationUpdateRequestBody;
export type EmailIntegrationUpdateResponseBody = import("../../types/api/v1.js").operations["updateEmailIntegration"]["responses"]["200"]["content"]["application/json"];
export type EmailIntegrationUpdateResponse = EmailIntegrationUpdateResponseBody;
export type EmailIntegrationDeleteRequestBody = import("../../types/api/v1.js").operations["deleteEmailIntegration"]["requestBody"]["content"]["application/json"];
export type EmailIntegrationDeleteRequest = EmailIntegrationDeleteRequestBody;
export type EmailIntegrationDeleteResponseBody = import("../../types/api/v1.js").operations["deleteEmailIntegration"]["responses"]["200"]["content"]["application/json"];
export type EmailIntegrationDeleteResponse = EmailIntegrationDeleteResponseBody;
export type EmailIntegrationSetupRequestBody = import("../../types/api/v1.js").operations["setupEmailIntegration"]["requestBody"]["content"]["application/json"];
export type EmailIntegrationSetupRequest = EmailIntegrationSetupRequestBody;
export type EmailIntegrationSetupResponseBody = import("../../types/api/v1.js").operations["setupEmailIntegration"]["responses"]["200"]["content"]["application/json"];
export type EmailIntegrationSetupResponse = EmailIntegrationSetupResponseBody;
