import styled from 'styled-components';

export const SearchStyleComponent = styled.header`
    width: 20vw;
    min-height: 20%;
    background: inherit;
    position: absolute;
    z-index: 50;
    top: 25%;
    left: 35%;

    ul {
        border-left: 3px solid ${(props) => props.theme.orangeColor};
        border-bottom: 1px solid ${(props) => props.theme.borderGrayColor};
    }

    .active-class {
        cursor: pointer;
        transition: ease-out;
        background: #f1f2f6;
    }

    input {
        width: 100%;
        padding: 0.5rem 0.3rem;
        outline: none;
        border-radius: 30px;
        cursor: pointer;
        text-align: center;
        box-shadow: ${(props) => props.theme.boxShadow2};
        margin-bottom: 3px;
    }

    @media only screen and (max-width: 765px) {
        top: 34%;
        left: 25%;
        input,
        ul {
            width: 200px;
        }
    }
`;
