import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    text-align: center;
    align-items: center;
    justify-content: center;

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
    }
    button {
        width: 18.75rem;
        height: 3.75rem;
        background-color: var(--white);
        border: 0.0625rem solid transparent;
        border-style: none;
        border-radius: 3.125rem;
        opacity: 1;
        margin: 5.3rem 3.44rem 2.2rem 0;

        &:hover {
            opacity: 0.7;
            transition: 0.5s;
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
        margin-bottom: 2.8rem;
        scale: 1.0;

        &:hover {
            scale: 1.3;
            transition: 0.5s;
        }
    }
    p.reserved {
        font-family: Roboto;
        font-size: 1rem;
        font-weight: 300;
        color: var(--white);
        margin-top: 1.25rem;
    }
`;