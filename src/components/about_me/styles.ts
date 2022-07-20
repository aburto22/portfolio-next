import styled from 'styled-components';
import { dimensions } from '@styles/variables';

export { AsidePlaceholder } from '@styles/utils';

export const Section = styled.section`
  min-height: calc(100vh - ${dimensions.heightHeader} - ${dimensions.heightFooter});
  min-height: $height-full-nav-footer;
  max-width: ${dimensions.screenMd};
  margin: 5rem auto 0;
  position: relative;
  padding: 2rem 1rem 13rem;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  text-align: center;
  margin: 2rem 0;
  font-size: 1.875rem;
  line-height: 2.25rem;
`;

export const ImageContainer = styled.div`
  margin: 0 auto 1.5rem;
  padding: min(3%, 0.8rem);
  background-color: ${({ theme }) => theme.colors.imageBackground};
  display: flex;
  align-items: center;
  max-width: $screen-sm;
  width: 100%;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;
