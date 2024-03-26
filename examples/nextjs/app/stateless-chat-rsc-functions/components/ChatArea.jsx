'use client'

import { complete } from '../actions/conversation.js'

import { ChatInput, useConversationManager } from '@chatbotkit/react'

// This is a stateless example of how to use the ChatbotKit React components in
// a Next.js application. We use the useConversationManager and AutoTextarea
// component to render the user input field.
//
// The useConversationManager hook is a React hook that manages the conversation
// state including the messages, the input text and all calls to the local API
// endpoint. Notice that we pass the complete function as the endpoint to the
// useConversationManager hook. This function is responsible for sending the
// messages and returning a stream response. The complete function is a server
// action.
//
// The ChatInput component is a textarea that automatically resizes to fit the
// content and also handles the enter key to submit the message.
//
// Unlike other examples, this example also renders the children of the bot
// messages if they are available. This is useful for rendering rich content
// like buttons or other components.

export default function ChatArea() {
  const {
    thinking,

    text,
    setText,

    messages,

    submit,
  } = useConversationManager({ endpoint: complete })

  // Our renderer is quite basic. We simply iterate over the messages and render
  // them accordingly. We also use our own AutoTextarea for the user input.

  return (
    <div>
      <div>
        {messages.map(({ id, type, text, children }) => {
          switch (type) {
            case 'user':
              return (
                <div key={id}>
                  <div>
                    <strong>user:</strong> {text}
                  </div>
                </div>
              )

            case 'bot':
              return (
                <div key={id}>
                  <div>
                    <strong>bot:</strong> {text}
                  </div>
                  {children ? <div>{children}</div> : null}
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
    </div>
  )
}
