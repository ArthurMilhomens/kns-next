import styled from 'styled-components'

export const MySlider = styled.div`
  width: 1350px;
  height: 500px;
  text-align: center;
  justify-content: center;
  align-items: center;
    img {
    width: 32rem;
    height: 32rem;
    border-radius: 100%;

  @media (min-width: 986px) and (max-width: 1320px) {
    width: 30rem;
    height: 30rem;
  }
  @media (min-width: 815px) and (max-width: 985px) {
    width: 25rem;
    height: 25rem;
  }
  @media (min-width: 650px) and (max-width: 814px) {
    width: 25rem;
    height: 25rem;
  }
  @media (min-width: 500px) and (max-width: 649px) {
    width: 20rem;
    height: 20rem;
  }
  }
    .slick-initialized{
    display: flex;
    align-items: center;
    justify-content: center;
  }
    .slide {
    transform: scale(0.2);
    transition: transForm 300ms;
    opacity: .5;
    border-radius: 100%;
  }
    .activeSlide {
    transform: scale(0.4);
    opacity: 1;
  }
  .slick-active {
    justify-content: center;
    display: flex;
  }

  @media (min-width: 986px) and (max-width: 1320px) {
    width: 75%;
  }
  @media (min-width: 815px) and (max-width: 985px) {
    width: 75%;
  }
  @media (min-width: 650px) and (max-width: 814px) {
    width: 90%;
    height: 25%;
  }
  @media (min-width: 500px) and (max-width: 649px) {
    width: 100%;
    height: 20%;
  }
`