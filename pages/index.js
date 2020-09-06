import React from 'react'
import Head from 'next/head'
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
        <p>{auth?.user?.displayName}</p>
        {auth?.user ? (
          <button onClick={() => auth.signout()}>Sign out</button>
        ) : (
          <button onClick={() => auth.signin()}>Sign in</button>
        )}
      </section>
    </div>
  )
}