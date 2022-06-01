import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 0.1rem;
  position: fixed;
`;

export const Ol = styled.ol`
  display: flex;
  flex-direction: row;
  list-style: none;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 400;
`;

export const Li = styled.li`
  padding: 0 3rem 0 3rem;
  color: #FFFFFF;
`;

export const A = styled.a`
  text-decoration: none;
  cursor: pointer;

  &:active, &:hover {
    background:
    linear-gradient(
      to left, 
      rgba(255,255,255,0) 0%,
      rgba(255,255,255,0) 5%,
      #FFFFFF 50%,
      rgba(255,255,255,0) 100%
    )
    left 
    bottom
    transparent    
    no-repeat; 
    background-size: 100% 2px;
  }
`;

export const Img = styled.img`
  height: 5rem;
  width: 5rem;
`;