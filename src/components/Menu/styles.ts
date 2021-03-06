import styled from 'styled-components'

export const Container = styled.div`
  padding-top: 0.1rem;
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
  padding-bottom: 0.1rem !important;
  cursor: pointer;

  &:active, &:hover {
    box-shadow: 0 0.125rem 0 0 #FFFFFF !important;
    padding-bottom: 2.32rem;
    opacity: 1 !important;
    transition: 0.5s;
  }
`;

export const Img = styled.img`
  height: 5rem;
  width: 5rem;
`;