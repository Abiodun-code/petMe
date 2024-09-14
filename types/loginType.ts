export interface loginChild {
  children: React.ReactNode;
}

export interface loginContextProps {
  isLogin: boolean,
  togglePasswordVisibility: ()=> void,
  password: string,
  email: string,
  setPassword: React.Dispatch<React.SetStateAction<string>>,
  setEmail: React.Dispatch<React.SetStateAction<string>>,
  passwordVisible: boolean,
  setPasswordVisible: React.Dispatch<React.SetStateAction<boolean>>,
}