import { getServerSession } from 'next-auth/next'
import { signOut } from 'next-auth/react'

import nextAuthConfig from '../../nextauth.config.js'

import { ChatInput, useConversationManager } from '@chatbotkit/react'

export default function Index() {
  const {
    thinking,

    text,
    setText,

    message,
    messages,

    submit,
  } = useConversationManager({
    endpoint: '/api/dashboard/conversation/complete',
  })

  return (
    <div>
      <button onClick={() => signOut({ callbackUrl: '/' })}>Sign Out</button>
      <div>
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
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getServerSession(
    context.req,
    context.res,
    nextAuthConfig
  )

  if (!session) {
    return {
      redirect: {
        destination: `/signin?callback=${context.resolvedUrl}`,
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}
