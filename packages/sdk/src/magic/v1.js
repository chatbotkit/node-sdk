// @todo fix types

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
export function generateMagic(client, magicId, request) {
  const url = `/api/v1/magic/${magicId}/generate`

  /** @type {ResponsePromise<MagicGenerateResponse,MagicGenerateStreamType>} */
  const response = client.clientFetch(url, {
    record: {
      ...request,
    },
  })

  return response
}
