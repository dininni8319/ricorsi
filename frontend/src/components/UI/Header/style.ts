import styled from 'styled-components';
import img from'../../../assets/icons/man_suit.webp';

export const HeaderComponent = styled.header`
    width: 100%;
    min-height: 32vh;
    background: linear-gradient(transparent,rgba(0,10,0,0.7)), url(${img});
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
  

    &::after {
      content: "";
     
      position: absolute;
      inset: 0px;
      margin-top: -1px;
      transform: skewY(-2deg);
      transform-origin: 50% 0px;
      outline: transparent solid 1px;
      /* backface-visibility: hidden;
      background-color: inherit; */
    }
  
    .h2-custom-class { 
      position: absolute;
      color: transparent;
      top: 70%;
      left: 30%;
      font-size: 40px;
      color: rgb(255,255,255)
    }
`;
