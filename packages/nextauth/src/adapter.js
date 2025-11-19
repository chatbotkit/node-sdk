import { PartnerUserClient } from '@chatbotkit/sdk/partner/user/index.js'

/**
 * @todo maybe move into its own package
 * @param {...any} args
 */
function debug(...args) {
  if (process.env.DEBUG) {
    // eslint-disable-next-line no-console
    console.debug(...args)
  }
}

/**
 * A basic store for ChatBotKitPartnerAdapter. It is compatible with Redis.
 * Implement your own if you want to use a different storage.
 */
export class Store {
  /**
   * @param {string} key
   * @returns {Promise<null|any>}
   */
  async get(key) {
    void key

    throw new Error(`Not implemented`)
  }

  /**
   * @param {string} key
   * @param {any} value
   * @param {{px?: number}} [options]
   * @returns {Promise<void>}
   */
  async set(key, value, options) {
    void key
    void value
    void options

    throw new Error(`Not implemented`)
  }

  /**
   * @param {string} key
   * @returns {Promise<void>}
   */
  async del(key) {
    void key

    throw new Error(`Not implemented`)
  }
}

/**
 * A store that uses memory. Do not use in production.
 */
export class MemoryStore extends Store {
  constructor() {
    super()

    this.store = new Map()
  }

  /**
   * @override
   * @param {string} key
   */
  async get(key) {
    return this.store.get(key) || null
  }

  /**
   * @override
   * @param {string} key
   * @param {any} value
   */
  async set(key, value) {
    this.store.set(key, value)
  }

  /**
   * @override
   * @param {string} key
   */
  async del(key) {
    this.store.delete(key)
  }
}

/**
 * A NextAuth.js adapter that integrates with the ChatBotKit Partner API for
 * user management.
 *
 * This adapter enables you to authenticate users directly into their ChatBotKit
 * sub-accounts using NextAuth.js. It manages user identities through the
 * ChatBotKit Partner API, allowing you to build applications where each user
 * gets their own isolated ChatBotKit environment.
 *
 * ## Overview
 *
 * The ChatBotKitPartnerAdapter bridges NextAuth.js authentication with
 * ChatBotKit's Partner API user management system. When users authenticate
 * through your application, this adapter automatically manages their ChatBotKit
 * sub-account, creating, updating, or removing users based on your
 * configuration.
 *
 * ## Key Features
 *
 * - **Sub-account Management**: Automatically manages ChatBotKit sub-accounts for each user
 * - **Flexible User Lifecycle**: Control whether users are auto-created, updated, or deleted
 * - **Secure Token Storage**: Uses a configurable store for managing verification tokens
 * - **Partner API Integration**: Seamlessly works with ChatBotKit Partner API credentials
 *
 * ## Storage Requirements
 *
 * This adapter requires a store implementation for persisting verification
 * tokens and session data. The store interface is compatible with Vercel KV and
 * Redis, but you can implement your own storage backend by extending the Store
 * class.
 *
 * **Important**: Do not use MemoryStore in production environments as it
 * doesn't persist data across server restarts or multiple instances.
 *
 * ## User Lifecycle Control
 *
 * - `autoCreateUser`: When true, new ChatBotKit sub-accounts are created automatically on
 *   first sign-in. Recommended for self-service applications.
 * - `autoUpdateUser`: When true, user information is synchronized with ChatBotKit on each
 *   sign-in. Recommended to keep user data in sync.
 * - `autoDeleteUser`: When true, ChatBotKit sub-accounts are deleted when users are removed
 *   from NextAuth. Use with caution in production.
 *
 * ## Production Recommendations
 *
 * For production environments:
 * - Use a persistent store (Redis, Vercel KV, or database-backed implementation)
 * - Set `autoCreateUser: false` and manually approve user creation
 * - Enable `autoUpdateUser: true` to keep user data synchronized
 * - Set `autoDeleteUser: false` to prevent accidental data loss
 * - Store your ChatBotKit Partner API secret securely in environment variables
 *
 * @param {{
 *   secret: string,
 *   store: Store,
 *   autoCreateUser?: boolean,
 *   autoUpdateUser?: boolean,
 *   autoDeleteUser?: boolean,
 * }} options
 * @return {import("next-auth/adapters").Adapter}
 *
 * @example
 * import NextAuth from 'next-auth'
 * import { ChatBotKitPartnerAdapter, MemoryStore } from '@chatbotkit/nextauth'
 *
 * export default NextAuth({
 *   adapter: ChatBotKitPartnerAdapter({
 *     secret: process.env.CHATBOTKIT_API_SECRET,
 *     store: new MemoryStore(), // Use Redis or another store in production
 *     autoCreateUser: false,
 *     autoUpdateUser: true,
 *     autoDeleteUser: false,
 *   }),
 *   // ... other NextAuth configuration
 * })
 */
