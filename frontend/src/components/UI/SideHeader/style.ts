import styled from "styled-components";

export const SideHeaderStyleComponent = styled.div`
  .section-img {
    position: relative;
    width: 40vw;
  }

  .section-img > img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }

  .section-img::before {
    content: "";
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    background: linear-gradient(transparent, rgba(0, 10, 0, 0.3)),
    linear-gradient(180deg, rgba(0, 10, 0, 0.6), #03045e);
  }

  .style-logo {
    position: absolute;
    top: 30%;
    left: 20%;
    padding: 0 5px;
  }

  h2 {
    position: absolute;
    top: 40%;
    left: 15%;
    font-size: 25px;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.9);
  }

  p {
    position: absolute;
    top: 46%;
    font-size: 10px;
    color:  rgba(255, 255, 255, 0.9);
    padding: 0 30px;
    text-align: justify;
  }

  .icon-custom-style {
    top: 32%;
    left: 28%;
    transform: rotate(-5deg);
  }

  @media only screen and (max-width: 765px) {
    .section-img {
      display: none;
    }
  }
`;
