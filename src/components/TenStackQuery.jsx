'use client'
import React, { Children, useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

const TenStackQuery = ({children}) => {
    const [queryClient] = useState(() => new QueryClient())
    
  return (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
  )
}

export default TenStackQuery