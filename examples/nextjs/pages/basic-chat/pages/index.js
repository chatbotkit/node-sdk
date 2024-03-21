import { ChatInput, useConversationManager } from '@chatbotkit/react'

// This is a basic example of how to use the ChatbotKit React components in a
// Next.js application. We use the useConversationManager and AutoTextarea
// component to render the user input field.
//
// The useConversationManager hook is a React hook that manages the conversation
// state including the messages, the input text and all calls to the ChatBotKit
// API endpoint.
//
// The ChatInput component is a textarea that automatically that automatically
// resizes to fit the content and also handles the enter key to submit the
// message.

export default function Index() {
  const {
    conversationId,
    setConversationId,

    token,
    setToken,

    text,
    setText,

    messages,

    thinking,

    submit,
  } = useConversationManager({ stream: true })

  /**
   * Create a new ChatBotKit conversation session
   */
  async function createSession() {
    const response = await fetch(`/api/session/create`)

    if (!response.ok) {
      throw new Error(`Unexpected error`)
    }

    const { conversationId, token } = await response.json()

    setConversationId(conversationId)
    setToken(token)
  }

  // Our renderer is quite basic. We simply iterate over the messages and render
  // them accordingly. We also use our own AutoTextarea for the user input.

  return (
    <div>
      {conversationId && token ? (
        <>
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
        </>
      ) : (
        <button onClick={() => createSession()}>Start Chat</button>
      )}
    </div>
  )
}
