import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

    h5{
        color: white;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Roboto', monospace;
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
  
      //Box-shadow
      boxShadow: 'none',
  
      //Border-radius
      borderRadius: '10px',
  
      //Font Style
      fontFamily: '"Roboto", sans-serif',
}
