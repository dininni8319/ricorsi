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
       color: blueviolet;
    }
`

export const Theme = {
      //Colors
      borderCoulor: '#F2F2F2',
      backgroundBodyColor: '#F7F8FA',
      goldColor: 'gold',
      navbarColor: "#10B981",
      footerColor: '#272D36',
      textColorGrey: '#808080',
      borderColor: '#FCEADE',
      buttoncolor: '#A56FF8',
      colorGold: '#fca311',
      grayColor: '#272D36',
      pinkColor: '#586BA4',
      blueColor: '#8338ec',
      blueLightColor: '#a3e6f5',
      transparent: 'transparent',
      colorWhite: 'white',
      borderGrayColor: '#a9a9a9',
      
      //Box-shadow
      boxShadow: 'rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px',
      boxShadow2: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px',
      //Border-radius
      borderRadius: '5px',
  
      //Font Style
      fontFamily: '"Roboto", sans-serif',
}
