import styled from "styled-components";

export const DetailStyleComponent = styled.div`
  margin: 20px 0;
  width: 80%;
  padding: 25px 15px;
  box-shadow: ${props => props.theme.boxShadow2};
  background-color:${props => props.theme.colorWhite};
  
  .ul-detail-style {
    border-radius: 5px;
  }

  h1 {
    font-weight: bold;
    font-size:30px;
  }

  .ul-detail-style > li  {
    display: flex;
    justify-content: space-between;
    padding: 15px 0px 2px 5px;
    border-bottom: 1px solid ${props => props.theme.borderColor2};
  }

  span {
    font-size: 14px;
  }

  strong {
    font-weight: bolder
  }

  .border-bottom-style {
    border-bottom: 1px solid rgb(209 213 219);
  }
  
  /*style for the modal */
  .primaryBtn {
    margin: 20px 10px;
    cursor: pointer;
    font-weight: 500;
    padding: 13px 25px;
    border-radius: 15px;
    font-size: 0.8rem;
    border: none;
    color: white;
    background: #185adb;
    transition: all 0.25s ease;
  }

  .primaryBtn:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px -10px rgba(24, 90, 219, 0.6);
  }
`