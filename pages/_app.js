import React from 'react'
import '../styles/globals.css'
import { AuthProvider } from '../lib/auth'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import theme from '../theme'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Component {...pageProps} />
      </ThemeProvider>
    </AuthProvider>
  )
}

export default MyApp
