import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

// This is the simplest possible NextAuth configuration for demo purposes.
// Users just enter their name to "sign in" - no database or email required.

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Demo',
      credentials: {
        name: { label: 'Name', type: 'text', placeholder: 'Enter any name' },
      },
      async authorize(credentials) {
        // For demo purposes, accept any name

        if (credentials?.name) {
          return { id: '1', name: credentials.name, email: 'demo@example.com' }
        }

        return null
      },
    }),
  ],

  session: {
    strategy: 'jwt',
  },

  secret: process.env.NEXTAUTH_SECRET,
})
