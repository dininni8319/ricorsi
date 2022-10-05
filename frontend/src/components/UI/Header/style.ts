import styled from 'styled-components';
import img from'../../../assets/icons/man_suit.webp';

export const HeaderComponent = styled.header`
    width: 100%;
    min-height: 50vh;
    background: linear-gradient(transparent,rgba(0,10,0,0.7)),linear-gradient(180deg,rgba(0,10,0,0.1), #0f084b), url(${img});
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    clip-path: polygon(
        0 0,
        100% 0,
        100% 75%,
        0 calc(100% - 1vw) 
    );
    
    .h2-custom-class { 
      position: absolute;
      color: transparent;
      top: 40%;
      left: 30%;
      font-size: 40px;
      color: rgb(255,255,255)
    }
`;
