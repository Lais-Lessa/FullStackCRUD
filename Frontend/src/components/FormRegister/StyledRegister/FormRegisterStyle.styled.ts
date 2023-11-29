import styled from "styled-components";

export const FormRegisterStyle = styled.form`

    width: 50%; 
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
   
    h1 {
        position: relative;
        display: inline-block;
        color: #2f2e41;
        font-size: 40px;

}

    h1::before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 50%; 
        height: 4px; 
        background-color: #6c63ff;
        border-radius: 10px;

    }


`;