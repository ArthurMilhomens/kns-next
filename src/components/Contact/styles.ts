import styled from 'styled-components'

export const Container = styled.div`
    height: 90vh;
    text-align: center;
    align-items: center;
    justify-content: center;
    padding-top: 5rem;

    p.number {
        display: flex;
        font-family: Roboto;
        font-size: 1rem;
        font-weight: 300;
        color: var(--white);
        padding-bottom: 1.6rem;
        justify-content: flex-start;

        span {
            padding-left: 1rem;
        }

  @media (min-width: 986px) and (max-width: 1320px) {
    
  }
  @media (min-width: 815px) and (max-width: 985px) {
    font-size: 0.9rem;
    margin-left: 0.5rem;
  }
  @media (min-width: 650px) and (max-width: 814px) {
    font-size: 0.9rem;
    margin-left: 0.5rem;
  }
  @media (min-width: 500px) and (max-width: 649px) {
    font-size: 0.8rem;
    margin-left: 0.5rem;
  }
    }
    p.location {
        display: flex;
        font-family: Roboto;
        font-size: 1rem;
        font-weight: 300;
        color: var(--white);
        justify-content: flex-start;

        span {
            padding-left: 1rem;
        }

  @media (min-width: 986px) and (max-width: 1320px) {
    
  }
  @media (min-width: 815px) and (max-width: 985px) {
    font-size: 0.9rem;
    margin-left: 0.5rem;
  }
  @media (min-width: 650px) and (max-width: 814px) {
    font-size: 0.9rem;
    margin-left: 0.5rem;
  }
  @media (min-width: 500px) and (max-width: 649px) {
    font-size: 0.8rem;
    margin-left: 0.5rem;
  }
    }
    button {
        width: 18.75rem;
        height: 3.75rem;
        background-color: var(--white);
        border: 0.0625rem solid transparent;
        border-style: none;
        border-radius: 3.125rem;
        opacity: 0.7;
        margin: 5.3rem 3.44rem 2.2rem 0;

        &:hover {
            opacity: 1;
            transition: 0.5s;
        }

  @media (min-width: 986px) and (max-width: 1320px) {

  }
  @media (min-width: 815px) and (max-width: 985px) {
    width: 16.75rem;
    height: 3.75rem;
  }
  @media (min-width: 650px) and (max-width: 814px) {
    width: 14.75rem;
    height: 3.75rem;
  }
  @media (min-width: 500px) and (max-width: 649px) {
    width: 16.75rem;
    height: 3.75rem;
  }
    }

`;

export const ContainerFinalInfo = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;

    img {
        height: 25.3rem;
        width: 60.75rem;
        max-height: 25.3rem;
        margin-bottom: 2.5rem;
        transition: 0.3s;
        transform: scale(1);
        border: 1px solid transparent;
        border-radius: 50px;

        &:hover {
            transform: scale(1.05);
            background-color: var(--white)
        }

  @media (min-width: 986px) and (max-width: 1320px) {
    height: 25.3rem;
    width: 59.5rem;
  }
  @media (min-width: 815px) and (max-width: 985px) {
    height: 25.3rem;
    width: 48.5rem;
  }
  @media (min-width: 650px) and (max-width: 814px) {
    height: 25.3rem;
    width: 42.5rem;
  }
  @media (min-width: 500px) and (max-width: 649px) {
    height: 26.3rem;
    width: 30.5rem;
  }
    }
    p.reserved {
        font-family: Roboto;
        font-size: 1rem;
        font-weight: 300;
        color: var(--white);
        margin-top: 1.25rem;

  @media (min-width: 986px) and (max-width: 1320px) {
  }
  @media (min-width: 815px) and (max-width: 985px) {

  }
  @media (min-width: 650px) and (max-width: 814px) {
    font-size: 1rem;
  }
  @media (min-width: 500px) and (max-width: 649px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
    }
    a.insta-icon {
        transform: scale(1);

        &:hover {
            transform: scale(1.3);
            transition: 0.3s;
        }

  @media (min-width: 986px) and (max-width: 1320px) {

  }
  @media (min-width: 815px) and (max-width: 985px) {

    }
  @media (min-width: 650px) and (max-width: 814px) {
    font-size: 0.7rem;
    padding: 0 1.5rem 0 1.5rem;
  }
  @media (min-width: 500px) and (max-width: 649px) {
    font-size: 0.6rem;
    padding: 0 1rem 0 1rem;
  }
    }
`;