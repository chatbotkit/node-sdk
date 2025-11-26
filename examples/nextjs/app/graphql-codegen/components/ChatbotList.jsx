'use client'

import { useEffect, useState } from 'react'

/**
 * ChatbotList component that fetches and displays chatbots using the GraphQL API.
 *
 * This component demonstrates how the frontend can consume the type-safe API
 * endpoint that uses GraphQL Code Generator under the hood.
 *
 * While the component itself doesn't directly use the generated types,
 * the API route it calls does, ensuring end-to-end type safety.
 */
export default function ChatbotList() {
  const [bots, setBots] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchBots() {
      try {
        setLoading(true)
        const response = await fetch('/api/chatbots?take=10')
        const data = await response.json()

        if (data.success) {
          setBots(data.bots)
        } else {
          setError(data.error)
        }
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchBots()
  }, [])

  if (loading) {
    return <div>Loading bots...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  if (bots.length === 0) {
    return (
      <div>
        <h2>Your Bots</h2>
        <p>No bots found. Create one in the ChatBotKit dashboard!</p>
      </div>
    )
  }

  return (
    <div>
      <h2>Your Bots ({bots.length})</h2>
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
            <div style={{ fontSize: '0.8em', color: '#666', marginTop: '5px' }}>
              ID: {bot.id}
            </div>
            <div style={{ fontSize: '0.8em', color: '#666' }}>
              Created: {new Date(bot.createdAt).toLocaleDateString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
