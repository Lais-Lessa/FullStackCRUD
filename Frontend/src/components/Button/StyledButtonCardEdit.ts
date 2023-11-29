import styled from 'styled-components';

export const StyledButtonCardEdit = styled.button`
  width: 80px;
  height: 30px;
  background-color: #f6ff64; 
  color: #2f2e41;
  border: none;
  border-radius: 5px; 
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.1s; 

  &:hover {
    background-color:  #e0e85f; 
    transform: scale(1.05); 
  }

  &:focus {
    outline: none; 
  }

  &:active {
    transform: scale(0.95); 
  }
`;
