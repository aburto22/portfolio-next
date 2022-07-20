import { dimensions, patterns } from '@styles/variables';
import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: calc(100vh - ${dimensions.heightHeader} - ${dimensions.heightFooter});
  background: ${patterns.bg};
  margin: ${dimensions.heightHeader} auto 0;
  position: relative;
  padding: 2rem 1rem 13rem;
  max-width: ${dimensions.screenLg};
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.h1`
  text-align: center;
  margin: 2rem 0;
  font-size: 1.875rem;
  line-height: 2.25rem;
`;

export const Description = styled.div`
  margin: 0 auto 3rem;
  max-width: ${dimensions.screenMd};
`;

export const TextContainer = styled.div`
  margin-bottom: 2rem;
`;

export const FilterContainer = styled.div`
  margin: 0 auto;
  max-width: ${dimensions.screenSm};
`;

export const ProjectList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 3rem;
`;
