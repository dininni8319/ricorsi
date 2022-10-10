import styled from "styled-components";

export const FormContainer = styled.form `
    padding: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60vw;

    .form-row {
        padding-top: 10px;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin: 30px;
        background: ${(props) => props.theme.colorWhite};
        padding: 20px;
        box-shadow: ${props => props.theme.boxShadow2};
    }

    .btn-send {
        background-color: ${props => props.theme.navbarColor};
        font-size: 20px;
    }

    @media only screen and (max-width: 1300px) {
        .form-row {
            grid-template-columns: 1fr;
            align-items: center;
            padding: 5px;
        }
    }
`