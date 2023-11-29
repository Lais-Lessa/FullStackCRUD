import styled from 'styled-components'


export const StyledModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  width: 30%; 

  backdrop-filter: blur(50px);
`