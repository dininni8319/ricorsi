import styled from 'styled-components';

export const DetailStyleComponent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 60vh;
    margin: 20px 0;

    .ul-detail-style {
        border-radius: 5px;
        width: 80%;
        padding: 25px 15px;
        box-shadow: ${(props) => props.theme.boxShadow2};
        background-color: ${(props) => props.theme.colorWhite};
    }

    h1 {
        font-weight: bold;
        font-size: 25px;
        span {
            font-size: 20px;
            color: ${(props) => props.theme.textGray};
        }
    }

    .ul-detail-style > li {
        display: flex;
        justify-content: space-between;
        padding: 15px 5px;
        border-bottom: 1px solid ${(props) => props.theme.borderGrayColor};

        span {
            font-size: 14px;
            color: ${(props) => props.theme.textGray};
        }
    }

    .border-bottom-style {
        border-bottom: 1px solid rgb(209 213 219);
    }

    /* button start workflow */
    .primaryBtn {
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

    .links-detail-page {
        min-width: 30%;
        background-color: ${(props) => props.theme.colorWhite};
        padding: 10px;
    }

    .ul-files-class {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        justify-content: space-between;
        padding: 20px 5px;
        width: 80vw;
    }
    
    .files-style {
        background-color: white;
        padding: 5px;
        box-shadow: ${(props) => props.theme.boxShadow2};
        
    }

    @media only screen and (max-width: 765px) {
        .link-detail-style {
            min-width: 100%;
            font-size: 12px;
        }

        .ul-detail-style {
            width: 95%;
        }

        .primaryBtn {
            margin-right: 4px;
            padding: 10px 5px;
            border-radius: 15px;
        }
    }
`;
