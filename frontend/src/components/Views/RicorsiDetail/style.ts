import styled from "styled-components";

export const DetailStyleComponent = styled.div`
  margin: 20px 0;
  width: 80%;
  padding: 20px;
  box-shadow: ${props => props.theme.boxShadow2};
  background-color:${props => props.theme.colorWhite};
  
  .ul-detail-style {
    padding: 10px;
    border-radius: 5px;
  }

  h1 {
    font-weight: bold;
    font-size:30px;
  }

  .ul-detail-style > li  {
    display: flex;
    justify-content: space-between;
    padding: 25px 0px 2px 5px;
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
`