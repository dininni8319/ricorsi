import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
    }

    body {
        background-color: #F7F8FA;
    }

    h1 {
        font-size: 38px;
        font-weight:normal;
        padding: 25px 0;
    }
    
    h5 {
       color: white;
    }

    ul {
        list-style: none
    }

    a {
       font-size: 14px;
       transition: 1s;
       color: inherit;
       color: #03045e;
       font-weight: 600;
    }

    input, select, button {
        outline: none;
        cursor: pointer;
    }


    input[type="file"]::-webkit-file-upload-button {
        background-color: #F1F2F6;
        border: none;
        width: 60%;
        font-weight: 700;
        font-size: 14px;
        color: #888888;
        display: inline-block;
        padding: 10px 30px;
        cursor: pointer;
    }
`;

export const Theme = {
  navbarColor: "#10B981",
  footerColor: "#272D36",
  borderColor: "#F2F2F2",
  textColorGrey: "rgba(255,255,255,0.8)",

  //color for the input and line bottom
  borderGrayColor: "#e5e5e5",
  textShadow: "text-shadow:  5px 5px 11px rgba(0,0,0,1)",
  bodyBackgroundColor: "rgba(222,222,222)",
  //not in use
  backgroundGrayColor: "#F1F2F6",
  buttonColor: "#fca311",
  blueColor: "",
  grayInputText: "#888888",
  //////////////

  //General Colors
  colorGold: "#fca311",
  pinkColor: "#586BA4",
  transparent: "transparent",
  goldColor: "gold",
  colorWhite: "white",
  blackColor: "black",
  orangeColor: "#fc8414",
  //we could usse this colour for the text, not in use at the moment
  textGray: "#1C1C1C",

  boxShadow: "box-shadow: 0 0 10px rgba(0, 0, 0, 0.4)",
  //that for the details pages
  boxShadow2: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
  borderRadius: "5px",
  fontFamily: '"Roboto", sans-serif',
};
