import { NextResponse } from 'next/server'

import { getSdk } from '../../../src/generated/graphql'

import { GraphQLClient } from 'graphql-request'

/**
 * API route that fetches chatbots using GraphQL Code Generator.
 *
 * This route demonstrates how to:
 * 1. Create a GraphQL client with proper authentication
 * 2. Use generated SDK for type-safe queries
 * 3. Handle GraphQL responses in a Next.js API route
 *
 * The generated types and SDK ensure that:
 * - Query variables are typed correctly
 * - Response data structure is known at compile time
 * - Field names are validated during development
 * - All GraphQL operations are wrapped in type-safe functions
 */

// Create a GraphQL client instance with authentication
const client = new GraphQLClient('https://api.chatbotkit.com/api/v1/graphql', {
  headers: {
    Authorization: `Bearer ${process.env.CHATBOTKIT_API_SECRET}`,
  },
})

// Get the type-safe SDK with all GraphQL operations
const sdk = getSdk(client)

export async function GET(request) {
  try {
    // Extract query parameters from the URL
    const { searchParams } = new URL(request.url)
    const cursor = searchParams.get('cursor')
    const take = searchParams.get('take')
      ? parseInt(searchParams.get('take'))
      : 10

    // Execute the GraphQL query using the generated SDK
    // The SDK provides type-safe methods for all defined queries
    const data = await sdk.ListBots({
      cursor: cursor || undefined,
      order: 'desc',
      take,
    })

    // Extract bots from the edges
    // TypeScript knows the exact structure from generated types
    const bots =
      data.bots?.edges?.map((edge) => edge?.node).filter(Boolean) || []

    // Return the bots data
    return NextResponse.json({
      success: true,
      bots,
    })
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('GraphQL error:', error)

    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to fetch bots',
      },
      { status: 500 }
    )
  }
}
