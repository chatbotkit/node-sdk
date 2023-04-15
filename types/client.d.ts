export type ChatBotKitClientOptions = {
    secret: string;
};
/**
 * @typedef {{secret: string}} ChatBotKitClientOptions
 */
export class ChatBotKitClient {
    /**
     * @param {ChatBotKitClientOptions} options
     */
    constructor(options: ChatBotKitClientOptions);
    secret: string;
    /**
     * @template T
     * @param {string} url
     * @param {{data?: Record<string,any>}} [options]
     * @returns {Promise<T>}
     */
    clientFetch<T>(url: string, options?: {
        data?: Record<string, any> | undefined;
    } | undefined): Promise<T>;
}
