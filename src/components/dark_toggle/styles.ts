import styled from 'styled-components';

export const Button = styled.button`
  padding: 0.5rem 1rem;
`;

interface ContainerProps {
  darkTheme: boolean;
}

export const Container = styled.div<ContainerProps>`
  height: 1.75rem;
  width: 3rem;
  padding: 0.25rem;
  display: flex;
  justify-content: ${({ darkTheme }) => (darkTheme ? 'flex-end' : 'flex-start')};
  align-items: center;
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
`;

export const SvgIcon = styled.div`
  width: 1.25rem;
  height: 1.25rem;
`;
