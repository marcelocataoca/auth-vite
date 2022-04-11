import { Api } from "../../services/api";
import { IUser } from "./types";

export function setUserLocalStorage(user: IUser | null){
  localStorage.setItem('usuario', JSON.stringify(user));
}

export function getUserLocalStorage(){
  const json = localStorage.getItem('usuario');

  if(!json) return null;

  const user = JSON.parse(json);

  return user ?? null;
}

export async function LoginRequest(email:string, password: string) {
  try{
    const request = await Api.post('login', {email, password})
  }catch(error){
    return error;
  }
}