import styled from 'styled-components';

export const StyledButtonCardRemove = styled.button`
  width: 80px;
  height: 30px;
  background-color: #e74c3c; 
  color: #fff; 
  border: none;
  border-radius: 5px; 
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.1s; 

  &:hover {
    background-color: #c0392b; 
    transform: scale(1.05); 
  }

  &:focus {
    outline: none;
  }

  &:active {
    transform: scale(0.95); 
  }
`;