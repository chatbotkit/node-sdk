import { AutoTextarea, useConversationManager } from '@chatbotkit/react'

// This is a stateless example of how to use the ChatbotKit React components in
// a Next.js application. We use the useConversationManager and AutoTextarea
// component to render the user input field.
//
// The useConversationManager hook is a React hook that manages the conversation
// state including the messages, the input text and all calls to the local API
// endpoint.
//
// The AutoTextarea component is a simple textarea that automatically
// resizes itself based on the content.

export default function Index() {
  const { thinking, text, setText, messages, submit } = useConversationManager({
    endpoint: '/api/conversation/complete',
  })

  /**
   * Handle the user input field key down event.
   */
  function handleOnKeyDown(event) {
    // Detect the enter key.

    if (event.keyCode === 13) {
      event.preventDefault()

      // Call the submit to exchange the message between the user and the bot.

      submit()
    }
  }

  // Our renderer is quite basic. We simply iterate over the messages and render
  // them accordingly. We also use our own AutoTextarea for the user input.

  return (
    <div style={{ fontFamily: 'monospace', padding: '10px' }}>
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
    </div>
  )
}
