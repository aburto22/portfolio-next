import { dimensions } from '@styles/variables';
import styled from 'styled-components';
import { LinkButtonPrimaryBase, LinkButtonSecondaryBase } from '@styles/utils';

interface ProjectCardProps {
  isMain: boolean;
  isShowing: boolean;
}

export const ProjectCard = styled.li<ProjectCardProps>`
  background-color: ${({ theme }) => theme.colors.background};
  margin: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  width: 22rem;
  transition: opacity 700ms;
  opacity: ${({ isShowing }) => (isShowing ? 1 : 0)};
  border: 2px solid transparent;
  max-width: ${({ isMain }) => (isMain ? dimensions.widthMainProject : '17rem')};
  max-height: ${({ isMain }) => (isMain ? dimensions.heightMainProject : '23rem')};
`;

export const Title = styled.h2`
  opacity: 0;
  position: absolute;
`;

export const ProjectContent = styled.div`
  position: absolute;
  padding: 1rem;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 100%;
  transition: all 500ms;

  ${ProjectCard}:hover & {
    top: 0;
  }

  ${ProjectCard}:focus-within & {
    top: 0;
  }
`;

export const ContentTitle = styled.a`
  font-size: 1.25rem;
  line-height: 1.75rem;
  margin: 0.5rem 0 auto;
  text-align: center;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.font};
`;

export const ContentLabel = styled.p`
  text-align: center;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: bold;
  margin: 1rem 0 0.5rem;
`;

export const ContentDescription = styled.p`
  text-align: center;
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

export const ContentIconsContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
`;

export const ContentButtonContainer = styled.div`
  margin: auto 0 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export const ButtonPrimary = styled(LinkButtonPrimaryBase)`
  width: 100%;
  margin: 0 0.5rem 0 1rem;
`;

export const ButtonSecondary = styled(LinkButtonSecondaryBase)`
  width: 100%;
  margin: 0 1rem 0 0.5rem;
`;

export const IconItem = styled.li`
  display: block;
  height: 2.75rem;
  width: 2.75rem;
  margin: 0.25rem;
`;
