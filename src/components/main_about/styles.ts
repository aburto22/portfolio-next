import { dimensions, patterns } from '@styles/variables';
import styled from 'styled-components';

interface IconItemProps {
  isShowing: boolean;
}

export const IconItem = styled.li<IconItemProps>`
  height: 5rem;
  width: 5rem;
  opacity: ${({ isShowing }) => (isShowing ? 1 : 0)};
  transition: all 700ms;
  margin: 0.25rem;
  position: relative;
  top: ${({ isShowing }) => (isShowing ? 0 : '-4rem')};
`;

export const Section = styled.section`
  position: relative;
  padding: 2.5rem 1rem 11rem;
  background: ${patterns.bg};
`;

export const Anchor = styled.span`
  width: 0;
  height: 0;
  position: absolute;
  top: -5rem;
`;

export const Container = styled.div`
  height: 100%;
  max-width: ${dimensions.screenXs};
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

interface TextProps {
  isShowing: boolean;
}

export const Text = styled.p<TextProps>`
  margin-bottom: 1rem;
  text-align: justify;
  transition: opacity 700ms;
  opacity: ${({ isShowing }) => (isShowing ? 1 : 0)};

  :last-child {
    margin-bottom: 2rem;
    transition-delay: 300ms;
  }

  @media screen and (min-width: ${dimensions.screenMd}) {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
`;

export const SubTitle = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  line-height: 2rem;
`;

export const IconContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

export const Link = styled.a`
  font-size: 1.125rem;
  line-height: 1.75rem;
  display: block;
  text-align: center;
  text-decoration: underline;
  margin: 2rem 0 1.5rem;
`;
