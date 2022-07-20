import styled from 'styled-components';
import { dimensions } from '@styles/variables';

export const Footer = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.lightGray};
  background-color: ${({ theme }) => theme.colors.backgroundGray};
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  max-width: ${dimensions.screenLg};
  margin: 0 auto;
  padding: 0 1rem;
`;

export const FooterLegend = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 1rem 3rem;
  position: relative;
  top: -3rem;
`;

export const FooterIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

export const FooterIcon = styled.a`
  margin: 0 0.25rem;
  height: 1.5rem;
  width: 1.5rem;
  color: ${({ theme }) => theme.colors.font};
`;

export const FooterIconLarge = styled.a`
  margin: 0 0.25rem;
  height: 2rem;
  width: 2rem;
  color: ${({ theme }) => theme.colors.font};
  display: flex;
  align-items: center;
`;

export const FooterText = styled.p`
  font-size: 0.75rem;
  line-height: 1rem;
`;
