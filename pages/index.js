import React from 'react'
import Head from 'next/head'
import { Button, Heading, Text, Avatar, Flex, Box, Icon } from '@chakra-ui/core'

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
            <Flex alignItems="center" marginY={12}>
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
          <Button variantColor="teal" size="sm" mt={4} onClick={() => auth.signin()}>
            Sign in
          </Button>
        )}
      </Flex>
    </Flex>
  )
}
