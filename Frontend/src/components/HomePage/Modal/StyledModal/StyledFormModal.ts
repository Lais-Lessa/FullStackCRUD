import styled from 'styled-components'


export const StyledFormModal = styled.form`
    background-color: #e8e5f5bf;
    padding: 10px;
    display: flex;
    align-items: center;
    display: flex;
    flex-direction: column;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    width: 100%;
    height: 80%;
    
    .custom-input{
        width: 90%;
        background-color: #ccc3ff;
        border:none;
    }

    label{
        color: black;
        display: flex;
        align-items: start;
        justify-content: start;
        width: 90%;
        margin-bottom: 15px;
    }
`