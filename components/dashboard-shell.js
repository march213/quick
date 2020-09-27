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
import { useAuth } from '@/lib/auth'
import AddSiteModal from './add-site-modal'

const DashboardShell = ({ children }) => {
  const auth = useAuth()

  return (
    <Flex flexDirection="column" height="100vh">
      <Flex as="nav" justifyContent="space-between" py={4} px={8}>
        <Flex>
          <Icon name="logo" color="black" mr={4} mt="-4px" />
          <Link mr={4}>Feedback</Link>
          <Link>Sites</Link>
        </Flex>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Button variant="ghost" mr={2} onClick={() => auth.signout()} fontWeight="400">
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
