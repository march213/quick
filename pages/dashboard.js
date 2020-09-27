import React from 'react'
import useSWR from 'swr'

// import { useAuth } from '@/lib/auth'
import EmptyState from '@/components/empty-state'
import SiteTableSkeleton from '@/components/site-table-skeleton'
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

  console.log('data', data)

  return (
    <DashboardShell>
      <EmptyState />
    </DashboardShell>
  )
}

export default Dashboard
