import React from 'react'
import '../styles/globals.css'
import { ProviderAuth } from '../lib/auth'

function MyApp({ Component, pageProps }) {
  return (
    <ProviderAuth>
      <Component {...pageProps} />
    </ProviderAuth>
  )
}

export default MyApp
