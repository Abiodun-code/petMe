import React from 'react'
import HomeStackProvider from './home/homeStackContet'

const ContextWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <HomeStackProvider>
      {children}
    </HomeStackProvider>
  )
}

export default ContextWrapper