import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    background-image: url('assets/Frame.png');
    background-repeat: no-repeat;
    background-position: center;
    align-items: center;
    justify-content: center;
`;

export const ContainerPlans = styled.div`
    display: flex;
    flex-direction: column;
    height: 35.7rem;
    width: 29.5rem;
    border: 0.1rem solid var(--white) ;
    background-color: rgba(17, 17, 17, 0.9);
    margin: 6.25rem;
    text-align: center;
    padding: 3.5rem 4rem 0 4rem;
`;

export const P = styled.p`
    font-family: Roboto;
    font-size: 1.9rem;
    font-weight: 600;
    color: var(--white);
`;

export const Ptittle = styled.p`
    font-family: Roboto;
    font-size: 1.6rem;
    font-weight: 500;
    color: var(--white);
    margin-top: 3.5rem;
    text-align: left;
`;

export const Plist = styled.p`
    font-family: Roboto;
    font-size: 1.6rem;
    font-weight: 500;
    color: var(--white);
    padding: 0.9rem 0 0.2rem 0;
    text-align: left;
`;

export const OL = styled.ol`
    margin-top: 3rem;
    margin-bottom: 4.5rem;
    list-style-type: disc !important;
    padding-left: 2rem;

`;

export const Button = styled.button`
    width: 20.75rem;
    height: 3.75rem;
    background-color: var(--red);
    color: var(--white);
    border-radius: 3.75rem;
    border-style: none;
    font-size: 1.25rem;
    text-align: center;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 0 0 0;
    opacity: 0.7;
    &:hover {
        opacity: 1;
        transition: 0.5s;
    }

`;

export const ContainerList = styled.div`
    max-height: 18rem;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        display: none;
    }

`;

export const ContainerButton = styled.div`
    padding: 0.5rem 0.5rem 0.5rem 0.5rem;
`;

export const PInfo = styled.p`
    font-family: Roboto;
    font-weight: 400;
    font-size: 1.25rem;
    color: var(--white);
`;

export const Span = styled.span`
    text-decoration: underline;
`;

export const ContainerInfo = styled.div`
    position:absolute;
    width:100%;
    height:13.5rem;
    color:red;
    margin-top: 51rem;
    text-align: center;
`;