import styled from "styled-components";

export const NavbarStyleComponent = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  z-index: 5;
  margin-top: 0;
  width: 100vw;
  min-height: 6vh;
  background-color: ${(props) => props.theme.transparent};

  .nav-label-style {
    background-color: transparent;
    font-size: 22px;
    color: ${props => props.theme.textColorGrey};
  }

  .style-logo {
    width: 100%;
    height: 60px;
    object-fit: cover;
  }

  a {
    font-size: 18px; 
    color: ${(props) => props.theme.blackColor}; 
  }

  a:hover {
    font-size: 20px; 
    color: ${(props) => props.theme.textGray};
    padding-bottom: 5px;
  }

  @media only screen and (max-width: 765px) {
    background-color: transparent;
    border: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 10px;
  }
`;
