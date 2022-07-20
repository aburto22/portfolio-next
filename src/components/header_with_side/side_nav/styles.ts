import styled from 'styled-components';
import { dimensions } from '@styles/variables';

interface SideMenuProps {
  isShowing: boolean;
}

export const SideMenu = styled.aside<SideMenuProps>`
  width: ${dimensions.widthSideNav};
  padding: 1rem;
  position: fixed;
  background-color: ${({ theme }) => theme.colors.background};
  height: 100%;
  border-right: 1px solid ${({ theme }) => theme.colors.lightGray};
  z-index: 10;
  transition: all 500ms;
  left: ${({ isShowing }) => (isShowing ? '0' : `-${dimensions.widthSideNav}`)};
  
  @media screen and (min-width: ${dimensions.screenMd}) {
    left: 0;
  }
`;

export const Title = styled.h2`
  font-size: 1.125rem;
  line-height: 1.75rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  text-align: center;
  padding: 0.5rem 0;
`;

export const DarkToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;

  @media screen and (min-width: ${dimensions.screenMd}) {
    display: none;
  }
`;
