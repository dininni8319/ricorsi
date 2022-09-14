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
        margin-top: 5px;
        border-bottom: 1px solid ${props => props.theme.borderGrayColor};
       /*  border-radius: ${props => props.theme.borderRadius}; */
        padding: 7px 0;
        width: 80%;
        outline: none
    }

    label {
        text-align: start;
    }

`