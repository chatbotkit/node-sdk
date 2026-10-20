/**
 * @typedef {import('../../client.js').ChatBotKitClient} ChatBotKitClient
 */
/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */
/**
 * @typedef {import('../../types/api/v1.js').operations['readComputerFile']['requestBody']['content']['application/json']} ComputerFileReadRequestBody
 *
 * @typedef {ComputerFileReadRequestBody} ComputerFileReadRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['readComputerFile']['responses']['200']['content']['application/json']} ComputerFileReadResponseBody
 *
 * @typedef {ComputerFileReadResponseBody} ComputerFileReadResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} computerId
 * @param {ComputerFileReadRequest} request
 * @returns {Promise<ComputerFileReadResponse>}
 */
export function readComputerFile(client: ChatBotKitClient, computerId: string, request: ComputerFileReadRequest): Promise<ComputerFileReadResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['writeComputerFile']['requestBody']['content']['application/json']} ComputerFileWriteRequestBody
 *
 * @typedef {ComputerFileWriteRequestBody} ComputerFileWriteRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['writeComputerFile']['responses']['200']['content']['application/json']} ComputerFileWriteResponseBody
 *
 * @typedef {ComputerFileWriteResponseBody} ComputerFileWriteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} computerId
 * @param {ComputerFileWriteRequest} request
 * @returns {Promise<ComputerFileWriteResponse>}
 */
export function writeComputerFile(client: ChatBotKitClient, computerId: string, request: ComputerFileWriteRequest): Promise<ComputerFileWriteResponse>;
export type ChatBotKitClient = import("../../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
export type ComputerFileReadRequestBody = import("../../types/api/v1.js").operations["readComputerFile"]["requestBody"]["content"]["application/json"];
export type ComputerFileReadRequest = ComputerFileReadRequestBody;
export type ComputerFileReadResponseBody = import("../../types/api/v1.js").operations["readComputerFile"]["responses"]["200"]["content"]["application/json"];
export type ComputerFileReadResponse = ComputerFileReadResponseBody;
export type ComputerFileWriteRequestBody = import("../../types/api/v1.js").operations["writeComputerFile"]["requestBody"]["content"]["application/json"];
export type ComputerFileWriteRequest = ComputerFileWriteRequestBody;
export type ComputerFileWriteResponseBody = import("../../types/api/v1.js").operations["writeComputerFile"]["responses"]["200"]["content"]["application/json"];
export type ComputerFileWriteResponse = ComputerFileWriteResponseBody;
