import styled from 'styled-components';

export const ExportComponentStyle = styled.div`
    background-color: ${(props) => props.theme.colorWhite};
    margin-bottom: 0;
    margin-left: 10px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

    /* @media only screen and (max-width: 765px) {
        .footer-container-custom {
            padding-left: 20px;
        }
    } */
`;