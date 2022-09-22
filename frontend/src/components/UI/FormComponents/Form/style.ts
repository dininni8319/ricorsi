import styled from "styled-components";

export const FormContainer = styled.form `
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .form-row {
        width: 65vw;
        display: flex;
        flex-direction: column;
        margin: 30px;
        background: ${(props) => props.theme.colorWhite};
        padding: 20px;
        box-shadow: ${props => props.theme.boxShadow};
    }
`