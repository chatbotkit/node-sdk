'use server'

import CalendarEvents from '../components/CalendarEvents.jsx'

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

export async function complete(_, { messages }) {
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
      // element will be rendered in the chat window. Notice that we are also
      // returning a client component, which will handle any interactions from
      // the user.
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
            children: <CalendarEvents events={events} />,

            result: {
              events,
            },
          }
        },
      },

      // This is where we define the function that the client can use to decline
      // a calendar event. The function will receive an ID parameter and return
      // a string confirming the action.
      //
      // Not that it is not necessary to use this pattern. You can also define
      // the decline functionality in a separate action and call it directly
      // from the client. This is just a way to keep all conversational AI
      // capabilities in one place and available to both the client and the
      // conversational AI bot.
      {
        name: 'declineCalendarEvent',
        description: 'Decline a calendar event',
        parameters: {
          type: 'object',
          properties: {
            id: {
              type: 'number',
              description: 'The ID of the event to decline',
            },
          },
          required: ['id'],
        },
        handler: async ({ id }) => {
          return `You have declined the event with ID ${id}`
        },
      },
    ],
  })
}
