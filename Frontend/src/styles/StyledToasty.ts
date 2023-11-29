import { ToastContainer } from "react-toastify";
import styled from "styled-components";

export const StyledToasty = styled(ToastContainer)`

  .Toastify__toast--success {
    background-color: red;
    font-size: 14px;
    color: black;
    font-weight: 700;

    .Toastify__toast-body {
        fill: red;
    }

    .Toastify__progress-bar--success {
      background-color: green;
    }
  }

  .Toastify__toast--error {
    font-weight: 700;
    color: red;
    font-size: 14px;
    background-color: red;

    .Toastify__toast-body {
        fill: red;
    }


    .Toastify__progress-bar--error {
      background-color: red;
    }
  }
`;