export function ChatBotKitPartnerAdapter({
  secret,
  store,
  autoCreateUser = false,
  autoUpdateUser = true,
  autoDeleteUser = false,
}) {
  const client = new PartnerUserClient({
    secret,
  })

  /**
   * @param {string} id
   */
  async function fetchUserInstanceById(id) {
    const user = await client.fetch(id)

    return user
  }

  /**
   * @param {string} email
   */
  async function fetchUserInstanceByEmail(email) {
    const {
      items: [user],
    } = await client.list({ email })

    return user
  }

  /**
   * @param {import('@chatbotkit/sdk/partner/user/v1.js').PartnerUserFetchResponse} userInstance
   */
  function serializeUserInstance(userInstance) {
    const { email, ...safeUserInstance } = userInstance

    if (!email) {
      throw new Error(`User is missing email field`)
    }

    return {
      ...safeUserInstance,

      email: email,
      emailVerified: new Date(safeUserInstance.createdAt),
    }
  }

  return {
    /**
     * @param {any} id
     * @returns
     */
    async getUser(id) {
      debug('* getUser', { id })

      const userInstance = await fetchUserInstanceById(id)

      let retUser

      if (!userInstance) {
        retUser = null // do not throw because it is used for user detection
      } else {
        retUser = serializeUserInstance(userInstance)
      }

      debug(`* returning user`, { retUser })

      return retUser
    },

    /**
     * @param {any} email
     * @returns
     */
    async getUserByEmail(email) {
      debug('* getUserByEmail', { email })

      const userInstance = await fetchUserInstanceByEmail(email)

      let retUser

      if (!userInstance) {
        retUser = null // do not throw because it is used for user detection
      } else {
        retUser = serializeUserInstance(userInstance)
      }

      debug(`* returning user`, { retUser })

      return retUser
    },

    async getUserByAccount({ providerAccountId, provider }) {
      debug('* getUserByAccount', { providerAccountId, provider })

      throw new Error(`Account linking not supported`)
    },

    /**
     * @param {any} user
     * @returns
     */
    async createUser(user) {
      debug('* createUser', { user })

      if (!autoCreateUser) {
        throw new Error(`Cannot create new user`)
      }

      const userInstance = await fetchUserInstanceByEmail(user.email)

      if (userInstance) {
        throw new Error(`Cannot create duplicate user`)
      }

      const { id } = await client.create({
        name: user.name != null ? user.name : undefined,
        image: user.image != null ? user.image : undefined,
        email: user.email != null ? user.email : undefined,
      })

      const retUser = await serializeUserInstance(
        await fetchUserInstanceById(id)
      )

      debug(`* returning user`, { retUser })

      return retUser
    },

    /**
     * @param {any} user
     * @returns
     */
    async updateUser(user) {
      debug('* updateUser', { user })

      if (!autoUpdateUser) {
        throw new Error(`Cannot update existing user`)
      }

      const { id } = await client.update(user.id, {
        name: user.name != null ? user.name : '',
        image: user.image != null ? user.image : '',
        email: user.email != null ? user.email : undefined,
      })

      const retUser = await serializeUserInstance(
        await fetchUserInstanceById(id)
      )

      debug(`* returning user`, { retUser })

      return retUser
    },

    /**
     * @param {any} userId
     * @returns
     */
    async deleteUser(userId) {
      debug('* deleteUser', { userId })

      if (!autoDeleteUser) {
        throw new Error(`Cannot delete existing user`)
      }

      const userInstance = await fetchUserInstanceById(userId)

      if (!userInstance) {
        throw new Error(`Cannot delete non-existing user`)
      }

      await client.delete(userId)
    },

    /**
     * @param {any} account
     * @returns
     */
    async linkAccount(account) {
      debug('* linkAccount', { account })

      throw new Error(`Account linking not supported`)
    },

    /**
     * @param {any} unlinkAccount
     * @returns
     */
    async unlinkAccount({ providerAccountId, provider }) {
      debug('* unlinkAccount', { providerAccountId, provider })

      throw new Error(`Account linking not supported`)
    },

    /**
     * @param {any} options
     * @returns
     */
    async createSession({ sessionToken, userId, expires }) {
      debug('* createSession', { sessionToken, userId, expires })

      throw new Error(`Database strategy not supported`) // only used for database strategy
    },

    /**
     * @param {any} options
     * @returns
     */
    async updateSession({ sessionToken }) {
      debug('* updateSession', { sessionToken })

      throw new Error(`Database strategy not supported`) // only used for database strategy
    },

    /**
     * @param {any} sessionToken
     * @returns
     */
    async deleteSession(sessionToken) {
      debug('* deleteSession', { sessionToken })

      throw new Error(`Database strategy not supported`) // only used for database strategy
    },

    /**
     * @param {any} sessionToken
     * @returns
     */
    async getSessionAndUser(sessionToken) {
      debug('* getSessionAndUser', { sessionToken })

      throw new Error(`Database strategy not supported`) // only used for database strategy
    },

    /**
     * @param {any} verificationToken
     * @returns
     */
    async createVerificationToken(verificationToken) {
      debug('* createVerificationToken', { verificationToken })

      await store.set(
        `verificationToken:${verificationToken.token}`,
        verificationToken,
        { px: Math.abs(verificationToken.expires.getTime() - Date.now()) }
      )

      const retToken = { ...verificationToken }

      debug(`* returning token`, { retToken })

      return retToken
    },

    /**
     * @param {any} verificationToken
     * @returns
     */
    async useVerificationToken(verificationToken) {
      debug('* useVerificationToken', { verificationToken })

      const value = await store.get(
        `verificationToken:${verificationToken.token}`
      )

      if (!value) {
        throw new Error(`Invalid token`)
      }

      await store.del(`verificationToken:${verificationToken.token}`)

      const { expires } = value

      const retToken = { ...verificationToken, expires: new Date(expires) }

      debug(`* returning token`, { retToken })

      return retToken
    },
  }
}
