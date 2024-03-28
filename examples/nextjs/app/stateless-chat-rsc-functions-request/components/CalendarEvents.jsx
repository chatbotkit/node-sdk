'use client'

import { useContext } from 'react'

import { ConversationContext } from '@chatbotkit/react'

// This component is a simple list of calendar events. It also utilises the
// conversation context to trigger a decline event when the user clicks on the
// "Decline" link. This mechanism creates a powerful way to interact with the
// conversation from any component in the tree.

export default function CalendarEvents({ events }) {
  const { request } = useContext(ConversationContext)

  function handleDecline(id) {
    // This is where we request the declineCalendarEvent function. The first
    // parameter is the name of the function and the second parameter is the
    // ID of the event to decline.
    //
    // Note that it is also possible and sometimes preferable to call a server
    // action directly. This is just a way to keep all conversational AI
    // capabilities in one place and available to both the client and the
    // conversational AI bot.

    request('declineCalendarEvent', { id })
  }

  return (
    <div>
      <h2>Calendar Events</h2>
      <ul>
        {events.map(({ id, title }) => (
          <li key={id}>
            {title}{' '}
            <span
              style={{ color: 'blue', cursor: 'pointer' }}
              onClick={handleDecline.bind(null, id)}
            >
              Decline
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
