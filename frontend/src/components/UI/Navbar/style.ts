import styled from "styled-components";

export const NavbarStyleComponent = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 0;
    width: 100vw;
    min-height: 6vh;
    /* border: 1px solid #E6E6E6; */
    background-color: ${(props) => props.theme.navbarColor};
   
    a {
        color: ${props => props.theme.colorWhite};
    }

    nav::after{
        position: absolute;
        bottom: -30px;
        content: '';
        height: 5px;
        background-color: red;
        border-bottom: 5px solid black;
    }
    
    @media only screen and (max-width: 765px) {
        background-color: transparent;
        border: none;
    }
`