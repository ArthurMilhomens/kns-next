import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
  align-self: center;
  margin-right: 10rem;
`;

export const P1 = styled.p`
  font-size: 4.1rem;
  font-weight: 700;
`;

export const P2 = styled.p`
  font-size: 4.1rem;
  font-weight: 700;
  margin-bottom: 1rem;
  margin-left: 20rem ;
`;

export const Span = styled.span`
  color: var(--red);
`;

export const LineArea = styled.div`
  background:
    linear-gradient(
      to left, 
      rgba(255,255,255,0) 0%,
      rgba(255,255,255,0) 5%,
      #FFFFFF 50%,
      rgba(255,255,255,0) 100%
    )
    right
    bottom
    transparent    
    no-repeat; 
    background-size: 60% 0.2rem;
    margin-bottom: 10rem
`;