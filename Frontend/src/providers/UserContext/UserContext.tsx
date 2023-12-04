import { createContext, useState } from "react";
import { IUser, IUserContext, IUserContextProvider, IUserRegisterResponse } from "./@types";
import { useNavigate } from 'react-router-dom'
import { TRegisterUserSchema } from "../../schemas/registerFormSchema";
import { api } from "../../services/Api";
import { toast } from "react-toastify";

export const UserContext = createContext({} as IUserContext)

export const UserContextProvider = ({ children }: IUserContextProvider) => {

    const [ user, setUser ] = useState<IUser | null> (null)

    const [ globalLoading, setGlobalLoading ] = useState(false)
    
    const navigate = useNavigate()

    const UserRegister = async (data: TRegisterUserSchema) => {
        const newData = {
            name: data.name,
            email: data.email,
            password: data.password,
            phoneNumber: data.phoneNumber,
        }

        try{
            await api.post<IUserRegisterResponse>('/users', newData)
            toast.success('Usuário cadastrado com sucesso', {
                className: 'toast/sucess',
                autoClose:600,
            })
            navigate('/login')
        } catch (error) {
            toast.error('Ops! Algo deu errado',{
                autoClose: 600,
                className: 'toast-error',
            })
        }
    }

    return(
        <UserContext.Provider value={{
            user, 
            globalLoading,
            setGlobalLoading,
            UserRegister,
            setUser,
        }}>
            { children }
        </UserContext.Provider>
    )
}