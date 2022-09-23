import styled from "styled-components";

export const DetailStyleComponent = styled.div`
  margin: 20px 0;
  width: 80%;
  padding: 20px;
  box-shadow: ${props => props.theme.boxShadow};
  background-color:${props => props.theme.colorWhite}
  
`