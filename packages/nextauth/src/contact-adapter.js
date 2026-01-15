import { ContactClient } from '@chatbotkit/sdk/contact/index.js'

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
 * A basic store for ChatBotKitContactAdapter. It is compatible with Redis.
 * Implement your own if you want to use a different storage.
 */
export class ContactStore {
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
export class ContactMemoryStore extends ContactStore {
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
 * A NextAuth.js adapter that integrates with the ChatBotKit Contact API for
 * user management within a single account.
 *
 * This adapter enables you to authenticate users as contacts within a single
 * ChatBotKit account using NextAuth.js. Unlike the Partner adapter which
 * creates separate sub-accounts for each user, this adapter manages users as
 * contacts within your main account, making it ideal for scenarios where you
 * want all users to interact within the same ChatBotKit environment.
 *
 * ## Overview
 *
 * The ChatBotKitContactAdapter bridges NextAuth.js authentication with
 * ChatBotKit's Contact API. When users authenticate through your application,
 * this adapter automatically manages them as contacts within your account,
 * creating, updating, or removing contacts based on your configuration.
 *
 * ## Key Differences from Partner Adapter
 *
 * - **Single Account**: All contacts exist within your main ChatBotKit account
 * - **Fingerprint-Based Identity**: Contacts are identified by fingerprints instead of separate account IDs
 * - **Shared Resources**: Contacts can share bots, datasets, and other resources
 * - **Contact-Specific Data**: Each contact can have their own conversation history and preferences
 *
 * ## Use Cases
 *
 * This adapter is ideal for:
 * - Chat applications where users interact with shared AI assistants
 * - Customer support systems where each customer is a contact
 * - Multi-tenant applications within a single ChatBotKit account
 * - Applications where you need to track individual user conversations
 *
 * ## Storage Requirements
 *
 * This adapter requires a store implementation for persisting verification
 * tokens and session data. The store interface is compatible with Vercel KV and
 * Redis, but you can implement your own storage backend by extending the
 * ContactStore class.
 *
 * **Important**: Do not use ContactMemoryStore in production environments as it
 * doesn't persist data across server restarts or multiple instances.
 *
 * ## User Lifecycle Control
 *
 * - `autoCreateContact`: When true, new contacts are created automatically on first sign-in.
 *   Recommended for self-service applications.
 * - `autoUpdateContact`: When true, contact information is synchronized on each sign-in.
 *   Recommended to keep user data in sync.
 * - `autoDeleteContact`: When true, contacts are deleted when users are removed from NextAuth.
 *   Use with caution in production.
 *
 * ## Production Recommendations
 *
 * For production environments:
 * - Use a persistent store (Redis, Vercel KV, or database-backed implementation)
 * - Set `autoCreateContact: false` and manually approve contact creation
 * - Enable `autoUpdateContact: true` to keep contact data synchronized
 * - Set `autoDeleteContact: false` to prevent accidental data loss
 * - Store your ChatBotKit API secret securely in environment variables
 *
 * @param {{
 *   secret: string,
 *   store: ContactStore,
 *   autoCreateContact?: boolean,
 *   autoUpdateContact?: boolean,
 *   autoDeleteContact?: boolean,
 * }} options
 * @return {import("next-auth/adapters").Adapter}
 *
 * @example
 * import NextAuth from 'next-auth'
 * import { ChatBotKitContactAdapter, ContactMemoryStore } from '@chatbotkit/nextauth/contact-adapter'
 *
 * export default NextAuth({
 *   adapter: ChatBotKitContactAdapter({
 *     secret: process.env.CHATBOTKIT_API_SECRET,
 *     store: new ContactMemoryStore(), // Use Redis or another store in production
 *     autoCreateContact: true,
 *     autoUpdateContact: true,
 *     autoDeleteContact: false,
 *   }),
 *   // ... other NextAuth configuration
 * })
 */
export function ChatBotKitContactAdapter({
  secret,
  store,
  autoCreateContact = false,
  autoUpdateContact = true,
  autoDeleteContact = false,
}) {
  const client = new ContactClient({
    secret,
  })

  /**
   * @param {string} id
   */
  async function fetchContactInstanceById(id) {
    const contact = await client.fetch(id)

    return contact
  }

  /**
   * Find a contact by email using the ensure endpoint behavior
   * @param {string} email
   */
  async function fetchContactInstanceByEmail(email) {
    // We need to list contacts and find by email
    // Since contacts don't have a direct email filter in list, we search through meta
    // or use the ensure functionality
    const { items } = await client.list({
      meta: { email },
    })

    // If found via meta, return it
    if (items.length > 0) {
      return items[0]
    }

    return null
  }

  /**
   * @param {import('@chatbotkit/sdk/contact/v1.js').ContactFetchResponse} contactInstance
   */
  function serializeContactInstance(contactInstance) {
    const { email, ...safeContactInstance } = contactInstance

    // Contacts may not have email - in that case we use fingerprint as identifier
    const identifier = email || safeContactInstance.fingerprint

    if (!identifier) {
      throw new Error(`Contact is missing email and fingerprint fields`)
    }

    return {
      ...safeContactInstance,

      email: email || `${safeContactInstance.fingerprint}@contact.local`,
      emailVerified: safeContactInstance.verifiedAt
        ? new Date(safeContactInstance.verifiedAt)
        : null,
    }
  }

  return {
    /**
     * @param {any} id
     * @returns
     */
    async getUser(id) {
      debug('* getUser', { id })

      const contactInstance = await fetchContactInstanceById(id)

      let retUser

      if (!contactInstance) {
        retUser = null // do not throw because it is used for user detection
      } else {
        retUser = serializeContactInstance(contactInstance)
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

      const contactInstance = await fetchContactInstanceByEmail(email)

      let retUser

      if (!contactInstance) {
        retUser = null // do not throw because it is used for user detection
      } else {
        retUser = serializeContactInstance(contactInstance)
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

      if (!autoCreateContact) {
        throw new Error(`Cannot create new contact`)
      }

      // Check if contact already exists by email
      const existingContact = await fetchContactInstanceByEmail(user.email)

      if (existingContact) {
        throw new Error(`Cannot create duplicate contact`)
      }

      // Create new contact with email stored in meta for lookup
      const { id } = await client.create({
        name: user.name != null ? user.name : undefined,
        email: user.email != null ? user.email : undefined,
        meta: {
          email: user.email || '',
          image: user.image || '',
        },
      })

      const retUser = await serializeContactInstance(
        await fetchContactInstanceById(id)
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

      if (!autoUpdateContact) {
        throw new Error(`Cannot update existing contact`)
      }

      const { id } = await client.update(user.id, {
        name: user.name != null ? user.name : '',
        email: user.email != null ? user.email : undefined,
        meta: {
          email: user.email || '',
          image: user.image || '',
        },
      })

      const retUser = await serializeContactInstance(
        await fetchContactInstanceById(id)
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

      if (!autoDeleteContact) {
        throw new Error(`Cannot delete existing contact`)
      }

      const contactInstance = await fetchContactInstanceById(userId)

      if (!contactInstance) {
        throw new Error(`Cannot delete non-existing contact`)
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
