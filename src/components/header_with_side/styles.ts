import { dimensions, fonts } from '@styles/variables';
import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 30;
  background-color: ${({ theme }) => theme.colors.background};
  height: ${dimensions.heightHeader};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
`;

export const Nav = styled.nav`
  max-width: ${dimensions.screenLg};
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  padding: 0 0.5rem;
`;

export const LogoLink = styled.a`
  padding: 0.5rem;
  margin: 0 0.25rem;
  font-family: ${fonts.fontHand};
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 2rem;
  color: ${({ theme }) => theme.colors.font};
`;

interface DarkToggleContainerProps {
  isShowing: boolean;
}

export const DarkToggleContainer = styled.div<DarkToggleContainerProps>`
  margin-left: auto;
  display: ${({ isShowing }) => (isShowing ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${dimensions.screenMd}) {
    display: flex;
  }
`;

export const Button = styled.button`
  margin-left: auto;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  height: 3rem;
  width: 4rem;

@media screen and (min-width: ${dimensions.screenMd}) {
  display: none;
}
`;
