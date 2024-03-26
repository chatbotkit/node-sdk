import './globals.css'

// @note due to bug in next we need to preload our client side code here
// @see https://github.com/vercel/next.js/issues/58125
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import CalendarEvents from '@/components/CalendarEvents.jsx'

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
