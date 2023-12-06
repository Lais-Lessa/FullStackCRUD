import { zodResolver } from "@hookform/resolvers/zod/src/zod.js"
import { SubmitHandler, useForm } from "react-hook-form"
import { RegisterSchema, TRegisterUserSchema } from "../../schemas/registerFormSchema"
import { useUserContext } from '../../hooks/useUserContext'
import { Input } from "../Input/Input"
import { FormRegisterStyle } from "./StyledRegister/FormRegisterStyle.styled"
import { StyledContainer } from "./StyledRegister/StyledContainer"
import { ImageSideStyle } from "../ImageSide/ImageSide.styled"
import { FormStyleBackGround } from "./StyledRegister/FormStyleBackGround"
import { ButtonStyled } from "../Button/ButtonStyled"
import { SubmitButtonStyled } from "../Button/SubmitButtonStyled"
import { StyledInnerContainer } from "./StyledRegister/StyledInnerContainer"
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleNumber } from "../../utils/utils"

export const FormRegister = () => {

  const { UserRegister } = useUserContext()
  const [toastStatus, setToastStatus] = useState(false);
  const navigate = useNavigate();


  const { register, handleSubmit, reset, formState: { errors }, } = useForm<TRegisterUserSchema>({
    resolver:zodResolver(RegisterSchema),
})

  const submit: SubmitHandler<TRegisterUserSchema> = async (data: TRegisterUserSchema) => {
    await UserRegister(data)
    }
    
    const isErros = Object.keys(errors).length >= 1

    useEffect(() => {
      if (toastStatus) {
        const timeout = setTimeout(() => {
          setToastStatus(false);
          navigate("/login");
        }, 1800);
        return () => clearTimeout(timeout);
      }
    }, [toastStatus]);

  return (
    <>
    <StyledContainer>
      <StyledInnerContainer>
      <h1>ContactHub</h1>
    <ImageSideStyle src="/src/assets/logoRegister.svg" alt="" />
      </StyledInnerContainer>
    <FormRegisterStyle  onSubmit={handleSubmit(submit)}>
      <FormStyleBackGround>
      <div>
      <h1>Cadastre-se</h1>
      <ButtonStyled as={Link} to="/login" type="button"> Entrar </ButtonStyled>
      </div>
      
      <Input type="text"
            placeholder="Nome Completo"
            id="name"
            error={errors.name}
            {...register('name')} />
      
      <Input type="email"
            placeholder="E-mail"
            id="email"
            error={errors.email}
            {...register('email')} />

      <Input type="password"
            placeholder="Digite aqui sua senha"
            id="password"
            error={errors.password}
            {...register('password')} />
             

      <Input
             type="password"
              placeholder="Confirmar senha"
              id="passwordConfirm"
              error={errors.confirm}
              {...register('confirm')} />
          

      <Input callback={handleNumber} type="text"
            placeholder="Digite seu telefone"
            id="phoneNumber"
            error={errors.phoneNumber}
            {...register('phoneNumber')} />
             
      <SubmitButtonStyled type="submit" disabled={isErros}> Cadastrar </SubmitButtonStyled>
      </FormStyleBackGround>
    </FormRegisterStyle>
    </StyledContainer>
    </>
  )
}

