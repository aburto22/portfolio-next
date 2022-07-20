import styled from 'styled-components';
import { dimensions } from './variables';

export const AsidePlaceholder = styled.div`
  display: none;

  @media screen and (min-width: ${dimensions.screenMd}) {
    width: ${dimensions.widthSideNav};
    display: block;
    height: 1rem;
    float: left;
  }
`;

const LinkButton = styled.a`
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.buttonFont};
  box-shadow: ${({ theme }) => theme.boxShadow.button};

  :hover {
    color: ${({ theme }) => theme.colors.buttonFont};
  }
`;

export const LinkButtonPrimaryBase = styled(LinkButton)`
  background: ${({ theme }) => theme.gradients.blue};

  :hover {
    background: ${({ theme }) => theme.gradients.blueHover}
  }
`;

export const LinkButtonSecondaryBase = styled(LinkButton)`
  background: ${({ theme }) => theme.gradients.gray};

  :hover {
    background: ${({ theme }) => theme.gradients.grayHover}
  }
`;

const Button = styled.button`
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.buttonFont};
  box-shadow: ${({ theme }) => theme.boxShadow.button};
`;

export const ButtonPrimaryBase = styled(Button)`
  background: ${({ theme }) => theme.gradients.blue};

  :hover {
    background: ${({ theme }) => theme.gradients.blueHover}
  }
`;

export const ButtonSecondaryBase = styled(Button)`
  background: ${({ theme }) => theme.gradients.gray};

  :hover {
    background: ${({ theme }) => theme.gradients.grayHover}
  }
`;
