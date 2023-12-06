import { ForwardedRef, forwardRef } from "react"
import { InputContainerStyled } from "./InputContainerStyled";
import { IInputProps } from "../../providers/UserContext/@types";


export const Input = forwardRef(({ label, error, type, callback, ...rest}: IInputProps, ref: ForwardedRef<HTMLInputElement>) => {

    return(
        <InputContainerStyled>
        {label && <label>{label}</label>}
          <input ref={ref} type={type} {...rest} onKeyUp={callback} />
        {error && <p>{error.message}</p>}
      </InputContainerStyled>
    );
  });