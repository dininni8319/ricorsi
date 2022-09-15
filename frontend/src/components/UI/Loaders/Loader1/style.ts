import styled from "styled-components";

export const LoaderStyleComponent = styled.div`
   width: 100px;
   
   .loader1 {
      height: 40px;
      transform-origin: bottom center;
      animation: rotateCircle 3s linear infinite;
   }

   .circle {
      display: inline-block;
      background-color: purple;
      height: 40px;
      width: 40px;
      border-radius: 50%;
      animation: grow 1.5s linear infinite;
      transform: scale(0);
      margin: -10px;
    }

    .circle:nth-child(2) {
      background-color: palevioletred;
      animation-delay: 1s
    }

    @keyframes rotateCircle {
      to {
         transform: rotate(360deg)
      }       
    }

    @keyframes grow {
      50% {
         transform: scale(1)
      }       
    }
`