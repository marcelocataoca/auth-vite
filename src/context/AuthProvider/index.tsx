import React, {createContext, useEffect, useState} from 'react';
import { IAuthProvider, IContext, IUser } from './types';
import { getUserLocalStorage, LoginRequest, setUserLocalStorage } from './utils';

//contexto criado para inserir e enviar valores
export const AuthContext = createContext<IContext>({} as IContext)

//controla o estado de login e logout
export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IUser | null>()

  useEffect(() => {
    const user = getUserLocalStorage();

    if(user){
      setUser(user);
    } 
 
  }, [])

  async function authenticate (email: string, password: string){
    const response = await LoginRequest(email, password)
    console.log(response);
    
    const payload = { token: response.token, email}

    setUser(payload) //salvando no context
    setUserLocalStorage(payload)  //salvando no banco local
  }

  function logout(){
    setUser(null);
    setUserLocalStorage(null);
  }

  return (
    <AuthContext.Provider value={{...user, authenticate, logout}}>
      {children}
    </AuthContext.Provider>
  )
}