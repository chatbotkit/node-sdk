import { SessionProvider } from 'next-auth/react'

import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <SessionProvider>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  )
}
