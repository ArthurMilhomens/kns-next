import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
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
    span.kns {
       color: var(--red);
    }
    img {
        height: 32rem;
        width: 60rem;
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
    flex-direction: row;
    align-items: center;

    button {
        margin: 0 2rem 0 2rem;
        background: transparent;
        border-style: none;
        border-radius: 50px;
    }
`;