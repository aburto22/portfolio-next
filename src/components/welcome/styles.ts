import { dimensions, patterns } from '@styles/variables';
import styled from 'styled-components';
import { LinkButtonSecondaryBase } from '@styles/utils';

export const Section = styled.section`
  min-height: calc(100vh - ${dimensions.heightHeader});
  margin-top: 5rem;
  position: relative;
  padding: 1rem 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
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
  max-width: ${dimensions.screenSm};
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 0.5rem;
  margin: 0 auto 1rem;
`;

interface WithShowingProps {
  isShowing: boolean;
}

export const Title = styled.h1<WithShowingProps>`
  font-size: 1.25rem;
  line-height: 1.75rem;
  margin-bottom: 1rem;
  text-align: left;
  transition: opacity 1000ms;
  opacity: ${({ isShowing }) => (isShowing ? 1 : 0)};
  font-weight: inherit;

  @media screen and (min-width: ${dimensions.screenSm}) {
    font-size: 1.875rem;
    line-height: 2.25rem;
    margin-bottom: 1.5rem;
  }
`;

export const TitleHand = styled.span`
  font-size: 2.25rem;
  line-height: 2.5rem;

  @media screen and (min-width: ${dimensions.screenSm}) {
    font-size: 3rem;
    line-height: 1;
  }
`;

export const SubTitle = styled.p<WithShowingProps>`
  font-size: 1.875rem;
  line-height: 2.25rem;
  margin-bottom: 1rem;
  text-align: left;
  transition: opacity 1000ms 500ms;
  opacity: ${({ isShowing }) => (isShowing ? 1 : 0)};
  
  @media screen and (min-width: ${dimensions.screenSm}) {
    font-size: 3rem;
    line-height: 1;
    margin-bottom: 1.5rem;
  }
`;

export const Text = styled.p<WithShowingProps>`
  margin-bottom: 1.5rem;
  text-align: justify;
  transition: opacity 1000ms 1000ms;
  opacity: ${({ isShowing }) => (isShowing ? 1 : 0)};
  line-height: 1.4rem;

  @media screen and (min-width: ${dimensions.screenSm}) {
    font-size: 1.25rem;
    line-height: 1.75rem;
    margin-bottom: 2rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: max-content;
  margin: 0 auto;

  @media screen and (min-width: ${dimensions.screenSm}) {
    flex-direction: row;
  }
`;

export const LinkButtonSecondary = styled(LinkButtonSecondaryBase)<WithShowingProps>`
  margin-bottom: 0.75rem;
  transition: opacity 1000ms 1500ms;
  opacity: ${({ isShowing }) => (isShowing ? 1 : 0)};
  
  @media screen and (min-width: ${dimensions.screenSm}) {
    margin-right: 1rem;
  }
`;
