import styled from 'styled-components'

export const Link = styled.a`
  text-decoration: underline;
          &:hover {
              color: var(--red);
              transition: 0.3s;
          }
`;