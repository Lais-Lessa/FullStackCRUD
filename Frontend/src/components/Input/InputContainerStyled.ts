import styled from "styled-components";

export const InputContainerStyled = styled.fieldset`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: none;
    margin-top: 40px;
    width: 100%;
   
   input{
    background-color: rgba(47, 46, 65, 0.1); 
    border: 1px solid #ccc; 
    padding: 15px; 
    border-radius: 5px; 
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    color: black;
    transition: border-color 0.3s;
    font-size: 15px;

    &:hover {
      background-color: rgba(108, 99, 255, 0.3);
    }

   }

   input::placeholder {
    color: #2f2e41;
    font-size: 15px;
    }

    input::label {
      display: flex;
      align-items: start;
      justify-content: start;
    }

`