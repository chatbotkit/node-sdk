import { AutoTextarea, useConversationManager } from '@chatbotkit/react'

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

  async function createSession() {
    const response = await fetch(`/api/session/create`)

    if (!response.ok) {
      throw new Error(`Unexpected error`)
    }

    const { conversationId, token } = await response.json()

    setConversationId(conversationId)
    setToken(token)
  }

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
    <div>
      {conversationId && token ? (
        <>
          <div>
            {messages.map(({ id, type, text }) => {
              switch (type) {
                case 'user':
                  return <div key={id}>user: {text}</div>

                case 'bot':
                  return <div key={id}>bot: {text}</div>
              }
            })}
            {thinking ? <div key="thinking">bot: thinking...</div> : null}
          </div>
          <AutoTextarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleOnKeyDown}
          />
        </>
      ) : (
        <button onClick={() => createSession()}>Start Chat</button>
      )}
    </div>
  )
}
