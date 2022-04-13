//represetar o usuario que será criado dentro do contexto
export interface IUser{
  email?: string;
  token?: string;
}

export interface IContext extends IUser{
  authenticate: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

//iterface para receber um filho
export interface IAuthProvider{
  children: JSX.Element;
}