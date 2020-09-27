import React from 'react'
import { Box, Text } from '@chakra-ui/core'

export const Th = (props) => {
  return (
    <Text
      as="th"
      p={4}
      color="gray.600"
      fontSize="xs"
      fontWeight="medium"
      textTransform="uppercase"
      {...props}
    />
  )
}

export const Td = (props) => {
  return (
    <Box
      as="td"
      p={4}
      color="gray.500"
      borderBottom="1px solid"
      borderBottomColor="gray.100"
      {...props}
    />
  )
}

export const Tr = (props) => {
  return (
    <Box
      as="tr"
      height="40px"
      backgroundColor="gray.50"
      borderTopLeftRadius={8}
      borderTopRightRadius={8}
      borderBottom="1px solid"
      borderBottomColor="gray.200"
      {...props}
    />
  )
}

export const Table = (props) => {
  return (
    <Box
      as="table"
      ml={0}
      mr={0}
      textAlign="left"
      backgroundColor="white"
      borderRadius={8}
      boxShadow="0px 4px 10px rgba(0, 0, 0, 0.05)"
      {...props}
    />
  )
}

export const TableHeader = () => (
  <thead>
    <Tr>
      <Th>Name</Th>
      <Th>Site Link</Th>
      <Th>Feedback Link</Th>
      <Th>Date Added</Th>
      <Th>{''}</Th>
    </Tr>
  </thead>
)
