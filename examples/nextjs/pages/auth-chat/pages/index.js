import { signIn, signOut, useSession } from 'next-auth/react'

import { ChatInput, useConversationManager } from '@chatbotkit/react'

// This is an authenticated stateless chat example. It works exactly like the
// stateless-chat example but requires users to sign in first using NextAuth.
//
// The useSession hook provides the authentication state. If there's no session,
// we show a sign in button. Otherwise, we render the chat interface.

export default function Index() {
  const { data: session } = useSession()

  const {
    thinking,

    text,
    setText,

    message,
    messages,

    submit,
  } = useConversationManager({ endpoint: '/api/conversation/complete' })

  // If not authenticated, show the sign in button

  if (!session) {
    return (
      <div>
        <button onClick={() => signIn()}>sign in</button>
      </div>
    )
  }

  // Our renderer is quite basic. We simply iterate over the messages and render
  // them accordingly. We also provide a sign out button at the top.

  return (
    <div>
      <div>
        <button onClick={() => signOut()}>sign out</button>
      </div>
      <div>
        {messages.map(({ id, type, text }) => {
          switch (type) {
            case 'user':
              return (
                <div key={id}>
                  <strong>user:</strong> {text}
                </div>
              )

            case 'bot':
              return (
                <div key={id}>
                  <strong>bot:</strong> {text}
                </div>
              )
          }
        })}
        {message ? (
          <div key={message.id}>
            <strong>bot:</strong> {message.text}
          </div>
        ) : null}
        {thinking ? (
          <div key="thinking">
            <strong>bot:</strong> thinking...
          </div>
        ) : null}
      </div>
      <ChatInput
        value={text}
        onChange={(e) => setText(e.target.value)}
        onSubmit={submit}
        placeholder="Type something..."
        style={{
          border: 0,
          outline: 'none',
          resize: 'none',
          width: '100%',
          marginTop: '10px',
        }}
      />
    </div>
  )
}
