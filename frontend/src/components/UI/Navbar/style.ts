import styled from "styled-components";

export const NavbarStyleComponent = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    z-index: 5;
    margin-top: 0;
    width: 100vw;
    min-height: 6vh;
    background-color: ${(props) => props.theme.transparent};
   
    a {
        color: ${props => props.theme.textColorGrey};
    }
    
    @media only screen and (max-width: 765px) {
        background-color: transparent;
        border: none;
    }
`