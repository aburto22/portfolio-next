import styled from 'styled-components';

export const LinkItem = styled.li`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
`;

export const Link = styled.a`
  padding: 0.5rem 0 0.5rem 0.5rem;
  width: 100%;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: ${({ theme }) => theme.colors.font};
`;
