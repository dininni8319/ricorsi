import styled from 'styled-components';

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60vw;
    padding: 20px;

    .form-row {
        padding-top: 10px;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin: 30px;
        background: ${(props) => props.theme.colorWhite};
        padding: 20px;
        box-shadow: ${(props) => props.theme.boxShadow2};
    }

    .btn-send {
        width: 100%;
        background-color: ${(props) => props.theme.buttonColor};
        font-size: 20px;
    }

    .checkbox-style {
        display: flex;
        background: ${(props) => props.theme.backgroundGrayColor};
    }

    @media only screen and (max-width: 1500px) {
        width: 80vw;
        .form-row {
            padding: 5px;
        }
    }

    @media only screen and (max-width: 765px) {
        width: 100vw;

        .form-row {
            grid-template-columns: 1fr;
            align-items: center;
            padding: 5px;
        }
    }
`;
