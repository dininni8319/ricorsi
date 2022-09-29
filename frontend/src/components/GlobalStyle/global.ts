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
       transform: 3s
    }

    a:hover{
        color: blue;
    }
`

export const Theme = {
      //Colors
      borderCoulor: '#F2F2F2',
      backgroundBodyColor: '#F7F8FA',
      goldColor: 'gold',
      navbarColor: "#10B981",
      footerColor: '#272D36',
      textColorGrey: 'rgba(255,255,255,0.9)',
      //color for the input and line bottom
      borderColor2: 'rgb(209 213 219)',
      
      //not in use
      buttoncolor: '#577590',
      //////////////
      colorGold: '#fca311',
      grayColor: '#272D36',
      pinkColor: '#586BA4',
      blueColor: '#8338ec',
      blueLightColor: '#a3e6f5',
      
      transparent: 'transparent',
      colorWhite: 'white',
      blackColor: 'black',
      borderGrayColor: '#a9a9a9',
      
      //Box-shadow
      boxShadow: 'box-shadow: 0 0 10px rgba(0, 0, 0, 0.4)',
      boxShadow2: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px',
      //Border-radius
      borderRadius: '5px',
  
      //Font Style
      fontFamily: '"Roboto", sans-serif',
}
