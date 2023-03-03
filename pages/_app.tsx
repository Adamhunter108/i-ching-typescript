import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
    // Create a new supabase browser client on every first render.
    const [supabaseClient] = useState(() => createBrowserSupabaseClient())
    
    // OG next.js return
    // return <Component {...pageProps} />

    // For supabase auth
    return (
      <SessionContextProvider
        supabaseClient={supabaseClient}
        initialSession={pageProps.initialSession}
      >
        <Component {...pageProps} />
      </SessionContextProvider>
    )    
}

export default MyApp
