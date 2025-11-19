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
 * }} PlatformTutorialListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listPlatformContentTutorials']['responses']['200']['content']['application/json']} PlatformTutorialListResponse
 *
 * @typedef {PlatformTutorialListResponse['items'][number]} PlatformTutorialListItem
 *
 * @typedef {import('../../types/api/v1.js').operations['listPlatformContentTutorials']['responses']['200']['content']['application/jsonl']} PlatformTutorialListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {PlatformTutorialListRequest} [request]
 * @returns {ResponsePromise<PlatformTutorialListResponse,PlatformTutorialListStreamType>}
 */
export function listPlatformTutorials(client, request) {
  let url = `/api/v1/platform/content/tutorial/list`

  /** @type {ResponsePromise<PlatformTutorialListResponse,PlatformTutorialListStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['searchPlatformContentTutorials']['requestBody']['content']['application/json']} PlatformTutorialSearchRequestBody
 *
 * @typedef {PlatformTutorialSearchRequestBody} PlatformTutorialSearchRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['searchPlatformContentTutorials']['responses']['200']['content']['application/json']} PlatformTutorialSearchResponseBody
 *
 * @typedef {PlatformTutorialSearchResponseBody} PlatformTutorialSearchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {PlatformTutorialSearchRequest} request
 * @returns {Promise<PlatformTutorialSearchResponse>}
 */
export async function searchPlatformTutorials(client, request) {
  const url = `/api/v1/platform/content/tutorial/search`

  /** @type {PlatformTutorialSearchResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {PlatformTutorialSearchRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['fetchPlatformContentTutorial']['responses']['200']['content']['application/json']} PlatformTutorialFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} tutorialId
 * @returns {ResponsePromise<PlatformTutorialFetchResponse,never>}
 */
export function fetchPlatformTutorial(client, tutorialId) {
  const url = `/api/v1/platform/content/tutorial/${tutorialId}/fetch`

  /** @type {ResponsePromise<PlatformTutorialFetchResponse,never>} */
  const response = client.clientFetch(url, {
    endpoint: '/api/v1/platform/content/tutorial/{tutorialId}/fetch',
  })

  return response
}
