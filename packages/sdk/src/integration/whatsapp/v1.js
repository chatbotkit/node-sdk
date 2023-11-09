/**
 * @typedef {import('../../client.js').ChatBotKitClient} ChatBotKitClient
 */

/**
 * @typedef {{
 *   botId?: string
 * }} BotRef
 *
 * @typedef {{
 *   backstory?: string,
 *   model?: string,
 *   datasetId?: string,
 *   skillsetId?: string,
 *   privacy?: boolean,
 *   moderation?: boolean
 * }} BotConfig
 *
 * @typedef {BotRef | BotConfig} BotRefOrConfig
 *
 * @typedef {BotRefOrConfig & {
 *   name?: string,
 *   description?: string,
 *   phoneNumberId?: string,
 *   accessToken?: string,
 *   sessionDuration?: number,
 *   meta?: Record<string,any>
 * }} WhatsappOptions
 *
 * @typedef {{
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number
 * } & WhatsappOptions} WhatsappInstance
 */

/**
 * @typedef {{items: WhatsappInstance[]}} WhatsappListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: WhatsappInstance
 * }} WhatsappListStreamItem
 *
 * @typedef {WhatsappListStreamItem} WhatsappListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} [cursor]
 * @returns {import('../../client.js').ResponsePromise<WhatsappListResponse,WhatsappListStreamType>}
 */
export function whatsappList(client, cursor) {
  let url = `/api/v1/integration/whatsapp/list`

  if (cursor) {
    url += `?cursor=${encodeURIComponent(cursor)}`
  }

  return client.clientFetch(url)
}

/**
 * @typedef {WhatsappInstance} WhatsappFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} whatsappId
 * @returns {Promise<WhatsappFetchResponse>}
 */
export async function whatsappFetch(client, whatsappId) {
  const url = `/api/v1/integration/whatsapp/${whatsappId}/fetch`

  return client.clientFetch(url)
}

/**
 * @typedef {WhatsappOptions} WhatsappCreateRequest
 *
 * @typedef {{
 *   id: string
 * }} WhatsappCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {WhatsappCreateRequest} request
 * @returns {Promise<WhatsappCreateResponse>}
 */
export async function whatsappCreate(client, request) {
  const url = `/api/v1/integration/whatsapp/create`

  return client.clientFetch(url, {
    data: request,
  })
}

/**
 * @typedef {WhatsappOptions} WhatsappUpdateRequest
 *
 * @typedef {{
 *   id: string
 * }} WhatsappUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} whatsappId
 * @param {WhatsappUpdateRequest} request
 * @returns {Promise<WhatsappUpdateResponse>}
 */
export async function whatsappUpdate(client, whatsappId, request) {
  const url = `/api/v1/integration/whatsapp/${whatsappId}/update`

  return client.clientFetch(url, {
    data: request,
  })
}

/**
 * @typedef {{
 *   id: string
 * }} WhatsappDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} whatsappId
 * @returns {Promise<WhatsappDeleteResponse>}
 */
export async function whatsappDelete(client, whatsappId) {
  const url = `/api/v1/integration/whatsapp/${whatsappId}/delete`

  return client.clientFetch(url, {
    data: {},
  })
}

/**
 * @typedef {{
 *   id: string
 * }} WhatsappSetupResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} whatsappId
 * @returns {Promise<WhatsappSetupResponse>}
 */
export async function whatsappSetup(client, whatsappId) {
  const url = `/api/v1/integration/whatsapp/${whatsappId}/setup`

  return client.clientFetch(url, {
    data: {},
  })
}