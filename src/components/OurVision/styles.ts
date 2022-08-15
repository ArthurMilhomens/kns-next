import styled from 'styled-components'

export const Container = styled.div`
    height: 120vh;
    width: 20rem;
    text-align: center;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;

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
        padding-bottom: 3rem;
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

export const ContainerImage = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 3.125rem;
    flex-direction: row;
    
    img {
    width: 180px !important;
    height: 180px;
    width: 200px;
    border: 5px solid red;
    border-radius: 50rem;
}
`