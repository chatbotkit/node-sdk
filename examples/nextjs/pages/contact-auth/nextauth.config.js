import {
  ChatBotKitContactEmailProvider,
  ChatBotKitContactAdapter,
  ContactMemoryStore,
} from '@chatbotkit/nextauth/contact'

/** @type {import('next-auth').nextAuthConfig} */
const nextAuthConfig = {
  adapter: ChatBotKitContactAdapter({
    secret: process.env.CHATBOTKIT_API_SECRET,

    /**
     * You will need to implement your own store to persist the user data. This
     * can be a database, a file system, or even a mem cache. The store object
     * is compatible with vercel/kv library so you can use that if you want.
     */
    store: new ContactMemoryStore(),

    /**
     * In a production environment you would want to only allow contact updates
     * and nothing else. But for the sake of this example we are allowing all
     * operations.
     */
    autoCreateContact: true,
    autoUpdateContact: true,
    autoDeleteContact: true,
  }),

  providers: [
    ChatBotKitContactEmailProvider({
      /**
       * You will need to implement the sendVerificationRequest method to send the
       * verification email to the user. By default this provider outputs the link
       * to the console.
       */
    }),
  ],

  session: {
    strategy: 'jwt',
  },

  jwt: {},

  callbacks: {
    /**
     * This method is important to make sure that the user object is available
     * in the session object.
     */
    async session({ session, token }) {
      session.user = token.user

      return session
    },

    /**
     * This method is important to make sure that the user object is available
     * in the JWT token.
     */
    async jwt({ token, user }) {
      if (user) {
        token.user = user
      }

      return token
    },
  },

  pages: {
    /**
     * This is a non-standard page but useful to declare our dashboard page.
     */
    dashboard: '/dashboard',

    /**
     * These are the standard pages that are available in the library.
     */
    signIn: '/signin',
    signOut: '/signin',
    verifyRequest: '/verify',
  },

  debug: !!process.env.DEBUG,
}

export default nextAuthConfig
