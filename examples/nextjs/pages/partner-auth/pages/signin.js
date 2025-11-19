import { useState } from 'react'

import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

import nextAuthConfig from '../nextauth.config.js'

export default function Signin() {
  const router = useRouter()
  const session = useSession()

  const isLoading = session.status === 'loading'
  const isAuthenticated = session.status === 'authenticated'

  const [email, setEmail] = useState('')
  const [token, setToken] = useState('')

  const [submitted, setSubmitted] = useState(false)

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
          <div>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email"
            />{' '}
            <button
              onClick={() => {
                signIn('email', {
                  callbackUrl:
                    router.query.callbackUrl || nextAuthConfig.pages.dashboard,
                  email: email,
                  redirect: false,
                })

                setSubmitted(true)
              }}
            >
              Sign In
            </button>
          </div>
          {submitted && (
            <div>
              <input
                type="password"
                value={token}
                onChange={(event) => setToken(event.target.value)}
                placeholder="Token"
              />{' '}
              <button
                onClick={() => {
                  const callbackUrl =
                    router.query.callbackUrl || nextAuthConfig.pages.dashboard

                  const url = new URL(
                    '/api/auth/callback/email',
                    window.location.origin
                  )

                  url.searchParams.append('email', email)
                  url.searchParams.append('token', token)
                  url.searchParams.append('callbackUrl', callbackUrl)

                  router.push(url.href)
                }}
              >
                Submit Token
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}
