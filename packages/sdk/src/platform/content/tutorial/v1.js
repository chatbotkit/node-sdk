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
 * }} PlatformContentTutorialListRequest
 *
 * @typedef {import('../../../types/api/v1.js').operations['listPlatformContentTutorials']['responses']['200']['content']['application/json']} PlatformContentTutorialListResponse
 *
 * @typedef {PlatformContentTutorialListResponse['items'][number]} PlatformContentTutorialListItem
 *
 * @typedef {import('../../../types/api/v1.js').operations['listPlatformContentTutorials']['responses']['200']['content']['application/jsonl']} PlatformContentTutorialListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {PlatformContentTutorialListRequest} [request]
 * @returns {ResponsePromise<PlatformContentTutorialListResponse,PlatformContentTutorialListStreamType>}
 */
export function listPlatformContentTutorials(client, request) {
  let url = `/api/v1/platform/content/tutorial/list`

  /** @type {ResponsePromise<PlatformContentTutorialListResponse,PlatformContentTutorialListStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {import('../../../types/api/v1.js').operations['searchPlatformContentTutorials']['requestBody']['content']['application/json']} PlatformContentTutorialSearchRequestBody
 *
 * @typedef {PlatformContentTutorialSearchRequestBody} PlatformContentTutorialSearchRequest
 *
 * @typedef {import('../../../types/api/v1.js').operations['searchPlatformContentTutorials']['responses']['200']['content']['application/json']} PlatformContentTutorialSearchResponseBody
 *
 * @typedef {PlatformContentTutorialSearchResponseBody} PlatformContentTutorialSearchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {PlatformContentTutorialSearchRequest} request
 * @returns {Promise<PlatformContentTutorialSearchResponse>}
 */
export async function searchPlatformContentTutorials(client, request) {
  const url = `/api/v1/platform/content/tutorial/search`

  /** @type {PlatformContentTutorialSearchResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {PlatformContentTutorialSearchRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../../types/api/v1.js').operations['fetchPlatformContentTutorial']['responses']['200']['content']['application/json']} PlatformContentTutorialFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} tutorialId
 * @returns {ResponsePromise<PlatformContentTutorialFetchResponse,never>}
 */
export function fetchPlatformContentTutorial(client, tutorialId) {
  const url = `/api/v1/platform/content/tutorial/${tutorialId}/fetch`

  /** @type {ResponsePromise<PlatformContentTutorialFetchResponse,never>} */
  const response = client.clientFetch(url, {
    endpoint: '/api/v1/platform/content/tutorial/{tutorialId}/fetch',
  })

  return response
}
