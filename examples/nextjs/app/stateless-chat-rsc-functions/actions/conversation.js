'use server'

import { streamComplete } from '@chatbotkit/react/actions/complete'
import { ChatBotKit } from '@chatbotkit/sdk'

// First, let's create a global instance of the ChatBotKit SDK client. You can
// put it in a separate library file and reuse it elsewhere in your project.

const cbk = new ChatBotKit({
  secret: process.env.CHATBOTKIT_API_SECRET,
})

// Now let's define a server action that will be called by the client to
// complete the conversation. We only accept the messages parameter, which is
// the state of the conversation. We can accept also other parameters if needed.

export async function complete({ messages }) {
  // You can do any kind of processing here, like calling external APIs, saving
  // data to a database, checking for authentication and authorization, etc.

  // Once we are done it is time to complete the conversation.

  return streamComplete({
    client: cbk.conversation,

    // You can pass any botId or a combination between backstory, model,
    // datasetId and skillsetId parameters here.

    messages,

    // In this example we define two functions that can be called by the bot to
    // get the authenticated user name and a list of calendar events. As you can
    // see, the handler function can return a string, a React element or an
    // object with a text, children or a result properties. This makes it easy
    // to program rich responses while keeping the code clean, readable and most
    // of all secure.

    functions: [
      // This is a simple function that return a result. The result will be
      // taken into account by the bot.
      {
        name: 'getUserName',
        description: 'Get the authenticated user name',
        parameters: {},
        handler: async () => {
          return 'John Doe'
        },
      },

      // This is a more advanced function that returns a React element and a
      // result. The result will be taken into account by the bot and the React
      // element will be rendered in the chat window.
      {
        name: 'getCalendarEvents',
        description: 'Get a list of calendar events',
        parameters: {},
        handler: async () => {
          const events = [
            { id: 1, title: 'Meeting with Jane Doe' },
            { id: 2, title: 'Meeting with Jill Doe' },
          ]

          return {
            children: (
              <div>
                <h2>Calendar Events</h2>
                <ul>
                  {events.map(({ id, title }) => (
                    <li key={id}>{title}</li>
                  ))}
                </ul>
              </div>
            ),

            result: {
              events,
            },
          }
        },
      },
    ],
  })
}
