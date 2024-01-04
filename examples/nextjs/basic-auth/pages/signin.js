import { useState } from 'react'
import { useRouter } from 'next/router'
import { useSession, signIn, signOut } from 'next-auth/react'

import nextAuthConfig from '../nextauth.config.js'

export default function Signin() {
  const router = useRouter()
  const session = useSession()

  const isLoading = session.status === 'loading'
  const isAuthenticated = session.status === 'authenticated'

  const [email, setEmail] = useState('')

  return isLoading ? null : (
    <div>
      {isAuthenticated ? (
        <>
          <button onClick={() => router.push(nextAuthConfig.pages.dashboard)}>
            Go To Dashboard
          </button>{' '}
          <button onClick={() => signOut('email', { callbackUrl: '/' })}>
            Sign Out
          </button>
        </>
      ) : (
        <>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />{' '}
          <button
            onClick={() =>
              signIn('email', { callbackUrl: router.query.callbackUrl, email })
            }
          >
            Sign In
          </button>
        </>
      )}
    </div>
  )
}
