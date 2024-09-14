import React from 'react'
import HomeStackProvider from './home/homeStackContet'
import LoginProvider from './login/loginContext'

const ContextWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <LoginProvider>
      <HomeStackProvider>
        {children}
      </HomeStackProvider>
    </LoginProvider>
  )
}

export default ContextWrapper