import styled from "styled-components";

export const StyledListCard = styled.li`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center; 
  padding: 10px; 
  border-top: 2px solid #6c63ff; 
  height: 100px;
  
  div{
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 40px;
  }

  p {
    font-size: 20px;
    color: #2f2e41;
  }

 
  p + p {
    margin-left: 10px;
  }

`