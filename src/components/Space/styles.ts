import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    width: 60rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;

    p.title {
      font-family: Roboto;
      width: 50rem;
      font-size: 3.125rem;
      font-weight: 500;
      color: var(--white);
      margin:0 0 3.2rem 0;

    }
    p.info {
        width: 50rem;
        height: 6.5rem;
        margin: 3.4rem 0 0 0;
        font-family: Roboto;
        font-size: 1.2rem;
        font-weight: 400;
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
    flex-direction: row;
    align-items: center;
`;

export const Title = styled.div`
    font-family: Roboto;
    width: 50rem;
    font-size: 3.125rem;
    font-weight: 500;
    margin:0 6rem 2.2rem 0;
    align-items: flex-start;
    display: flex;
    color: var(--white);
`