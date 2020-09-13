import React from 'react'

import { useAuth } from '@/lib/auth'
import EmptyState from '@/components/empty-state'

function Dashboard() {
  const auth = useAuth()

  if (!auth.user) return 'Loading...'

  return <EmptyState />
}

export default Dashboard
