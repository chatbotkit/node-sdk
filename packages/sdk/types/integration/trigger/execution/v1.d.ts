/**
 * @typedef {import('../../../client.js').ChatBotKitClient} ChatBotKitClient
 */
/**
 * @template T
 * @template U
 * @typedef {import('../../../client.js').ResponsePromise<T,U>} ResponsePromise
 */
/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} TriggerIntegrationExecutionListRequest
 *
 * @typedef {import('../../../types/api/v1.js').operations['listTriggerIntegrationExecutions']['responses']['200']['content']['application/json']} TriggerIntegrationExecutionListResponse
 *
 * @typedef {import('../../../types/api/v1.js').operations['listTriggerIntegrationExecutions']['responses']['200']['content']['application/jsonl']} TriggerIntegrationExecutionListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} triggerId
 * @param {TriggerIntegrationExecutionListRequest} [request]
 * @returns {ResponsePromise<TriggerIntegrationExecutionListResponse,TriggerIntegrationExecutionListStreamType>}
 */
export function listTriggerIntegrationExecutions(client: ChatBotKitClient, triggerId: string, request?: TriggerIntegrationExecutionListRequest): ResponsePromise<TriggerIntegrationExecutionListResponse, TriggerIntegrationExecutionListStreamType>;
/**
 * @typedef {import('../../../types/api/v1.js').operations['cancelTriggerIntegrationExecution']['requestBody']['content']['application/json']} TriggerIntegrationExecutionCancelRequestBody
 *
 * @typedef {TriggerIntegrationExecutionCancelRequestBody} TriggerIntegrationExecutionCancelRequest
 *
 * @typedef {import('../../../types/api/v1.js').operations['cancelTriggerIntegrationExecution']['responses']['200']['content']['application/json']} TriggerIntegrationExecutionCancelResponseBody
 *
 * @typedef {TriggerIntegrationExecutionCancelResponseBody} TriggerIntegrationExecutionCancelResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} triggerId
 * @param {string} triggerExecutionId
 * @returns {Promise<TriggerIntegrationExecutionCancelResponse>}
 */
export function cancelTriggerIntegrationExecution(client: ChatBotKitClient, triggerId: string, triggerExecutionId: string): Promise<TriggerIntegrationExecutionCancelResponse>;
export type ChatBotKitClient = import("../../../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../../../client.js").ResponsePromise<T, U>;
export type TriggerIntegrationExecutionListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type TriggerIntegrationExecutionListResponse = import("../../../types/api/v1.js").operations["listTriggerIntegrationExecutions"]["responses"]["200"]["content"]["application/json"];
export type TriggerIntegrationExecutionListStreamType = import("../../../types/api/v1.js").operations["listTriggerIntegrationExecutions"]["responses"]["200"]["content"]["application/jsonl"];
export type TriggerIntegrationExecutionCancelRequestBody = import("../../../types/api/v1.js").operations["cancelTriggerIntegrationExecution"]["requestBody"]["content"]["application/json"];
export type TriggerIntegrationExecutionCancelRequest = TriggerIntegrationExecutionCancelRequestBody;
export type TriggerIntegrationExecutionCancelResponseBody = import("../../../types/api/v1.js").operations["cancelTriggerIntegrationExecution"]["responses"]["200"]["content"]["application/json"];
export type TriggerIntegrationExecutionCancelResponse = TriggerIntegrationExecutionCancelResponseBody;
