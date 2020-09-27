import React from 'react'
import Link from 'next/link'
import { Box } from '@chakra-ui/core'
import { Table, Td, TableHeader } from './table'

const SiteTable = ({ sites }) => {
  return (
    <Table>
      <TableHeader />
      <tbody>
        {sites.map((site) => {
          return (
            <Box as="tr" key={site.id}>
              <Td>{site.name}</Td>
              <Td>{site.url}</Td>
              <Td>
                <Link href="/">
                  <a>View Feedback</a>
                </Link>
              </Td>
              <Td>{site.createdAt}</Td>
            </Box>
          )
        })}
      </tbody>
    </Table>
  )
}

export default SiteTable
