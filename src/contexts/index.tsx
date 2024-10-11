import React from 'react'
import LoginProvider from './not-authenticated/login/loginContext'
import RegisterProvider from './not-authenticated/register/registerContext'

const ContextWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <RegisterProvider>
      <LoginProvider>
        {children}
      </LoginProvider>
    </RegisterProvider>
  )
}

export default ContextWrapper