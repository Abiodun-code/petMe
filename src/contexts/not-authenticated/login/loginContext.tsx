import React, { createContext, useState } from 'react'
import { loginChild, loginContextProps } from '../../../types/not-authenticated/loginType'

export const LoginContext = createContext({} as loginContextProps)

const LoginProvider = ({children}: loginChild) => {

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');  // State for email input
  const [password, setPassword] = useState('');  // State for password input

  // Toggle password visibility
  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);

  // Check if both email and password are provided
  const isLogin = !email || !password;


  return (
    <LoginContext.Provider value={{
      passwordVisible, setPasswordVisible, email, setEmail, password, setPassword, togglePasswordVisibility, isLogin 
    }}>
      {children}
    </LoginContext.Provider>
  )
}

export default LoginProvider