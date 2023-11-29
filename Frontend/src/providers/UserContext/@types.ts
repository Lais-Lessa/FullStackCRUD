import { ReactNode } from 'react'
import { TRegisterUserSchema } from '../../schemas/registerFormSchema'

export interface IUserContextProvider {
  children: ReactNode
}

export interface IUser {
  email: string
  name: string
  id: number
}

export interface IUserContext {
  user: IUser | null
  globalLoading: boolean
  setGlobalLoading: (state: boolean) => void
  UserRegister: (data: TRegisterUserSchema) => Promise<void>
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>
}

export interface IUserLoginResponse {
  token: string
  user: IUser
  id: number
}

export interface IUserRegisterResponse {
  accessToken: string
  user: IUser
}

export interface IGetUserResponse {
  email: string
  password: string
  name: string
  id: number
}
