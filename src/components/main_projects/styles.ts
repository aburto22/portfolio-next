import { dimensions } from '@styles/variables';
import styled from 'styled-components';

export const Section = styled.section`
  position: relative;
  padding: 2.5rem 0.5rem;
  background-color: ${({ theme }) => theme.colors.backgroundGray};
`;

export const Anchor = styled.span`
  width: 0;
  height: 0;
  position: absolute;
  top: -5rem;
`;

export const Container = styled.div`
  height: 100%;
  max-width: ${dimensions.screenLg};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 1.875rem;
  line-height: 2.25rem;
  margin-bottom: 2rem;
`;

interface ContentProps {
  isShowing: boolean;
}

export const Content = styled.div<ContentProps>`
  max-width: ${dimensions.screenMd};
  margin: 0 auto;
  font-size: 1.125rem;
  line-height: 1.75rem;
  margin-bottom: 2rem;
  opacity: ${({ isShowing }) => (isShowing ? 1 : 0)};
  transition: opacity 700ms;
`;

export const Link = styled.a`
  text-decoration: underline;
`;

export const ProjectContainer = styled.div`
  width: 100%;
`;

export const ProjectList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;
