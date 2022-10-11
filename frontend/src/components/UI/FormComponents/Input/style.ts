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
        border: 1px solid ${props => props.theme.borderGrayColor};
        background: ${props => props.theme.transparent};
        width: 100%;
        outline: none
    }

    label {
        text-align: start;
    }
`