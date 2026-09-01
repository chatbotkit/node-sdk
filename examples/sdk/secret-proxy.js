/* eslint-disable no-console */
import * as dotenv from 'dotenv'

import { ChatBotKit } from '@chatbotkit/sdk/index.js'

dotenv.config()

/**
 * Call an external API using a secret stored in ChatBotKit - without the secret
 * ever touching your code or your environment.
 *
 * You send the request shape (method, url, headers, body); ChatBotKit injects
 * the secret server-side before forwarding it, then returns the upstream
 * response to you verbatim - inspect it like a normal `fetch` response.
 *
 * Header injection:
 *   - If you don't reference the secret anywhere, it is added automatically as
 *     `Authorization: Bearer <secret>`.
 *   - To place it yourself, use the `${SECRET_DEFAULT}` placeholder, e.g.
 *     `headers: { 'x-api-key': '${SECRET_DEFAULT}' }`.
 *
 * Set CHATBOTKIT_SECRET_ID to a secret that holds, for example, a GitHub token.
 */
async function main() {
  const client = new ChatBotKit({
    secret: process.env.CHATBOTKIT_API_SECRET,
  })

  const secretId = process.env.CHATBOTKIT_SECRET_ID

  if (!secretId) {
    throw new Error('Set CHATBOTKIT_SECRET_ID to the id of the secret to use.')
  }

  // the stored secret is injected as the Authorization header automatically
  const response = await client.secret.proxy(secretId, {
    method: 'GET',
    url: 'https://api.github.com/user',
  })

  // the upstream response is passed straight through - handle it as you would
  // any fetch response
  if (!response.ok) {
    console.error(`upstream responded ${response.status}`)
    console.error(await response.text())

    return
  }

  const user = await response.json()

  console.log(`authenticated as ${user.login} (${user.name ?? 'n/a'})`)

  // A write request with a body. Here the secret is placed explicitly with the
  // ${SECRET_DEFAULT} placeholder instead of relying on auto-injection - the same
  // placeholder works in any header (e.g. 'x-api-key') for APIs that expect the
  // credential somewhere other than Authorization. Note the single quotes: the
  // placeholder is a literal string resolved server-side, not a JS template.
  const created = await client.secret.proxy(secretId, {
    method: 'POST',
    url: 'https://api.github.com/gists',
    headers: {
      authorization: 'Bearer ${SECRET_DEFAULT}',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      description: 'created via the ChatBotKit secret proxy',
      public: false,
      files: { 'hello.txt': { content: 'hi from the proxy' } },
    }),
  })

  console.log(`create gist -> ${created.status}`)
}

main().catch((error) => {
  console.error('Error:', error)
  process.exit(1)
})
