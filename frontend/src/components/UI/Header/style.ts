import styled from "styled-components";
import img from "../../../assets/images/man_suit.webp";

export const HeaderComponent = styled.header.attrs(
  (props: { user: boolean }) => props
)`
  width: 100%;
  min-height: 40vh;
  background: linear-gradient(transparent, rgba(0, 10, 0, 0.7)),
  linear-gradient(180deg, rgba(0, 10, 0, 0.1), #0f084b), url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  clip-path: ${props => props.user ? 'polygon(0 0, 100% 0, 100% 75%, 0 calc(100% - 1vw))' : ''};

  .h2-custom-class {
    position: absolute;
    color: transparent;
    top: 40%;
    left: 30%;
    font-size: 35px;
    color: ${(props) => props.theme.colorWhite};
  }

  @media only screen and (max-width: 765px) {
    clip-path: none;
    .h2-custom-class {
      top: 50%;
      left: 4%;
      font-size: 18px;
    }
  }
`;
