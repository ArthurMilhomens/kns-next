import styled from 'styled-components'


export const Container = styled.div`
  max-width: 60.75rem;
  padding-top: 0.1rem;
  background-color: transparent;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Table = styled.table`
  width: 60.75rem;
  height: 36rem;
  font-size: 1.25rem;
  background: rgba(17, 17, 17, 0.7);
  text-align: center;
  border-collapse: collapse;

  tr,th,td {
    border: 1px solid #FFFFFF;
    box-sizing: border-box;
  }

  td,thead {
    width: 9.3rem;
    height: 4.5rem;
  }
`;

export const Zoom = styled.td`
  color: #111111;
  font-size: 1.25rem;
  font-weight: 500;
  background-color: var(--white);
  letter-spacing: 0.1em;
  line-height: 1.5rem;
`;

export const Operation = styled.div`
  display: flex;
  flex-direction: row;
  width: 61rem;
  text-align: left;
  margin-bottom: 1.87rem;
  margin-left: 1.87rem;
  align-items: center;
  p {
    color: var(--white);
    font-size: 1rem;
    line-height: 1.18rem;
    width: 26rem;
  }

  svg {
    height: 1.56rem;
    width: 1.56rem;
    color: var(--white);
    margin-right: 20px;
  }
`;

export const Footer = styled.p`
  height: 0.875rem;
  font-weight: 300;
  align-self: flex-end;
  font-size: 0.75rem;
  line-height: 0.875rem;
  color: var(--white);
  margin-top: 0.437rem;
`;
