import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    background-image: url('assets/Frame.png');
    background-repeat: no-repeat;
    background-position: center;
    align-items: center;
    justify-content: center;
    text-align: center;
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

  @media (min-width: 986px) and (max-width: 1320px) {
    height: 35.7rem;
    width: 26rem;
    margin: 5.25rem;
  }
  @media (min-width: 815px) and (max-width: 985px) {
    height: 35.7rem;
    width: 22.5rem;
    margin: 2.25rem;
  }
  @media (min-width: 650px) and (max-width: 814px) {
    height: 35.7rem;
    width: 20rem;
    margin: 1.5rem;
  }
  @media (min-width: 500px) and (max-width: 649px) {
    height: 35.7rem;
    width: 18rem;
    margin: 0.5rem;
  }

    p {
        font-family: Roboto;
        font-size: 1.9rem;
        font-weight: 600;
        color: var(--white);

  @media (min-width: 986px) and (max-width: 1320px) {
    font-size: 1.5rem;
  }
  @media (min-width: 815px) and (max-width: 985px) {
    font-size: 1.3rem;
  }
  @media (min-width: 650px) and (max-width: 814px) {
    font-size: 1.1rem;
  }
  @media (min-width: 500px) and (max-width: 649px) {
    font-size: 0.9rem;
  }
        
    }
    p.title {
        font-family: Roboto;
        font-size: 1.6rem;
        font-weight: 500;
        color: var(--white);
        margin-top: 3.5rem;
        text-align: left;

  @media (min-width: 986px) and (max-width: 1320px) {
    font-size: 1.3rem;
  }
  @media (min-width: 815px) and (max-width: 985px) {
    font-size: 1rem;
  }
  @media (min-width: 650px) and (max-width: 814px) {
    font-size: 0.8rem;
  }
  @media (min-width: 500px) and (max-width: 649px) {
    font-size: 0.6rem;
  }    
    }
`;

export const ContainerList = styled.div`
    max-height: 18rem;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        display: none;
    }

    ol {
        margin-top: 3rem;
        margin-bottom: 4.5rem;
        list-style-type: disc !important;
        padding-left: 2rem;
    }

    li {
        font-family: Roboto;
        font-size: 1.6rem;
        font-weight: 500;
        color: var(--white);
        padding: 0.9rem 0 0.2rem 0;
        text-align: left;

  @media (min-width: 986px) and (max-width: 1320px) {
    font-size: 1.3rem;
  }
  @media (min-width: 815px) and (max-width: 985px) {
    font-size: 1.1rem;
  }
  @media (min-width: 650px) and (max-width: 814px) {
    font-size: 0.9rem;
  }
  @media (min-width: 500px) and (max-width: 649px) {
    font-size: 0.7rem;
  }
    }

`;

export const ContainerButton = styled.div`
    padding: 0.5rem 0.5rem 0.5rem 0.5rem;

    button {
        width: 20.75rem;
        height: 3.75rem;
        background-color: var(--red);
        color: var(--white);
        border-radius: 3.75rem;
        border-style: none;
        font-size: 1.25rem;
        text-align: center;
        opacity: 0.7;
        &:hover {
            opacity: 1;
            transition: 0.5s;
        }

  @media (min-width: 986px) and (max-width: 1320px) {
    width: 18rem;
    height: 3.25rem;
    font-size: 1.15rem;
  }
  @media (min-width: 815px) and (max-width: 985px) {
    width: 14rem;
    height: 2.75rem;
    font-size: 1.05rem;
  }
  @media (min-width: 650px) and (max-width: 814px) {
    width: 12rem;
    height: 2.5rem;
    font-size: 0.95rem;
  }
  @media (min-width: 500px) and (max-width: 649px) {
    width: 10rem;
    height: 2.5rem;
    font-size: 0.85rem;
  }
    }
`;

export const ContainerInfo = styled.div`
    position:absolute;
    width:100%;
    height:13.5rem;
    color:red;
    margin-top: 55rem;
    text-align: center;
    justify-content: center;
    align-items: center;

    p {
        font-family: Roboto;
        font-weight: 400;
        font-size: 1.25rem;
        color: var(--white);

  @media (min-width: 986px) and (max-width: 1320px) {
    font-size: 1.05rem;
  }
  @media (min-width: 815px) and (max-width: 985px) {
    font-size: 0.85rem;
  }
  @media (min-width: 650px) and (max-width: 814px) {
    font-size: 0.75rem;
  }
  @media (min-width: 500px) and (max-width: 649px) {
    font-size: 0.75rem;
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