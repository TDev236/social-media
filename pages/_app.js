import '../styles/globals.css'
import { SessionProvider, useSession } from 'next-auth/react'

export default function MyApp({ Component, pageProps:{session, ...pageProps}, }) {
  return (
    <SessionProvider session={session}>
      {Component.auth ? (
        <Auth>
          <Component {...pageProps} />
        </Auth>
      ) : (
        <Component {...pageProps} />
      )}
    </SessionProvider>
  )
}

const Auth = ({ children }) => {
  const {status} = useSession({required:true})

  if(status === 'loading'){
    return <div>Loading...</div>
  }

  return children
}

