import styled from 'styled-components'

export const Container = styled.div``;

export const Ol = styled.ol`
  display: flex;
  flex-direction: row;
  list-style: none;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Li = styled.li`
  padding: 1rem 2rem 1rem 2rem;
`;

export const A = styled.a`
  text-decoration: none;
  padding-bottom: 4px !important;
  cursor: pointer;

  &:hover {
    box-shadow: 0 5px 0 0 #FFFFFF !important;
    padding-bottom: 37px;
    opacity: 1 !important;
    transition: 0.7s;
  }
`;

export const Img = styled.img``;