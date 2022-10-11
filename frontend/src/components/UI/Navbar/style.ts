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
   
    .style-logo {
        width: 100%;
        height: 50px;
        object-fit: cover;
    } 
    a {
        font-size: 22px;
        color: ${props => props.theme.textColorGrey};
        transition: 0.5s ease-in-out;
    }

    a:hover{
        font-size: 20px;
        color: rgba(255,255,255,0.9);
        padding-bottom: 5px;
        border-bottom: 3px solid white;
    }
    
    @media only screen and (max-width: 765px) {
        
        background-color: transparent;
        border: none;
    }
`