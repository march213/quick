import React from 'react'
import Link from 'next/link'
import { Box } from '@chakra-ui/core'
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'

import { Table, Td, TableHeader } from './table'

const SiteTable = ({ sites }) => {
  return (
    <Table>
      <TableHeader />
      <tbody>
        {sites.map((site, index) => {
          return (
            <Box as="tr" key={site.url}>
              <Td fontWeight="medium">{site.name}</Td>
              <Td>{site.url}</Td>
              <Td>
                <Link href="/">
                  <a>View Feedback</a>
                </Link>
              </Td>
              <Td>{format(parseISO(site.createdAt), 'PPp')}</Td>
            </Box>
          )
        })}
      </tbody>
    </Table>
  )
}

export default SiteTable
