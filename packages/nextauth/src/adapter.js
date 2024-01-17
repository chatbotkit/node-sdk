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
    key

    throw new Error(`Not implemented`)
  }

  /**
   * @param {string} key
   * @param {any} value
   * @param {{px?: number}} [options]
   * @returns {Promise<void>}
   */
  async set(key, value, options) {
    key
    value
    options

    throw new Error(`Not implemented`)
  }

  /**
   * @param {string} key
   * @returns {Promise<void>}
   */
  async del(key) {
    key

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
    } = await client.list({ meta: { email } })

    return user
  }

  /**
   * @param {import('@chatbotkit/sdk/partner/user/v1.js').PartnerUserInstance} userInstance
   */
  function serialiseUserInstance(userInstance) {
    const { meta, ...safeUserInstance } = userInstance

    return {
      ...safeUserInstance,

      email: meta?.email,
      emailVerified: meta?.emailVerified ? new Date(meta.emailVerified) : null,
    }
  }

  return {
    async getUser(id) {
      debug('* getUser', { id })

      const userInstance = await fetchUserInstanceById(id)

      let retUser

      if (!userInstance) {
        retUser = null // do not throw because it is used for user detection
      } else {
        retUser = serialiseUserInstance(userInstance)
      }

      debug(`* returning user`, { retUser })

      return retUser
    },

    async getUserByEmail(email) {
      debug('* getUserByEmail', { email })

      const userInstance = await fetchUserInstanceByEmail(email)

      let retUser

      if (!userInstance) {
        retUser = null // do not throw because it is used for user detection
      } else {
        retUser = serialiseUserInstance(userInstance)
      }

      debug(`* returning user`, { retUser })

      return retUser
    },

    async getUserByAccount({ providerAccountId, provider }) {
      debug('* getUserByAccount', { providerAccountId, provider })

      throw new Error(`Account linking not supported`)
    },

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
        meta: {
          email: user.email ? user.email : undefined,
          emailVerified: user.emailVerified
            ? user.emailVerified.getTime()
            : undefined,
        },
      })

      const retUser = await serialiseUserInstance(
        await fetchUserInstanceById(id)
      )

      debug(`* returnging user`, { retUser })

      return retUser
    },

    async updateUser(user) {
      debug('* updateUser', { user })

      if (!autoUpdateUser) {
        throw new Error(`Cannot update existing user`)
      }

      const userInstance = await fetchUserInstanceById(user.id)

      if (!userInstance) {
        throw new Error(`Cannot update non-existing user`)
      }

      const { id } = await client.update(user.id, {
        name: user.name != null ? user.name : '',
        image: user.image != null ? user.image : '',
        meta: {
          ...userInstance.meta,

          email: user.email ? user.email : userInstance.meta?.email,
          emailVerified: user.emailVerified
            ? user.emailVerified.getTime()
            : userInstance.meta?.emailVerified,
        },
      })

      const retUser = await serialiseUserInstance(
        await fetchUserInstanceById(id)
      )

      debug(`* returnging user`, { retUser })

      return retUser
    },

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

    async linkAccount(account) {
      debug('* linkAccount', { account })

      throw new Error(`Account linking not supported`)
    },

    async unlinkAccount({ providerAccountId, provider }) {
      debug('* unlinkAccount', { providerAccountId, provider })

      throw new Error(`Account linking not supported`)
    },

    async createSession({ sessionToken, userId, expires }) {
      debug('* createSession', { sessionToken, userId, expires })

      throw new Error(`Database strategy not supported`) // only used for database strategy
    },

    async updateSession({ sessionToken }) {
      debug('* updateSession', { sessionToken })

      throw new Error(`Database strategy not supported`) // only used for database strategy
    },

    async deleteSession(sessionToken) {
      debug('* deleteSession', { sessionToken })

      throw new Error(`Database strategy not supported`) // only used for database strategy
    },

    async getSessionAndUser(sessionToken) {
      debug('* getSessionAndUser', { sessionToken })

      throw new Error(`Database strategy not supported`) // only used for database strategy
    },

    async createVerificationToken(verificationToken) {
      debug('* createVerificationToken', { verificationToken })

      await store.set(
        `verificationToken:${verificationToken.token}`,
        verificationToken,
        { px: Math.abs(verificationToken.expires.getTime() - Date.now()) }
      )

      const retToken = { ...verificationToken }

      debug(`* returnging token`, { retToken })

      return retToken
    },

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

      debug(`* returnging token`, { retToken })

      return retToken
    },
  }
}
