import { UserButton } from '@clerk/nextjs'
import React from 'react'

const DashboardPage = () => {
  return (
    <div>
      Dashboard Page (protected)
      <UserButton afterSignOutUrl='/'/>
    </div>
  )
}

export default DashboardPage