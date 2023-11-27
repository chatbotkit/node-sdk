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
 * }} PartnerUserTokenOptions
 *
 * @typedef {PartnerUserTokenOptions & {
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number
 * }} PartnerUserTokenInstance
 */
/**
 * @typedef {{cursor?: string, take?: number, meta?: Record<string,string>}} PartnerUserTokenListRequest
 *
 * @typedef {{items: PartnerUserTokenInstance[]}} PartnerUserTokenListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: PartnerUserTokenInstance
 * }} PartnerUserTokenListStreamItem
 *
 * @typedef {PartnerUserTokenListStreamItem} PartnerUserTokenListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} userId
 * @param {PartnerUserTokenListRequest} [request]
 * @returns {ResponsePromise<PartnerUserTokenListResponse,PartnerUserTokenListStreamType>}
 */
export function listPartnerUserTokens(client: ChatBotKitClient, userId: string, request?: PartnerUserTokenListRequest | undefined): ResponsePromise<PartnerUserTokenListResponse, PartnerUserTokenListStreamType>;
/**
 * @typedef {PartnerUserTokenOptions & {
 * }} PartnerUserTokenCreateRequest
 *
 * @typedef {{
 *   id: string,
 *   token: string,
 *   createdAt: number
 * }} PartnerUserTokenCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} userId
 * @param {PartnerUserTokenCreateRequest} request
 * @returns {Promise<PartnerUserTokenCreateResponse>}
 */
export function createPartnerUserToken(client: ChatBotKitClient, userId: string, request: PartnerUserTokenCreateRequest): Promise<PartnerUserTokenCreateResponse>;
/**
 * @typedef {{
 *   id: string
 * }} PartnerUserTokenDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} userId
 * @param {string} tokenId
 * @returns {Promise<PartnerUserTokenDeleteResponse>}
 */
export function deletePartnerUserToken(client: ChatBotKitClient, userId: string, tokenId: string): Promise<PartnerUserTokenDeleteResponse>;
export type ChatBotKitClient = import('../../../client.js').ChatBotKitClient;
export type ResponsePromise<T, U> = import('../../../client.js').ResponsePromise<T, U>;
export type PartnerUserTokenOptions = {};
export type PartnerUserTokenInstance = PartnerUserTokenOptions & {
    id: string;
    createdAt: number;
    updatedAt: number;
};
export type PartnerUserTokenListRequest = {
    cursor?: string;
    take?: number;
    meta?: Record<string, string>;
};
export type PartnerUserTokenListResponse = {
    items: PartnerUserTokenInstance[];
};
export type PartnerUserTokenListStreamItem = {
    type: 'item';
    data: PartnerUserTokenInstance;
};
export type PartnerUserTokenListStreamType = PartnerUserTokenListStreamItem;
export type PartnerUserTokenCreateRequest = PartnerUserTokenOptions & {};
export type PartnerUserTokenCreateResponse = {
    id: string;
    token: string;
    createdAt: number;
};
export type PartnerUserTokenDeleteResponse = {
    id: string;
};
