/**
 * @template T
 * @template U
 * @typedef {import('../client.js').ResponsePromise<T,U>} ResponsePromise
 */
/**
 * Bot client.
 */
export class BotClient extends ChatBotKitClient {
    /**
     * @type {BotSessionClient} session client
     */
    session: BotSessionClient;
    /**
     * Retrieves a list of all bots.
     *
     * @param {import('./v1.js').BotListRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').BotListResponse,import('./v1.js').BotListStreamType>}
     */
    list(request?: import("./v1.js").BotListRequest | undefined): ResponsePromise<import('./v1.js').BotListResponse, import('./v1.js').BotListStreamType>;
    /**
     * Fetches a bot.
     *
     * @param {string} botId
     * @returns {Promise<import('./v1.js').BotFetchResponse>}
     */
    fetch(botId: string): Promise<import('./v1.js').BotFetchResponse>;
    /**
     * Creates a new bot.
     *
     * @param {import('./v1.js').BotCreateRequest} request
     * @returns {Promise<import('./v1.js').BotCreateResponse>}
     */
    create(request: import('./v1.js').BotCreateRequest): Promise<import('./v1.js').BotCreateResponse>;
    /**
     * Updates a bot.
     *
     * @param {string} botId
     * @param {import('./v1.js').BotUpdateRequest} request
     * @returns {Promise<import('./v1.js').BotUpdateResponse>}
     */
    update(botId: string, request: import('./v1.js').BotUpdateRequest): Promise<import('./v1.js').BotUpdateResponse>;
    /**
     * Deletes the bot.
     *
     * @param {string} botId
     * @returns {Promise<import('./v1.js').BotDeleteResponse>}
     */
    delete(botId: string): Promise<import('./v1.js').BotDeleteResponse>;
    /**
     * @param {string} botId
     * @param {import('./v1.js').BotUpvoteRequest} request
     * @returns {Promise<import('./v1.js').BotUpvoteResponse>}
     */
    upvote(botId: string, request: import('./v1.js').BotUpvoteRequest): Promise<import('./v1.js').BotUpvoteResponse>;
    /**
     * @param {string} botId
     * @param {import('./v1.js').BotDownvoteRequest} request
     * @returns {Promise<import('./v1.js').BotDownvoteResponse>}
     */
    downvote(botId: string, request: import('./v1.js').BotDownvoteRequest): Promise<import('./v1.js').BotDownvoteResponse>;
}
export default BotClient;
export type ResponsePromise<T, U> = import('../client.js').ResponsePromise<T, U>;
import { ChatBotKitClient } from '../client.js';
import { BotSessionClient } from './session/index.js';
