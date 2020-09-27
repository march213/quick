import React from 'react'
import PropTypes from 'prop-types'
import {
  Flex,
  Icon,
  Box,
  Link,
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Button,
} from '@chakra-ui/core'
import { useRouter } from 'next/router'

import { useAuth } from '@/lib/auth'
import AddSiteModal from './add-site-modal'

const DashboardShell = ({ children }) => {
  const auth = useAuth()
  const router = useRouter()

  return (
    <Flex flexDirection="column" height="100vh">
      <Flex as="nav" justify="space-between" alignItems="center" py={4} px={8}>
        <Flex alignItems="center">
          <Icon name="logo" color="black" mr={4} />
          <Link mr={4}>Feedback</Link>
          <Link>Sites</Link>
        </Flex>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Button
            variant="ghost"
            mr={2}
            onClick={() => {
              auth.signout()
              router.push('/')
            }}
            fontWeight="400"
          >
            Log Out
          </Button>
          <Avatar size="sm" src={auth.user?.photoUrl} />
        </Box>
      </Flex>
      <Flex backgroundColor="gray.100" justifyContent="center" p={8} flexGrow="1">
        <Flex maxWidth={800} width="100%" direction="column">
          <Flex justify="space-between" align="center">
            <Box>
              <Breadcrumb>
                <BreadcrumbItem>
                  <BreadcrumbLink color="gray.700" fontSize="sm">
                    Sites
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
              <Heading mb={6}>Sites</Heading>
            </Box>
            <AddSiteModal variantColor="teal" text="+ Add Site" />
          </Flex>
          {children}
        </Flex>
      </Flex>
    </Flex>
  )
}

DashboardShell.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DashboardShell
