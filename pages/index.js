import React from 'react'
import Head from 'next/head'
import { Button, Heading, Text, Avatar } from '@chakra-ui/core'

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
        <Heading as="h1" size="xl">
          Quick Feedback
        </Heading>

        {auth.user ? (
          <>
            <Text fontSize="2xl">{auth.user.name}</Text>
            <Avatar name={auth.user.name} src={auth.user.photoUrl} />
            <Button variantColor="pink" variant="outline" onClick={() => auth.signout()}>
              Sign out
            </Button>
          </>
        ) : (
          <Button variantColor="teal" onClick={() => auth.signin()}>
            Sign in
          </Button>
        )}
      </section>
    </div>
  )
}
