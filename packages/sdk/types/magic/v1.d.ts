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
 * @typedef {{
 *   text: string,
 *   usage: { token: number }
 * }} MagicGenerateResponse
 *
 * @typedef {{
 *   type: 'result',
 *   data: MagicGenerateResponse
 * }} MagicGenerateStreamResult
 *
 * @typedef {MagicGenerateStreamResult} MagicGenerateStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} magicId
 * @param {MagicGenerateRequest} request
 * @returns {ResponsePromise<MagicGenerateResponse,MagicGenerateStreamType>}
 */
export function generateMagic(client: ChatBotKitClient, magicId: string, request: MagicGenerateRequest): ResponsePromise<MagicGenerateResponse, MagicGenerateStreamType>;
export type ChatBotKitClient = import('../client.js').ChatBotKitClient;
export type ResponsePromise<T, U> = import('../client.js').ResponsePromise<T, U>;
export type MagicGenerateRequest = {
    text: string;
};
export type MagicGenerateResponse = {
    text: string;
    usage: {
        token: number;
    };
};
export type MagicGenerateStreamResult = {
    type: 'result';
    data: MagicGenerateResponse;
};
export type MagicGenerateStreamType = MagicGenerateStreamResult;
