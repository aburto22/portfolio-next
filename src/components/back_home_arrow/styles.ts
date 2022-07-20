import styled from 'styled-components';
import { dimensions } from '@styles/variables';

export const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: ${dimensions.screenMd};
  margin: 0 auto;
  width: 100%;
`;

export const Link = styled.a`
  display: flex;
  font-size: 0.75rem;
  line-height: 1rem;
  color: ${({ theme }) => theme.colors.blueLink};
  margin-right: 1rem;

  :hover {
    color: ${({ theme }) => theme.colors.blueLinkHover};
  }
`;

export const SvgIcon = styled.div`
  height: 1rem;
  width: 1rem;
  margin-right: 0.25rem;
`;

export const Line = styled.hr`
  flex-grow: 1;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
`;
