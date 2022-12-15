import styled from 'styled-components';

export const SelectStyleComponent = styled.select`
    width: 100%;
    min-width: 15ch;
    max-width: 30ch;
    border: 1px solid var(--select-border);
    border-radius: 0.25em;
    padding: 0.25em 0.5em;
    font-size: 1.25rem;
    cursor: pointer;
    line-height: 1.1;
    background-color: #fff;
    background-image: linear-gradient(to top, #f9f9f9, #fff 33%);

    :root {
        --select-border: #777;
        --select-focus: blue;
        --select-arrow: var(--select-border);
    }

    #tributo::after {
        content: '';
        width: 0.8em;
        height: 0.5em;
        background-color: var(--select-arrow);
        clip-path: polygon(100% 0%, 0 0%, 50% 100%);
    }
`;
export const Wrapper = styled.div`
    width: 87%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${(props) => props.theme.backgroundGrayColor};
    margin: 5px;
    padding: 5px;

    .input-label {
        font-weight: bolder;
        text-transform: capitalize;
        margin-bottom: 5px;
    }

    select {
        outline: none;
        padding: 5px;
    }

    @media only screen and (max-width: 765px) {
        width: 98%;
    }
`;
