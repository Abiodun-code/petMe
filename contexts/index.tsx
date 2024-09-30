import React from 'react'
import HomeStackProvider from './home/homeStackContet'
import LoginProvider from './login/loginContext'
import RegisterProvider from './register/registerContext'

const ContextWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <RegisterProvider>
      <LoginProvider>
        <HomeStackProvider>
          {children}
        </HomeStackProvider>
      </LoginProvider>
    </RegisterProvider>
  )
}

export default ContextWrapper