import styled from "styled-components";

export const LoaderStyleComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;

  span {
    display: inline-block;
    background-color: purple;
    width: 0;
    height: 0;
    border-radius: 50%;
    margin: 0 8px;
    animation: bounce 0.6s infinite alternate;
    transform: translate3d(0);
  }

  span:nth-child(2) {
    background-color: palevioletred;
    animation-delay: 0.2s;
  }

  span:nth-child(3) {
    animation-delay: 0.4s;
  }

  @keyframes bounce {
    to {
      width: 16px;
      height: 16px;
      transform: translate3d(0, -16px, 0);
    }
  }
`;
