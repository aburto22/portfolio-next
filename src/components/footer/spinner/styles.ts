import styled, { keyframes } from 'styled-components';

export const SpinnerContainer = styled.div`
  min-width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const spinner = keyframes`
  50% {
    transform: rotate(180deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 50%;
  border: 5px solid ${({ theme }) => theme.colors.spinnerLight};
  border-top: 5px solid ${({ theme }) => theme.colors.spinnerDark};
  animation-name: ${spinner};
  animation-duration: 1s;
  animation-iteration-count: infinite; 
  animation-timing-function: linear;
`;
