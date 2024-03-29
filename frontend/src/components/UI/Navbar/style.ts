import styled from 'styled-components';

export const NavbarStyleComponent = styled.nav`
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    z-index: 5;
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 6vh;
    background-color: ${(props) => props.theme.transparent};
    z-index: 100;

    .nav-label-style {
        background-color: transparent;
        font-size: 18px;
        color: ${(props) => props.theme.textColorGrey};
    }

    .logout-icon-style {
        padding: 2px;
        border: 2px solid ${(props) => props.theme.textColorGrey};
        border-radius: 2px;
        cursor: pointer;
        color: ${(props) => props.theme.buttonColor};
    }

    .logout-icon-style:hover {
        transition: 0.6s ease-in;
        padding: 6px;
    }

    .style-logo {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    a {
        font-size: 16px;
        color: ${(props) => props.theme.blackColor};
    }

    /* a:hover {
    font-size: 20px;
    color: ${(props) => props.theme.textGray};
    padding-bottom: 5px;
  } */

    @media only screen and (max-width: 765px) {
        background-color: transparent;
        border: none;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        /* padding-left: 10px; */
    }
`;
