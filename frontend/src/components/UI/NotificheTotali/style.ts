import styled from 'styled-components';

export const NotificheStyleComponent = styled.div`
    background: white;
    margin-top: 10px;
    padding: 5px;
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: ${(props) => props.theme.boxShadow};
    border-radius: 5px;
    h3 {
      text-align: center;
      color: orange;
      font-weight: bold;
      margin-top: 5px;
    }
    
    th, td {
      text-align: center;
    }
    /* @media only screen and (max-width: 765px) {
        
    } */
`;
