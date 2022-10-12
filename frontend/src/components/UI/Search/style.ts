import styled from 'styled-components';

export const SearchStyleComponent = styled.header`
  width: 30vw;
  min-height: 20%;
  background: inherit;

  input {
    width: 100%;
    padding: 0.7rem 0.4rem;
    outline: none;
    cursor: pointer;
    border-radius: 20px;
    text-align: center;
    box-shadow: ${props => props.theme.boxShadow2}
  }
  
  @media only screen and (max-width: 765px) {
      width: 100%;
      display: flex;
      justify-content: center;
  }
`;