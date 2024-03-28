'use client'

import { useContext } from 'react'

import { complete } from '../actions/conversation.js'

import { ChatInput, ConversationContext } from '@chatbotkit/react'
import ConversationManager from '@chatbotkit/react/components/ConversationManager'

// This is a stateless example of how to use the ChatbotKit React components in
// a Next.js application. We use the ConversationContext and AutoTextarea
// component to render the user input field.
//
// Here we use the ConversationManager component to manage the conversation
// state. The difference here is that ConversationManager exposes a context that
// can be reused by any component inside the tree.
//
// The ConversationContext manages the entire conversation state including the
// messages, the input text and all calls to the local API endpoint.
//
// The ChatInput component is a textarea that automatically resizes to fit the
// content and also handles the enter key to submit the message.
//
// Unlike other examples, this example also renders the children of the bot
// messages if they are available. This is useful for rendering rich content
// like buttons or other components.

export function ChatMessages() {
  const {
    thinking,

    text,
    setText,

    message,
    messages,

    submit,
  } = useContext(ConversationContext)

  // Our renderer is quite basic. We simply iterate over the messages and render
  // them accordingly. We also use our own AutoTextarea for the user input.

  return (
    <div>
      <div>
        {messages.map(({ id, type, text, children }, index) => {
          switch (type) {
            case 'user':
              return (
                <div key={id || index}>
                  <div>
                    <strong>user:</strong> {text}
                  </div>
                </div>
              )

            case 'bot':
              return (
                <div key={id || index}>
                  <div>
                    <strong>bot:</strong> {text}
                  </div>
                  {children ? <div>{children}</div> : null}
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

export default function ChatArea() {
  return (
    <ConversationManager endpoint={complete}>
      <ChatMessages />
    </ConversationManager>
  )
}
