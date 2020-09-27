import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Button, Heading, Flex, Icon } from '@chakra-ui/core'

import { useAuth } from '@/lib/auth'

export default function Home() {
  const auth = useAuth()
  return (
    <Flex height="100vh" align="center">
      <Head>
        <title>Quick Feedback</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        py={4}
        px={8}
        as="main"
        align="center"
        justify="space-between"
        direction="column"
        margin="auto"
      >
        <Heading as="h1" size="xl">
          <Icon name="logo" size="48px" fill="#2F2504" />
        </Heading>

        {auth.user ? (
          <>
            <Link href="/dashboard">
              <Button as="a" mt={2}>
                Go To Dashobard
              </Button>
            </Link>
          </>
        ) : (
          <Button variantColor="teal" size="sm" mt={4} onClick={() => auth.signin()}>
            Sign in
          </Button>
        )}
      </Flex>
    </Flex>
  )
}
