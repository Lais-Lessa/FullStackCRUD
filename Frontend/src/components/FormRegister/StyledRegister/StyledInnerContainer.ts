import styled from 'styled-components'


export const StyledInnerContainer = styled.div`
  flex: 1;
  width: 50%; 
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
  font-size: 70px;
  margin-top: 80px;
  text-align: center;
  text-transform: uppercase;
  color: #333;
  position: relative;
  text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.2); 
}

h1::before {
  content: ''; 
  position: absolute;
  bottom: -8px; 
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 20px;
  background: linear-gradient(to right, rgba(108, 99, 255, 0), #6c63ff, rgba(108, 99, 255, 0));
  border-radius: 10px; 
  z-index: -1; 
  filter: drop-shadow(0px 4px 4px rgba(108, 99, 255, 0.5)); 
}
`