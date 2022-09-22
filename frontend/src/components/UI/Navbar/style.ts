import styled from "styled-components";

export const NavbarStyleComponent = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: sticky;
    z-index: 20;
    margin-top: 0;
    width: 100vw;
    min-height: 5vh;
    border: 1px solid #E6E6E6;
    background-color: ${(props) => props.theme.navbarColor};

    @media only screen and (max-width: 765px) {
        background-color: transparent;
        border: none;
    }
`