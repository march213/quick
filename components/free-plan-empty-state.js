import React from 'react'
import { Box, Heading, Text, Button } from '@chakra-ui/core'
import DashboardShell from './dashboard-shell'

const FreePlanEmptyState = () => (
  <DashboardShell>
    <Box backgroundColor="whiteAlpha.900" borderRadius="8px" width="100%" p={8}>
      <Heading color="blackAlpha.900" size="md">
        Get feedback on your site instantly
      </Heading>
      <Text color="blackAlpha.900">
        Start today, then grow with us{' '}
        <span role="img" aria-label="plant">
          🌱
        </span>
      </Text>
      <Button>Upgrade to Starter</Button>
    </Box>
  </DashboardShell>
)

export default FreePlanEmptyState
