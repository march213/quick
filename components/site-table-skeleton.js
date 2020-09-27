import React from 'react'
import { Box, Skeleton } from '@chakra-ui/core'
import { Table, Td, TableHeader } from './table'

const SkeletonRow = ({ width }) => {
  return (
    <Box as="tr">
      <Td>
        <Skeleton height="10px" w={width} my={4} />
      </Td>
      <Td>
        <Skeleton height="10px" w={width} my={4} />
      </Td>
      <Td>
        <Skeleton height="10px" w={width} my={4} />
      </Td>
      <Td>
        <Skeleton height="10px" w={width} my={4} />
      </Td>
    </Box>
  )
}

const SiteTableSkeleton = () => (
  <Table>
    <TableHeader />
    <tbody>
      <SkeletonRow width="75px" />
      <SkeletonRow width="125px" />
      <SkeletonRow width="50px" />
      <SkeletonRow width="100px" />
      <SkeletonRow width="75px" />
    </tbody>
  </Table>
)

export default SiteTableSkeleton
