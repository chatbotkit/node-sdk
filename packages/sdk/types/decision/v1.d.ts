/**
 * @typedef {import('../client.js').ChatBotKitClient} ChatBotKitClient
 */
/**
 * @typedef {import('../types/api/v1.js').components['schemas']['DecisionQuestion']} DecisionQuestion
 *
 * @typedef {import('../types/api/v1.js').components['schemas']['DecisionAnswer']} DecisionAnswer
 */
/**
 * @typedef {import('../types/api/v1.js').operations['createDecision']['requestBody']['content']['application/json']} DecisionCreateRequestBody
 *
 * @typedef {DecisionCreateRequestBody} DecisionCreateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['createDecision']['responses']['200']['content']['application/json']} DecisionCreateResponseBody
 *
 * @typedef {DecisionCreateResponseBody} DecisionCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {DecisionCreateRequest} request
 * @returns {Promise<DecisionCreateResponse>}
 */
export function createDecision(client: ChatBotKitClient, request: DecisionCreateRequest): Promise<DecisionCreateResponse>;
export type ChatBotKitClient = import("../client.js").ChatBotKitClient;
export type DecisionQuestion = import("../types/api/v1.js").components["schemas"]["DecisionQuestion"];
export type DecisionAnswer = import("../types/api/v1.js").components["schemas"]["DecisionAnswer"];
export type DecisionCreateRequestBody = import("../types/api/v1.js").operations["createDecision"]["requestBody"]["content"]["application/json"];
export type DecisionCreateRequest = DecisionCreateRequestBody;
export type DecisionCreateResponseBody = import("../types/api/v1.js").operations["createDecision"]["responses"]["200"]["content"]["application/json"];
export type DecisionCreateResponse = DecisionCreateResponseBody;
