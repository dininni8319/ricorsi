import styled from "styled-components";

export const FormContainer = styled.form`
    background-color: ${props => props.theme.footerColor};
    color: ${props => props.theme.colorWhite};
    width: 100%;
    min-height: 30vh;
    margin-bottom: 0;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .footer-container-custom {
        width: 80%;
        border: 1px solid #E8E8E8;
        padding-bottom: 15px;
        border-radius: 3px;
    }

    @media only screen and (max-width: 765px) {

    .footer-container-custom {
        padding-left: 20px
    }
  }
`