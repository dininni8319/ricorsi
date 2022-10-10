import styled from "styled-components";

export const FormContainer = styled.form `
    padding: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    /* .modal {
        position: fixed; 
        left: 35%;
        top: 10%;  
        width: 50%;
        height: 60%;
        z-index: 1000;
        overflow: scroll;
        background: white;
        box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
        border-radius: 4px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        backdrop-filter: blur(8px);
    } */

    .form-row {
        padding-top: 10px;
        width: 40vw;
        display: flex;
        flex-direction: column;
        margin: 30px;
        background: ${(props) => props.theme.colorWhite};
        padding: 20px;
        box-shadow: ${props => props.theme.boxShadow2};
    }

    .btn-send {
        background-color: ${props => props.theme.navbarColor};
        font-size: 20px;
    }
`