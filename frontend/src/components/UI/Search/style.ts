import styled from "styled-components";

export const SearchStyleComponent = styled.header`
  width: 20vw;
  min-height: 20%;
  background: inherit;
  position: absolute;
  z-index: 50;
  top: 25%;

  ul {
    border-left: 3px solid ${(props) => props.theme.orangeColor};
    border-bottom: 1px solid ${(props) => props.theme.borderGrayColor};
    
  }

  .active-class {
    cursor: pointer;
    transition: 0.6s ease-out;
    background: ${(props) => props.theme.bodyBackgroundColor};
  }

  input {
    width: 100%;
    padding: 0.7rem 0.4rem;
    outline: none;
    cursor: pointer;
    text-align: center;
    box-shadow: ${(props) => props.theme.boxShadow2};
    margin-bottom: 3px;
  }

  @media only screen and (max-width: 765px) { 
    top: 28%;
    left: 4%;

    input, ul {
      width: 200px;
    } 
  }
`;
