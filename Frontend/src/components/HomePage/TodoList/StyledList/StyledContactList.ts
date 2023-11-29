import styled from "styled-components";

export const StyledContactList = styled.div`
  background-color: rgba(240, 240, 240, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-height: 500px; 
  overflow-y: auto; 

  &::-webkit-scrollbar {
    width: 12px;
  }

  
  &::-webkit-scrollbar-thumb {
    background-color: #6c63ff; 
    border-radius: 6px;
  }

  
  &::-webkit-scrollbar-track {
    background-color: rgba(240, 240, 240, 0.6);
    border-radius: 6px;
  }
  border-radius: 10px;
  padding: 10px;
  color: #2f2e41;
  margin-bottom: 30px;

  div {
    margin-bottom: 30px;
  }

  h3 {
    font-size: 50px;
    color: #2f2e41;
  }
`;