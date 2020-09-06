import React from 'react'
import Head from 'next/head'
import { Button, Heading, Text, Avatar, Flex, Box } from '@chakra-ui/core'

import { useAuth } from '@/lib/auth'

export default function Home() {
  const auth = useAuth()
  return (
    <>
      <Head>
        <title>Quick Feedback</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box py={4} px={8}>
        <Heading as="h1" size="xl">
          Quick Feedback
        </Heading>

        {auth.user ? (
          <>
            <Flex alignItems="center" marginY={4}>
              <Avatar name={auth.user.name} marginRight={3} src={auth.user.photoUrl} />
              <Box>
                <Text fontSize="lg" fontWeight="bold">
                  {auth.user.name}
                </Text>
                <Text fontSize="md">{auth.user.email}</Text>
              </Box>
            </Flex>
            <Button variantColor="pink" variant="outline" onClick={() => auth.signout()}>
              Sign out
            </Button>
          </>
        ) : (
          <Button variantColor="teal" onClick={() => auth.signin()}>
            Sign in
          </Button>
        )}
      </Box>
    </>
  )
}
