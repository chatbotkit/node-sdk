export type ChatBotKitClientOptions = {
    secret: string;
    host?: string;
};
/**
 * @typedef {{
 * secret: string,
 * host?: string
 * }} ChatBotKitClientOptions
 */
export class ChatBotKitClient {
    /**
     * @param {ChatBotKitClientOptions} options
     */
    constructor(options: ChatBotKitClientOptions);
    secret: string;
    url: URL;
    /**
     * @template T
     * @param {string} path
     * @param {{data?: Record<string,any>}} [options]
     * @returns {Promise<T>}
     */
    clientFetch<T>(path: string, options?: {
        data?: Record<string, any> | undefined;
    } | undefined): Promise<T>;
}
