import { dimensions } from '@styles/variables';
import styled from 'styled-components';

export const LinkItem = styled.li`
  display: flex;
  justify-content: center;
  position: relative;
  width: max-content;
  margin: 0 auto;
`;

export const Underline = styled.div`
  position: absolute;
  bottom: 0;
  height: 0;
  width: 0;
  transition: all 200ms;
  border-bottom: 1px solid ${({ theme }) => theme.colors.blueLinkHover};

  ${LinkItem}:hover & {
    width: 100%;
  }
`;

export const Link = styled.a`
  padding: 0.5rem;
  transition: all 200ms;
  color: ${({ theme }) => theme.colors.font};

  :hover {
    ${({ theme }) => theme.colors.blueLinkHover};
  }

  @media screen and (min-width: ${dimensions.screenSm}) {
    margin: 0 0.25rem;
  }
`;
