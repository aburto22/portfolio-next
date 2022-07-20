import styled from 'styled-components';
import { ButtonPrimaryBase } from '@styles/utils';
import { dimensions } from '@styles/variables';

interface ButtonPrimaryProps {
  isShowing: boolean;
}

export const ButtonPrimary = styled(ButtonPrimaryBase)<ButtonPrimaryProps>`
  margin-bottom: 0.75rem;
  transition: opacity 1000ms 1250ms;
  opacity: ${({ isShowing }) => (isShowing ? 1 : 0)};

  @media screen and (min-width: ${dimensions.screenSm}) {
    margin-right: 1rem;
  }
`;
