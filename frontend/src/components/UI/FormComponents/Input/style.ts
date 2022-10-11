import styled from "styled-components";

export const InputSection = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
 
    .input-label {
        font-weight: bold;
        text-transform: capitalize;
    }
    
    .input-style {
        padding: 15px;
        margin-top: 5px;
        border-radius: ${props => props.theme.borderRadius};
        border: 1px solid ${props => props.theme.borderGrayColor};
        background: ${props => props.theme.transparent};
        width: 100%;
        outline: none
    }

    label {
        text-align: start;
    }

    .error-message {
        font-size: 12px;
        color: red;
        padding: 3px;
        display: none;
    }

    input:invalid[focused='true'] {
        border: 1px solid red;
    }

    input:valid[focused='true'] {
        border: 1px solid green;
    }
    
    input:invalid[focused='true'] ~ span {
        display: block;
    }
`