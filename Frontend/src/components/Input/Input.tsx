import { ForwardedRef, HTMLAttributes, forwardRef, useState } from "react"
import { FieldError } from "react-hook-form";
import { InputContainerStyled } from "./InputContainerStyled";
import { formatPhoneNumberInput } from "../../utils/utils";

interface IInputProps extends HTMLAttributes<HTMLInputElement>{
    type: string;
    label?: string;
    error?: FieldError;
    isPhoneNumber: boolean;
}

export const Input = forwardRef(({ label, error, type, isPhoneNumber, ...rest}: IInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const [inputValue, setInputValue] = useState('')

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const formattedValue = isPhoneNumber
          ? formatPhoneNumberInput(value)
          : value;
        setInputValue(formattedValue);
      };

    return(
        <InputContainerStyled>
        {label && <label>{label}</label>}
          <input ref={ref} type={type} {...rest} onChange={handleTextChange} value={inputValue}/>
        {error && <p>{error.message}</p>}
      </InputContainerStyled>
    );
  });