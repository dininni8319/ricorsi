import styled from 'styled-components';

export const LoginStyled = styled.form`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.backgroundColor};

    .row-form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    input {
        width: 90%;
        border-bottom: 1px solid ${(props) => props.theme.backgroundColor};
        outline: none;
        padding: 7px 0;
    }

    h1 {
        padding: 20px 0;
    }
`;
export const InputSection = styled.section`
    width: 50%;
    margin-bottom: 20px;

    @media screen and (max-width: 700px) {
        width: 80%;
    }
`;

export const ButtonStyle = styled.button.attrs(
    (props: { disabled: boolean }) => props
)`  
    color: ${(props) => props.theme.colorWhite};
    background-color: ${(props) => (props.disabled ? props.theme.disabledColor : props.theme.buttonColor)};
    font-weight: bold;
    width: 15rem;
    height: 2.5rem;
    border-radius: 20px;
    margin-top: 40px;

    &:hover {
        width: ${(props) => (props.disabled ? '' : '15.3rem')};
        height: ${(props) => (props.disabled ? '' : '2.6rem')};
    }
`;
