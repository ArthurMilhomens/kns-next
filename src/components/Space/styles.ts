import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    width: 60rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;

    p.info {
        width: 50rem;
        height: 6.5rem;
        margin: 3.4rem 0 0 0;
        font-family: Roboto;
        font-size: 1.2rem;
        font-weight: 400;

  @media (min-width: 986px) and (max-width: 1320px) {
    font-size: 1rem;
  }
  @media (min-width: 815px) and (max-width: 985px) {
    font-size: 0.9rem;
  }
  @media (min-width: 650px) and (max-width: 814px) {
    font-size: 0.7rem;
    width: 45rem;
  }
  @media (min-width: 500px) and (max-width: 649px) {
    font-size: 0.6rem;
    width: 35rem;
    
  }
    }
    a {
        text-decoration: underline;
        &:hover {
            color: var(--red);
            transition: 0.3s;
        }
    }
`;

export const ContainerIMG = styled.div`
    display: flex;
    height: 30rem;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;

  @media (min-width: 986px) and (max-width: 1320px) {
    height: 30rem;
  }
  @media (min-width: 815px) and (max-width: 985px) {
    height: 30rem;
    width: 80%;
    margin: auto;
  }
  @media (min-width: 650px) and (max-width: 814px) {
    height: 30rem;
    width: 75%;
    margin: auto;
  }
  @media (min-width: 500px) and (max-width: 649px) {
    height: 30rem;
    width: 55%;
    margin: auto;
  }
`;

export const Title = styled.div`
    font-family: Roboto;
    width: 50rem;
    font-size: 3.125rem;
    font-weight: 500;
    margin:0 6rem 2.2rem 0;
    justify-content: flex-start;
    display: flex;
    color: var(--white);

  @media (min-width: 986px) and (max-width: 1320px) {
    font-size: 3rem;
  }
  @media (min-width: 815px) and (max-width: 985px) {
    font-size: 2.7rem;
    width: 40rem;
  }
  @media (min-width: 650px) and (max-width: 814px) {
    font-size: 2.6rem;
    width: 35rem;
    margin:0 6rem 0 0;
  }
  @media (min-width: 500px) and (max-width: 649px) {
    font-size: 2.4rem;
    width: 25rem;
    margin:0 6rem 0 0;

  }
`