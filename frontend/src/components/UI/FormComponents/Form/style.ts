import styled from "styled-components";

export const FormContainer = styled.form `
    padding: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    .form-row {
        width: 50vw;
        display: flex;
        flex-direction: column;
        margin: 30px;
        background: ${(props) => props.theme.colorWhite};
        padding: 20px;
        box-shadow: ${props => props.theme.boxShadow};
    }
`