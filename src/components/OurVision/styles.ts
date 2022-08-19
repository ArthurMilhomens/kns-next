import styled from 'styled-components'

export const Container = styled.div`
    height: 110vh;
    width: 99vw;
    text-align: center;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;

    .slick-list {
        max-width: 60rem;
        flex-direction: row;
    }

    p.first-text {
        font-family: Roboto;
        font-size: 1.25rem;
        font-weight: 400;
        color: var(--white);
        width: 59.9rem;
        padding-bottom: 2rem;

  @media (min-width: 986px) and (max-width: 1320px) {
    font-size: 1rem;
  }
  @media (min-width: 815px) and (max-width: 985px) {
    font-size: 0.8rem;
    width: 50rem;
  }
  @media (min-width: 650px) and (max-width: 814px) {
    font-size: 0.8rem;
    width: 42rem;
  }
  @media (min-width: 500px) and (max-width: 649px) {
    font-size: 0.7rem;
    width: 30rem;
  }
    }
    p.second-text {
        font-family: Roboto;
        font-size: 1.25rem;
        font-weight: 400;
        color: var(--white);
        width: 80.6rem;
        padding-bottom: 2rem;

  @media (min-width: 986px) and (max-width: 1320px) {
    font-size: 1rem;
    width: 65rem;
  }
  @media (min-width: 815px) and (max-width: 985px) {
    font-size: 0.8rem;
    width: 52rem;
  }
  @media (min-width: 650px) and (max-width: 814px) {
    font-size: 0.8rem;
    width: 45rem;
  }
  @media (min-width: 500px) and (max-width: 649px) {
    font-size: 0.7rem;
    width: 32rem;
  }
    }
    p.title-text {
        font-family: Roboto;
        font-size: 2.2rem;
        font-weight: 500;
        color: var(--white);

  @media (min-width: 986px) and (max-width: 1320px) {
    font-size: 1.9rem;
  }
  @media (min-width: 815px) and (max-width: 985px) {
    font-size: 1.5rem;
  }
  @media (min-width: 650px) and (max-width: 814px) {
    font-size: 1.5rem;
  }
  @media (min-width: 500px) and (max-width: 649px) {
    font-size: 1.4rem;
  }
    }
    
    p.name-colaborator {
        font-family: Roboto;
        font-size: 1.5rem;
        font-weight: 500;
        color: var(--red);
        padding-bottom: 1rem;

  @media (min-width: 986px) and (max-width: 1320px) {
    font-size: 1.5rem;
  }
  @media (min-width: 815px) and (max-width: 985px) {
    font-size: 1.2rem;
  }
  @media (min-width: 650px) and (max-width: 814px) {
    font-size: 1.2rem;
  }
  @media (min-width: 500px) and (max-width: 649px) {
    font-size: 1.2rem;
  }
    }
    p.description-text {
        font-family: Roboto;
        font-size: 1.125rem;
        font-weight: 400;
        width: 63.1rem;

  @media (min-width: 986px) and (max-width: 1320px) {
    font-size: 1rem;
  }
  @media (min-width: 815px) and (max-width: 985px) {
    font-size: 0.8rem;
    width: 52rem;
  }
  @media (min-width: 650px) and (max-width: 814px) {
    font-size: 0.8rem;
    width: 42rem;
  }
  @media (min-width: 500px) and (max-width: 649px) {
    font-size: 0.7rem;
    width: 33rem;

  }
    }
`;

export const MySlider = styled.div`
  width: 50%;
  height: 30%;
  margin-bottom: 5rem;
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
`;

export const Arrow = styled.div`
  cursor: pointer;
  font-size: 25px;
  opacity: 1;
  color: #000;
`;