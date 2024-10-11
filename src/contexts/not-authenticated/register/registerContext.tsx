import React, { createContext, useState } from 'react'
import { registerChild, registerContextProps } from '../../../types/not-authenticated/registerType';

export const RegisterContext = createContext({} as registerContextProps)

const RegisterProvider = ({ children }: registerChild) => {

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  // Toggle password visibility
  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);

  // Check if both username email and password are provided
  const isRegister = !username || !email || !password;

  return (
    <RegisterContext.Provider value={{
      passwordVisible, setPasswordVisible, togglePasswordVisibility, isRegister, email, setEmail, password, setPassword, username, setUsername
    }}>
      {children}
    </RegisterContext.Provider>
  )
}

export default RegisterProvider
