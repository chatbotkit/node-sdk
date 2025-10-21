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
 *   text: string
 * }} MagicGenerateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['generateMagicFromPrompt']['responses']['200']['content']['application/json']} MagicGenerateResponse
 *
 * @typedef {import('../types/api/v1.js').operations['generateMagicFromPrompt']['responses']['200']['content']['application/jsonl']} MagicGenerateStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} magicId
 * @param {MagicGenerateRequest} request
 * @returns {ResponsePromise<MagicGenerateResponse,MagicGenerateStreamType>}
 */
export function generateMagic(client: ChatBotKitClient, magicId: string, request: MagicGenerateRequest): ResponsePromise<MagicGenerateResponse, MagicGenerateStreamType>;
export type ChatBotKitClient = import("../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../client.js").ResponsePromise<T, U>;
export type MagicGenerateRequest = {
    text: string;
};
export type MagicGenerateResponse = import("../types/api/v1.js").operations["generateMagicFromPrompt"]["responses"]["200"]["content"]["application/json"];
export type MagicGenerateStreamType = import("../types/api/v1.js").operations["generateMagicFromPrompt"]["responses"]["200"]["content"]["application/jsonl"];
