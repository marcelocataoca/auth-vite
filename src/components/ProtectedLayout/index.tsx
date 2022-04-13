//Somente pessoas logadas acessam as rotas
import React from 'react';
import { useAuth } from '../../context/AuthProvider/useAuth';

export const ProtectedLayout = ({children}: {children: JSX.Element}) => {
  const auth = useAuth()
  console.log(auth);
  
  if(!auth.email){
    return <h1>You don't have access</h1>
  }
  return children;
}