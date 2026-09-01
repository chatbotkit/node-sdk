/**
 * @typedef {import('../../client.js').ChatBotKitClient} ChatBotKitClient
 */
/**
 * @typedef {{
 *   durationInSeconds?: number | null,
 *   config?: {
 *     allowedRoutes?: string[] | null,
 *     contactId?: string | null,
 *     namespace?: string | null,
 *   } | null,
 * }} UserSessionCreateRequestBody
 *
 * @typedef {UserSessionCreateRequestBody} UserSessionCreateRequest
 *
 * @typedef {{
 *   id: string,
 *   token: string,
 *   expiresAt: number,
 * }} UserSessionCreateResponseBody
 *
 * @typedef {UserSessionCreateResponseBody} UserSessionCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} userId
 * @param {UserSessionCreateRequest} request
 * @returns {Promise<UserSessionCreateResponse>}
 */
export function createUserSession(client: ChatBotKitClient, userId: string, request: UserSessionCreateRequest): Promise<UserSessionCreateResponse>;
export type ChatBotKitClient = import("../../client.js").ChatBotKitClient;
export type UserSessionCreateRequestBody = {
    durationInSeconds?: number | null;
    config?: {
        allowedRoutes?: string[] | null;
        contactId?: string | null;
        namespace?: string | null;
    } | null;
};
export type UserSessionCreateRequest = UserSessionCreateRequestBody;
export type UserSessionCreateResponseBody = {
    id: string;
    token: string;
    expiresAt: number;
};
export type UserSessionCreateResponse = UserSessionCreateResponseBody;
