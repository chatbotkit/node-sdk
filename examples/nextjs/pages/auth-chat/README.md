# Authenticated Chat with Contacts

A Next.js example demonstrating how to use **ChatBotKit Contacts** for managing end-users in authenticated conversations. This example shows how to associate conversations with specific users using unique fingerprints, enabling conversation tracking, user management, and personalized experiences.

## What are Contacts?

**Contacts** represent end-users who interact with your chatbots. They enable:

- **Conversation Tracking** - All conversations are associated with specific users
- **User Management** - Track and manage your user base through ChatBotKit's CRM capabilities
- **Personalized Experiences** - Build memory and context for each user over time
- **Identity Management** - Use fingerprints to reliably identify users across sessions
- **Authentication Management** - Users can authenticate their sessions to allow AI agents to connect to 3rd-party systems on their behalf (Google, Microsoft, etc.)

Learn more: [ChatBotKit Contacts Documentation](https://chatbotkit.com/manuals/contacts.md)

## How It Works

1. **Authentication** - [pages/api/auth/[...nextauth].js](pages/api/auth/[...nextauth].js) uses NextAuth.js credentials provider with JWT sessions (simple name-based auth for demo purposes)
2. **Contact Creation** - [pages/api/conversation/complete.js](pages/api/conversation/complete.js) generates a UUID v5 fingerprint from the user's email and passes it to the conversation API
3. **Automatic Management** - ChatBotKit automatically creates or retrieves the contact based on the fingerprint, ensuring all conversations are properly associated
4. **UI Component** - [pages/index.js](pages/index.js) shows sign-in UI or chat interface based on authentication state

## Key Features

- **Contact Fingerprinting** - UUID v5 generation for consistent user identification
- **Automatic Contact Creation** - Contacts are created/retrieved seamlessly on first conversation
- **Session Protection** - API routes are protected with NextAuth JWT validation
- **Zero Database Setup** - JWT-based sessions, no database needed for authentication
- **Minimal Configuration** - Simple demo-friendly setup for learning and testing

## Getting Started

From the root of the ChatBotKit Node SDK monorepo:

```bash
pnpm -F @examples/nextjs-pages-router-auth-chat dev
```

As a standalone application:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

To sign in, just enter any name and click "Sign in with Demo".
