import styled from "styled-components";

export const InputSection = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;

    .input-label {

    }
    .input-style {
        margin-top: 5px;
        border-bottom: 1px solid ${props => props.theme.borderGrayColor};
       /*  border-radius: ${props => props.theme.borderRadius}; */
        padding: 7px 0;
        width: 40%;
        outline: none
    }

`