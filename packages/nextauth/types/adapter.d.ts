/**
 * An adapter for NextAuth.js that works with ChatBotKit Partner API.
 *
 * @param {{
 *   secret: string,
 *   store: Store,
 *   autoCreateUser?: boolean,
 *   autoUpdateUser?: boolean,
 *   autoDeleteUser?: boolean,
 * }} options
 * @return {import("next-auth/adapters").Adapter}
 */
export function ChatBotKitPartnerAdapter({ secret, store, autoCreateUser, autoUpdateUser, autoDeleteUser, }: {
    secret: string;
    store: Store;
    autoCreateUser?: boolean;
    autoUpdateUser?: boolean;
    autoDeleteUser?: boolean;
}): import("next-auth/adapters").Adapter;
/**
 * A basic store for ChatBotKitPartnerAdapter. It is compatible with Redis.
 * Implement your own if you want to use a different storage.
 */
export class Store {
    /**
     * @param {string} key
     * @returns {Promise<null|string>}
     */
    get(key: string): Promise<null | string>;
    /**
     * @param {string} key
     * @param {string} value
     * @param {{px?: number}} [options]
     * @returns {Promise<void>}
     */
    set(key: string, value: string, options?: {
        px?: number | undefined;
    } | undefined): Promise<void>;
    /**
     * @param {string} key
     * @returns {Promise<void>}
     */
    del(key: string): Promise<void>;
}
/**
 * A store that uses memory. Do not use in production.
 */
export class MemoryStore extends Store {
    store: Map<any, any>;
    /**
     * @override
     * @param {string} key
     */
    override get(key: string): Promise<any>;
    /**
     * @override
     * @param {string} key
     * @param {string} value
     */
    override set(key: string, value: string): Promise<void>;
}
