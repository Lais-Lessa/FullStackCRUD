import styled from 'styled-components';

export const StyledEditModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff; 
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  z-index: 1000; 
  width: 60%; 
  height: auto; 
  max-height: 80vh; 
`;