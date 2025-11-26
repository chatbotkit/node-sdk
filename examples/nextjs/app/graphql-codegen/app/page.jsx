import { getSdk } from '../src/generated/graphql'

import { GraphQLClient } from 'graphql-request'

/**
 * This page demonstrates how to use GraphQL Code Generator with ChatBotKit's GraphQL API.
 *
 * The page fetches bots directly on the server using the generated SDK, which provides
 * full type safety for queries, variables, and responses.
 */
export default async function Page() {
  const client = new GraphQLClient(
    'https://api.chatbotkit.com/api/v1/graphql',
    {
      headers: {
        Authorization: `Bearer ${process.env.CHATBOTKIT_API_SECRET}`,
      },
    }
  )

  const sdk = getSdk(client)

  let bots = []
  let error = null

  try {
    const result = await sdk.ListBots({ take: 10 })
    bots = result.bots.edges.map((edge) => edge.node)
  } catch (err) {
    error = err.message
  }

  return (
    <div>
      {error ? (
        <div>Error: {error}</div>
      ) : bots.length === 0 ? (
        <div>
          <h2>Bots</h2>
          <p>No bots found. Create one in the ChatBotKit dashboard!</p>
        </div>
      ) : (
        <div>
          <h2>Bots ({bots.length})</h2>
          <div>
            {bots.map((bot) => (
              <div
                key={bot.id}
                style={{
                  border: '1px solid #ccc',
                  padding: '10px',
                  marginBottom: '10px',
                  borderRadius: '4px',
                }}
              >
                <div>
                  <strong>{bot.name || 'Unnamed Bot'}</strong>
                </div>
                {bot.description && <div>{bot.description}</div>}
                <div
                  style={{ fontSize: '0.8em', color: '#666', marginTop: '5px' }}
                >
                  ID: {bot.id}
                </div>
                <div style={{ fontSize: '0.8em', color: '#666' }}>
                  Created: {new Date(bot.createdAt).toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
