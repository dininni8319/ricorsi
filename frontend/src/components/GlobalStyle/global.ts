import { createGlobalStyle } from 'styled-components';

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
    
    h5 {
       color: white;
    }

    ul {
        list-style: none
    }

    a {
       color: #272D36;
       font-size: 14px;
       transition: 1s;
       color: inherit;
    }
    a:hover {
        color:#10B981;
    }
`

export const Theme = {
      navbarColor: "#10B981",
      footerColor: '#272D36',
      borderColor: '#F2F2F2',
      textColorGrey: 'rgba(255,255,255,0.9)',
      
      //color for the input and line bottom
      borderGrayColor: '#e5e5e5',
      textShadow: 'text-shadow:  5px 5px 11px rgba(0,0,0,1)',
      
      //not in use
      backgroundBodyColor: '',
      buttoncolor: '',
      blueColor: '',
      grayColor: '',
      //////////////
      
      //General Colors
      colorGold: '#fca311',
      pinkColor: '#586BA4',
      transparent: 'transparent',
      goldColor: 'gold',
      colorWhite: 'white',
      blackColor: 'black',
      //we could usse this colour for the text, not in use at the moment
      textGray: '#1C1C1C',
      
      boxShadow: 'box-shadow: 0 0 10px rgba(0, 0, 0, 0.4)',
      //that for the details pages
      boxShadow2: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px',
      borderRadius: '5px',
      fontFamily: '"Roboto", sans-serif',
}
