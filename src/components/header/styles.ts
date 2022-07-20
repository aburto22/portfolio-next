import { dimensions, fonts } from '@styles/variables';
import styled, { css } from 'styled-components';

export const Header = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 3;
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  height: ${dimensions.heightHeader};
`;

export const Nav = styled.nav`
  width: 100%;
  max-width: ${dimensions.screenLg};
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  padding: 0 0.5rem;
`;

export const LogoButton = styled.button`
  padding: 0.5rem;
  margin: 0 0.25rem;
  font-family: ${fonts.fontHand};
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: bold;
`;

interface NavLinksContainerProps {
  isShowing: boolean;
}

export const NavLinksContainer = styled.ul<NavLinksContainerProps>`
  margin-left: auto;
  font-family: ${fonts.fontTitle};
  font-size: 1.125rem;
  line-height: 1.75rem;
  transform-origin: top right;
  transform: scale(0);
  transition: transform 150ms;
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 40;
  position: absolute;
  top: 0;
  right: 0;
  border-left: 1px solid ${({ theme }) => theme.colors.lightGray};

  ${({ isShowing }) => isShowing && css`
    transform: scale(1);
  `}

  @media screen and (min-width: ${dimensions.screenSm}) {
    transform: scale(1);
    flex-direction: row;
    width: auto;
    height: auto;
    border: none;
    position: static;
    background-color: transparent;
  }
`;

export const CloseButtonItem = styled.li`
  position: absolute;
  top: 1rem;
  right: 0.75rem;
  
  @media screen and (min-width: ${dimensions.screenSm}) {
    display: none;
  }
`;

export const CloseButton = styled.button`
  padding: 0.5rem 1rem;
  width: 3.75rem;
  height: 2.75rem;
`;

export const DarkToggleItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OpenButton = styled.button`
  margin-left: auto;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  height: 3rem;
  width: 4rem;
  
  @media screen and (min-width: ${dimensions.screenSm}) {
    display: none;
  }
`;
