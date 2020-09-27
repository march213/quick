import React from 'react'
import { Flex, Heading, Text } from '@chakra-ui/core'

import AddSiteModal from './add-site-modal'

const EmptyState = () => {
  return (
    <Flex
      direction="column"
      justify="center"
      alignItems="center"
      p={16}
      width="100%"
      backgroundColor="whiteAlpha.900"
      borderRadius="8px"
    >
      <Heading mb={2} color="blackAlpha.900" size="lg">
        You haven&apos;t added any sites
      </Heading>
      <Text mb={4} color="blackAlpha.900">
        Let&apos;s get started!
      </Text>

      <AddSiteModal />
    </Flex>
  )
}

export default EmptyState
