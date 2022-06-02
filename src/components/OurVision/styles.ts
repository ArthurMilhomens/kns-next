import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    text-align: center;
    align-items: center;
    display: flex;
    flex-direction: column;

    p.first-text {
        font-family: Roboto;
        font-size: 1.25rem;
        font-weight: 400;
        color: var(--white);
        width: 59.9rem;
        padding-bottom: 2.625rem;
    }
    p.second-text {
        font-family: Roboto;
        font-size: 1.25rem;
        font-weight: 400;
        color: var(--white);
        width: 80.6rem;
        padding-bottom: 2.7rem;
    }
    p.title-text {
        font-family: Roboto;
        font-size: 1.9rem;
        font-weight: 500;
        color: var(--white);
        padding-bottom: 3.5rem;
    }
    img {
        width: 150px;
        height: 150px;
        border: 1px solid transparent;
        border-radius: 100px;
        margin-bottom: 3.125rem;
    }
    p.name-colaborator {
        font-family: Roboto;
        font-size: 1.5rem;
        font-weight: 500;
        color: var(--red);
        padding-bottom: 1.94rem;
    }
    p.description-text {
        font-family: Roboto;
        font-size: 1.125rem;
        font-weight: 400;
        width: 63.1rem;
    }
`;