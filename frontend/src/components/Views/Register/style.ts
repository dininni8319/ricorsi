import styled from 'styled-components';

export const RegisterStyle = styled.form`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    padding: 0%;
    margin: 0%;
    align-items: center;
    background-color: ${(props) => props.theme.backgroundColor};

    .row-form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    input {
        border-bottom: 2px solid ${(props) => props.theme.backgroundColor};
        outline: none;
        padding: 5px;
    }

    .section-img {
        position: relative;
        width: 60vw;
    }

    .section-img > img {
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }

    .section-img::before {
        content: '';
        width: 100%;
        height: 100%;
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        background: linear-gradient(
            102deg,
            rgba(196, 104, 255, 0.2),
            rgba(110, 145, 246, 0.2)
        );
    }

    @media  screen and (max-width : 700px) { 
        .section-img {
           display: none;
        }

    }

    h2,
    p,
    .icon-custom-style {
        position: absolute;
        left: 15%;
        color: rgba(255, 255, 255, 0.8);
        padding: 0 5px;
    }

    h2 {
        font-size: 30px;
        font-weight: 500;
        top: 40%;
    }

    p {
        top: 45%;
        font-size: small;
    }

    .icon-custom-style {
        top: 30%;
        left: 28%;
        transform: rotate(-5deg);
    }

    label {
        font-size: 12px;
    }
`;

export const ButtonStyle = styled.button`
    color: ${(props) => props.theme.textWhiteColor};
    background-color: ${(props) => props.theme.buttoncolor};
    width: 15rem;
    height: 2.5rem;
    border-radius: 20px;
    margin-top: 40px;
`;
