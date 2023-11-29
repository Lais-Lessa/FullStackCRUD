import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  body {
    height: 100vh;
    width: 99vw;
    background-color: var(--color-white);
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto', sans-serif;;
  }

  button{
    cursor: pointer;
    background: transparent;
    border: none;
  }

   ul, ol{
     list-style: none;
   }

  a{
    text-decoration: none;
  }

   input, textarea{
     border: 0;
     background: transparent;
    outline: none;
   } */

  :focus {
    outline: 0;
  }
 
  .toast-sucess,
  .toast-error {
    z-index: 200;
  }

  .toast-sucess,
  .toast-error {
    background-color: var(--color-grey-2);
    color: var(--color-black);
    font-family: 'Inter', sans-serif;
  }

  .toast-sucess img,
  .toast-sucess svg {
    fill: var(--color-sucess);
    width: 28px;
    height: 28px;
  }

  .toast-error img,
  .toast-error svg {
    fill: var(--color-negative);
    width: 28px;
    height: 28px;
  }
`
