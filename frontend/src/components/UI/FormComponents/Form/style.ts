import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60vw;
  padding: 20px;

  .form-row {
    padding-top: 10px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 30px;
    background: ${(props) => props.theme.colorWhite};
    padding: 20px;
    box-shadow: ${(props) => props.theme.boxShadow2};
  }

  .btn-send {
    background-color: ${(props) => props.theme.navbarColor};
    font-size: 20px;
  }

  input[type="file"]::-webkit-file-upload-button {
    background-color: ${(props) => props.theme.backgroundGrayColor};
    border: none;
    width: 60%;
    font-weight: 700;
    font-size: 14px;
    color: ${(props) => props.theme.grayInputText};
    display: inline-block;
    padding: 10px 30px;
    cursor: pointer;
  }

  .checkbox-style {
    display: flex;
    background: ${(props) => props.theme.backgroundGrayColor};
  }

  @media only screen and (max-width: 1500px) {
    width: 80vw;
    .form-row {
      padding: 5px;
    }
  }

  @media only screen and (max-width: 765px) {
    width: 100vw;

    .form-row {
      grid-template-columns: 1fr;
      align-items: center;
      padding: 5px;
    }
  }
`;
