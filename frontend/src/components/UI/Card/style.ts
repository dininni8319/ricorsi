import styled from 'styled-components';

export const CardHeaderStyle = styled.div`
    width: 100%;
    height: 1px;
    margin-top: 5px;
    background-color: ${(props) => props.theme.blackColor};
`;

export const CardStyleComponent = styled.div`
    border-top-left-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    box-shadow: ${(props) => props.theme.boxShadow};

    .ul-style-custom > li {
        display: flex;
        justify-content: space-between;
        padding: 2px;

        span {
            font-size: 14px;
            color: ${(props) => props.theme.textGray};
        }
    }

    @media only screen and (max-width: 765px) {
        .link-detail-style {
            font-size: 10px;
        }
    }
    .btn-delete {
        display: flex;
        justify-content: end;
    }
`;
