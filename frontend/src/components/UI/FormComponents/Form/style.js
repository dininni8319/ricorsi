import styled from "styled-components";

export const FormContainer = styled.form `
    width: 100%;
    height: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    
    .form-row {
        display: flex;
        flex-direction: column;
        margin: 30px;
        background: ${(props) => props.theme.colorWhite};
        padding: 20px;
        box-shadow: ${props => props.theme.boxShadow};
    }


`