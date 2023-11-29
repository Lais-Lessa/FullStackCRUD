import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginSchema, TLoginSchema } from "../../schemas/loginSchema"
import { Input } from "../Input/Input"
import { StyledFormLogin } from "./StyledLogin/StyledFormLogin"
import { StyledContainerLogin } from "./StyledLogin/StyledContainerLogin"
import { StyledLogin } from "./StyledLogin/StyledLogin"
import { SubmitButtonStyled } from "../Button/SubmitButtonStyled"
import { toast } from "react-toastify"
import { IUserLoginResponse } from "../../providers/UserContext/@types"
import { api } from "../../services/Api"
import { useContext } from "react"
import { UserContext } from "../../providers/UserContext/UserContext"
import { useNavigate } from 'react-router-dom'

export const FormLogin = () => {

    const { register, handleSubmit, formState: { errors }, } = useForm<TLoginSchema>({
        resolver:zodResolver(LoginSchema),
    })

    const { setUser } = useContext(UserContext)

    const navigate = useNavigate()

    const handleUserLogin = async (data: TLoginSchema) => {
        const newData = {
            email: data.email,
            password: data.password,
        }
        try{
            const { data } = await api.post<IUserLoginResponse>('users/login', newData)
            localStorage.setItem('user', JSON.stringify(data.user))
            localStorage.setItem('@TOKEN', data.token)
            setUser(data.user)
            navigate(`/contact`)
            

            toast.success('Login bem-sucedido!', {
                className: 'toast-success',
              });
              
        } catch (error) {
            toast.error('Usuário ou Senha incorreto', {
                className: 'toast-error',
            })
        }
    }


  return (
    <>
    <StyledContainerLogin>
    <StyledFormLogin>
    <StyledLogin>
        <img src="/src/assets/login.svg" alt="" />
        <form  className="login-form" onSubmit={handleSubmit(handleUserLogin)}>

            <h1>Login</h1>

            <Input isPhoneNumber={false} type="email"
                          placeholder="E-mail"
                          id="email"
                          error={errors.email}
                          {...register('email')} />
                  

            <Input isPhoneNumber={false} type="password"
                          placeholder="Senha"
                          id="password"
                          error={errors.password}
                          {...register('password')} />
                
            <SubmitButtonStyled type="submit" > Entrar </SubmitButtonStyled>

        </form>
    </StyledLogin>
    </StyledFormLogin>
    </StyledContainerLogin>
    </>
  )
}
