import styled from "styled-components";

export const WrapperStyleComponent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    padding: 20px;
    width: 100vw;

    @media only screen and (max-width: 1500px) {
        grid-template-columns: 1fr 1fr;
    }

    @media only screen and (max-width: 765px) {
        grid-template-columns: 1fr;
        align-items: center;
        padding: 5px;
    }
`