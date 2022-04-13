import { useContext } from "react"
import { AuthContext } from ".";

//facilitador para utilizar contextos nos componentes
export const useAuth = () => {
  const context = useContext(AuthContext); 

  return context; 
}