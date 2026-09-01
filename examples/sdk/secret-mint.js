/* eslint-disable no-console */
import * as dotenv from 'dotenv'

import { ChatBotKit } from '@chatbotkit/sdk/index.js'

dotenv.config()

/**
 * Mint a usable token from a stored OAuth (or JWT) secret and use it directly in
 * your own code.
 *
 * Where the proxy forwards a request for you, minting hands you a live token (a
 * refreshed OAuth access token or a freshly signed JWT) plus its expiry, so you
 * can call the provider yourself.
 *
 * Minting is owner-only and only works for `oauth`/`jwt` secrets. Static
 * `bearer`/`basic`/`plain` secrets are not mintable (use the proxy for those),
 * and platform/brokered secrets are never mintable.
 *
 * Set CHATBOTKIT_SECRET_ID to an OAuth secret (for example, a Google connection).
 */
async function main() {
  const client = new ChatBotKit({
    secret: process.env.CHATBOTKIT_API_SECRET,
  })

  const secretId = process.env.CHATBOTKIT_SECRET_ID

  if (!secretId) {
    throw new Error('Set CHATBOTKIT_SECRET_ID to the id of the secret to use.')
  }

  const { token, expiresAt } = await client.secret.mint(secretId)

  console.log(`minted token: ${token.slice(0, 12)}...`)
  console.log(
    expiresAt ? `expires at: ${new Date(expiresAt).toISOString()}` : 'no expiry'
  )

  // use the token directly against the provider - it never had to live in your
  // environment
  const response = await fetch(
    'https://www.googleapis.com/oauth2/v3/userinfo',
    {
      headers: { authorization: `Bearer ${token}` },
    }
  )

  console.log('provider responded:', response.status)
}

main().catch((error) => {
  console.error('Error:', error)
  process.exit(1)
})
