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
export function generateMagic(client, magicId, request) {
  const url = `/api/v1/magic/${magicId}/generate`

  /** @typedef {import('../types/api/v1.js').operations['generateMagic']['responses']['200']['content']['application/json']} T */
  /** @typedef {import('../types/api/v1.js').operations['generateMagic']['responses']['200']['content']['application/jsonl']} U */
  /** @type {ResponsePromise<T,U>} */
  const response = client.clientFetch(url, {
    data: {
      ...request,
    },
  })

  return response
}
