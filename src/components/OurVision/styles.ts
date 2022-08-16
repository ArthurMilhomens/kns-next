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
    }
    p.second-text {
        font-family: Roboto;
        font-size: 1.25rem;
        font-weight: 400;
        color: var(--white);
        width: 80.6rem;
        padding-bottom: 2rem;
    }
    p.title-text {
        font-family: Roboto;
        font-size: 1.9rem;
        font-weight: 500;
        color: var(--white);
    }
    
    p.name-colaborator {
        font-family: Roboto;
        font-size: 1.5rem;
        font-weight: 500;
        color: var(--red);
        padding-bottom: 1rem;
    }
    p.description-text {
        font-family: Roboto;
        font-size: 1.125rem;
        font-weight: 400;
        width: 63.1rem;
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
`;

export const Arrow = styled.div`
  cursor: pointer;
  font-size: 25px;
  opacity: 1;
  color: #000;
`;