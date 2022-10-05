import styled from "styled-components";

export const CardHeaderStyle = styled.div`
  width: 100%;
  height: 12px;
  background-color: ${props => props.theme.navbarColor};
`
export const CardStyleComponent = styled.div`
  box-shadow: ${props=> props.theme.boxShadow};

  .btn-delete{
    display: flex;
    justify-content: end;
  }
`
