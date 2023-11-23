import { AutoTextarea, useConversationManager } from '@chatbotkit/react'

// This is a basic example of how to use the ChatbotKit React components in a
// Next.js application. We use the useConversationManager hook to manage the
// conversation state and the AutoTextarea component to render the user input
// field.
//
// The useConversationManager hook is a React hook that manages the conversation
// state including the messages and the input text.
//
// The AutoTextarea component is a simple textarea that automatically
// resizes itself based on the content.

export default function Home() {
  const {
    conversationId,
    setConversationId,

    token,
    setToken,

    text,
    setText,

    messages,

    thinking,

    interact,
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

  /**
   * Handle the user input field key down event.
   */
  function handleOnKeyDown(event) {
    // Detect the enter key.

    if (event.keyCode === 13) {
      event.preventDefault()

      // Call the interact method to exchange the message between the user and
      // the bot.

      interact()
    }
  }

  // Our renderer is quite basic. We simply iterate over the messages and render
  // them accordingly. We also use our own AutoTextarea for the user input.

  return (
    <div style={{ fontFamily: 'monospace', padding: '10px' }}>
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
                      <strong>bot</strong>: {text}
                    </div>
                  )
              }
            })}
            {thinking ? (
              <div key="thinking">
                <strong>bot</strong>: thinking...
              </div>
            ) : null}
          </div>
          <AutoTextarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleOnKeyDown}
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
