export interface registerChild {
  children: React.ReactNode;
}

export interface registerContextProps {
  isRegister: boolean,
  togglePasswordVisibility: () => void,
  password: string,
  email: string,
  username: string
  setPassword: React.Dispatch<React.SetStateAction<string>>,
  setEmail: React.Dispatch<React.SetStateAction<string>>,
  setUsername: React.Dispatch<React.SetStateAction<string>>,
  passwordVisible: boolean,
  setPasswordVisible: React.Dispatch<React.SetStateAction<boolean>>,
}