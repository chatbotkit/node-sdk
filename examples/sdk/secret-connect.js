/* eslint-disable no-console */
import * as dotenv from 'dotenv'

import {
  AuthorizationRequiredError,
  ChatBotKit,
} from '@chatbotkit/sdk/index.js'

dotenv.config()

/**
 * The "connect" flow: use one of your end-users' connected accounts from your
 * own code.
 *
 * A personal secret is tied to a contact (one of your users). You identify the
 * user with a stable fingerprint (their id in your system) - ChatBotKit ensures
 * a verified contact for it on the fly - then proxy (or mint) against their
 * personal secret.
 *
 * If the user hasn't authorized the connection yet, the call throws an
 * `AuthorizationRequiredError` carrying the URL they must visit to connect their
 * account. Send them there; once they return, the same call succeeds. (A direct
 * `secret.proxy`/`secret.mint` raises the same error for shared secrets.)
 *
 * Set CHATBOTKIT_SECRET_ID to a personal secret.
 */
async function main() {
  const client = new ChatBotKit({
    secret: process.env.CHATBOTKIT_API_SECRET,
  })

  const secretId = process.env.CHATBOTKIT_SECRET_ID

  if (!secretId) {
    throw new Error('Set CHATBOTKIT_SECRET_ID to the id of the secret to use.')
  }

  // identify the end-user by a stable fingerprint; a verified contact is
  // created or reused for it automatically
  const contact = await client.contact.ensure({ fingerprint: 'user-42' })

  try {
    const response = await client.contact.secret.proxy(contact.id, secretId, {
      method: 'GET',
      url: 'https://api.github.com/user',
    })

    const user = await response.json()

    console.log(`acting as ${user.login} on behalf of the contact`)
  } catch (error) {
    if (error instanceof AuthorizationRequiredError) {
      // the user hasn't connected this account yet - send them to authorize,
      // then re-run the request once they come back
      console.log('Account not connected yet. Ask the user to visit:')
      console.log(error.url)

      return
    }

    throw error
  }
}

main().catch((error) => {
  console.error('Error:', error)
  process.exit(1)
})
