import React from 'react'
import Head from 'next/head'
import { Button } from '@chakra-ui/core'

import styles from '../styles/Home.module.css'
import { useAuth } from '../lib/auth'

export default function Home() {
  const auth = useAuth()
  return (
    <div className={styles.container}>
      <Head>
        <title>Quick Feedback</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <h1>Quick Feedback</h1>
        <h2>Playing around with stuff</h2>
        <p>{auth?.user?.displayName}</p>
        {auth?.user ? (
          <Button variantColor="pink" variant="outline" onClick={() => auth.signout()}>
            Sign out
          </Button>
        ) : (
          <Button variantColor="teal" onClick={() => auth.signin()}>
            Sign in
          </Button>
        )}
      </section>
    </div>
  )
}
