import React from 'react'
import useSWR from 'swr'

import EmptyState from '@/components/empty-state'
import SiteTableSkeleton from '@/components/site-table-skeleton'
import SiteTable from '@/components/site-table'
import DashboardShell from '@/components/dashboard-shell'
import fetcher from '@/utils/fetcher'

function Dashboard() {
  const { data } = useSWR('/api/sites', fetcher)

  if (!data) {
    return (
      <DashboardShell>
        <SiteTableSkeleton />
      </DashboardShell>
    )
  }

  return (
    <DashboardShell>
      {data.sites && data.sites.length ? <SiteTable sites={data.sites} /> : <EmptyState />}
    </DashboardShell>
  )
}

export default Dashboard
