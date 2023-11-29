import styled from 'styled-components'


export const StyledButtonHeader = styled.button`
  background-color:#f6ff64;
  color: #2f2e41;
  padding: 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 15px;
  margin-left: 600px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #e0e85f; 
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
  }
`