import styled from "styled-components";

export const InputSection = styled.div.attrs(
  (props: { checkBox: boolean }) => props
)`
  width: ${(props) => (props.checkBox ? "40%" : "")};
  height: ${(props) => (props.checkBox ? "70%" : "")};
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.checkBox ? "center" : "flex-start")};
  margin-left: ${(props) => (props.checkBox ? "5px" : "")};
  padding: ${(props) => (props.checkBox ? "10px" : "20px 5px")};
  background: ${(props) => (props.checkBox ? "#F1F2F6" : "transparent")};
  border-radius: ${(props) => (props.checkBox ? "5px" : "0")};

  .input-label {
    font-weight: bold;
    text-transform: capitalize;
  }

  .input-style {
    width: ${(props) => (props.checkBox ? "30px" : "90%")};
    height: ${(props) => (props.checkBox ? "30px" : "")};
    padding: ${(props) => (props.checkBox ? "" : "10px 5px")};
    margin-top: 5px;
    border-radius: ${(props) => props.theme.borderRadius};
    border: 1px solid ${(props) => props.theme.borderGrayColor};
    border-radius: ${(props) => (props.checkBox ? "10px" : "")};
    background: ${(props) => (props.checkBox ? "#eee" : "white")};
    outline: none;
  }

  label {
    margin-bottom: ${(props) => (props.checkBox ? "10px" : "")};
    font-size: ${(props) => (props.checkBox ? "14px" : "")};
    text-align: start;
  }

  .error-message {
    font-size: 12px;
    color: red;
    padding: 3px;
    display: none;
  }

  input:invalid[focused="true"] {
    border: 1px solid red;
  }

  /* input:valid[focused="true"] {
    border: 1px solid green;
  }

  input:invalid[focused="true"] ~ span {
    display: block;
  } */
`;
