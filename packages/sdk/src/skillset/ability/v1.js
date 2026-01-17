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
 * }} SkillsetAbilityListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listSkillsetAbilities']['responses']['200']['content']['application/json']} SkillsetAbilityListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listSkillsetAbilities']['responses']['200']['content']['application/jsonl']} SkillsetAbilityListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} skillsetId
 * @param {SkillsetAbilityListRequest} [request]
 * @returns {ResponsePromise<SkillsetAbilityListResponse,SkillsetAbilityListStreamType>}
 */
export function listSkillsetAbilities(client, skillsetId, request) {
  let url = `/api/v1/skillset/${skillsetId}/ability/list`

  /** @type {ResponsePromise<SkillsetAbilityListResponse,SkillsetAbilityListStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} SkillsetAbilityExportRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['exportSkillsetAbilities']['responses']['200']['content']['application/json']} SkillsetAbilityExportResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['exportSkillsetAbilities']['responses']['200']['content']['application/jsonl']} SkillsetAbilityExportStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} skillsetId
 * @param {SkillsetAbilityExportRequest} [request]
 * @returns {ResponsePromise<SkillsetAbilityExportResponse,SkillsetAbilityExportStreamType>}
 */
export function exportSkillsetAbilities(client, skillsetId, request) {
  let url = `/api/v1/skillset/${skillsetId}/ability/export`

  /** @type {ResponsePromise<SkillsetAbilityExportResponse,SkillsetAbilityExportStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['fetchSkillsetAbility']['responses']['200']['content']['application/json']} SkillsetAbilityFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} skillsetId
 * @param {string} abilityId
 * @returns {ResponsePromise<SkillsetAbilityFetchResponse,never>}
 */
export function fetchSkillsetAbility(client, skillsetId, abilityId) {
  const url = `/api/v1/skillset/${skillsetId}/ability/${abilityId}/fetch`

  /** @type {ResponsePromise<SkillsetAbilityFetchResponse,never>} */
  const response = client.clientFetch(url)

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['createSkillsetAbility']['requestBody']['content']['application/json']} SkillsetAbilityCreateRequestBody
 *
 * @typedef {SkillsetAbilityCreateRequestBody} SkillsetAbilityCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createSkillsetAbility']['responses']['200']['content']['application/json']} SkillsetAbilityCreateResponseBody
 *
 * @typedef {SkillsetAbilityCreateResponseBody} SkillsetAbilityCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} skillsetId
 * @param {SkillsetAbilityCreateRequest} request
 * @returns {Promise<SkillsetAbilityCreateResponse>}
 */
export async function createSkillsetAbility(client, skillsetId, request) {
  const url = `/api/v1/skillset/${skillsetId}/ability/create`

  /** @type {SkillsetAbilityCreateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {SkillsetAbilityCreateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['updateSkillsetAbility']['requestBody']['content']['application/json']} SkillsetAbilityUpdateRequestBody
 *
 * @typedef {SkillsetAbilityUpdateRequestBody} SkillsetAbilityUpdateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['updateSkillsetAbility']['responses']['200']['content']['application/json']} SkillsetAbilityUpdateResponseBody
 *
 * @typedef {SkillsetAbilityUpdateResponseBody} SkillsetAbilityUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} skillsetId
 * @param {string} abilityId
 * @param {SkillsetAbilityUpdateRequest} request
 * @returns {Promise<SkillsetAbilityUpdateResponse>}
 */
export async function updateSkillsetAbility(
  client,
  skillsetId,
  abilityId,
  request
) {
  const url = `/api/v1/skillset/${skillsetId}/ability/${abilityId}/update`

  /** @type {SkillsetAbilityUpdateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {SkillsetAbilityUpdateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['deleteSkillsetAbility']['requestBody']['content']['application/json']} SkillsetAbilityDeleteRequestBody
 *
 * @typedef {SkillsetAbilityDeleteRequestBody} SkillsetAbilityDeleteRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['deleteSkillsetAbility']['responses']['200']['content']['application/json']} SkillsetAbilityDeleteResponseBody
 *
 * @typedef {SkillsetAbilityDeleteResponseBody} SkillsetAbilityDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} skillsetId
 * @param {string} abilityId
 * @returns {Promise<SkillsetAbilityDeleteResponse>}
 */
export async function deleteSkillsetAbility(client, skillsetId, abilityId) {
  const url = `/api/v1/skillset/${skillsetId}/ability/${abilityId}/delete`

  /** @type {SkillsetAbilityDeleteResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {SkillsetAbilityDeleteRequestBody} */
    record: {},
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['executeSkillsetAbility']['requestBody']['content']['application/json']} SkillsetAbilityExecuteRequestBody
 *
 * @typedef {SkillsetAbilityExecuteRequestBody} SkillsetAbilityExecuteRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['executeSkillsetAbility']['responses']['200']['content']['application/json']} SkillsetAbilityExecuteResponseBody
 *
 * @typedef {SkillsetAbilityExecuteResponseBody} SkillsetAbilityExecuteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} skillsetId
 * @param {string} abilityId
 * @param {SkillsetAbilityExecuteRequest} request
 * @returns {Promise<SkillsetAbilityExecuteResponse>}
 */
export async function executeSkillsetAbility(
  client,
  skillsetId,
  abilityId,
  request
) {
  const url = `/api/v1/skillset/${skillsetId}/ability/${abilityId}/execute`

  /** @type {SkillsetAbilityExecuteResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {SkillsetAbilityExecuteRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}
