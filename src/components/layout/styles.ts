import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.font};
  background-color: ${({ theme }) => theme.colors.background};
`;
