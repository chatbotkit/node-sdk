/**
 * @typedef {import('../../client.js').ChatBotKitClient} ChatBotKitClient
 */
/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */
/**
 * @typedef {import('../../types/api/v1.js').operations['createComputerSession']['requestBody']['content']['application/json']} ComputerSessionCreateRequestBody
 *
 * @typedef {ComputerSessionCreateRequestBody} ComputerSessionCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createComputerSession']['responses']['200']['content']['application/json']} ComputerSessionCreateResponseBody
 *
 * @typedef {ComputerSessionCreateResponseBody} ComputerSessionCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} computerId
 * @param {ComputerSessionCreateRequest} [request]
 * @returns {Promise<ComputerSessionCreateResponse>}
 */
export function createComputerSession(client: ChatBotKitClient, computerId: string, request?: ComputerSessionCreateRequest): Promise<ComputerSessionCreateResponse>;
export type ChatBotKitClient = import("../../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
export type ComputerSessionCreateRequestBody = import("../../types/api/v1.js").operations["createComputerSession"]["requestBody"]["content"]["application/json"];
export type ComputerSessionCreateRequest = ComputerSessionCreateRequestBody;
export type ComputerSessionCreateResponseBody = import("../../types/api/v1.js").operations["createComputerSession"]["responses"]["200"]["content"]["application/json"];
export type ComputerSessionCreateResponse = ComputerSessionCreateResponseBody;
