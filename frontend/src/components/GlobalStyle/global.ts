import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,300;1,400&family=Roboto+Condensed&family=Roboto:wght@400;500&display=swap');

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
`

export const Theme = {
      //Colors
      backgroundColor: '#F2F2F2',
      goldColor: 'gold',
      textWhiteColor: 'white',
      textColorGrey: '#808080',
      borderColor: '#FCEADE',
      buttoncolor: '#A56FF8',
      buttonColorGold: 'gold',
      grayColor: '#272D36',
      pinkColor: '#586BA4',
      whiteColor: '#fff',
      blueColor: '#8338ec',
      blueLightColor: '#a3e6f5',
      transparent: 'trnasparent',
      colorWhite: 'white',
      borderGrayColor: '#a9a9a9 ',
      //Box-shadow
      boxShadow: 'rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px',
  
      //Border-radius
      borderRadius: '5px',
  
      //Font Style
      fontFamily: '"Roboto", sans-serif',
}
