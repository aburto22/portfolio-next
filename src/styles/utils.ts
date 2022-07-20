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
  color: white;
  box-shadow: ${({ theme }) => theme.boxShadow.button};
`;

export const LinkButtonPrimaryBase = styled(LinkButton)`
  color: ${({ theme }) => theme.colors.font};
  background: ${({ theme }) => theme.gradients.blue};

  :hover {
    color: ${({ theme }) => theme.colors.font};
    background: ${({ theme }) => theme.gradients.blueHover}
  }
`;

export const LinkButtonSecondaryBase = styled(LinkButton)`
  background: ${({ theme }) => theme.gradients.gray};
  color: ${({ theme }) => theme.colors.font};

  :hover {
    color: ${({ theme }) => theme.colors.font};
    background: ${({ theme }) => theme.gradients.grayHover}
  }
`;

const Button = styled.button`
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  text-align: center;
  color: white;
  box-shadow: ${({ theme }) => theme.boxShadow.button};
`;

export const ButtonPrimaryBase = styled(Button)`
  @extend .button;
  background: ${({ theme }) => theme.gradients.blue};

  :hover {
    background: ${({ theme }) => theme.gradients.blueHover}
  }
`;

export const ButtonSecondaryBase = styled(Button)`
  @extend .button;
  background: ${({ theme }) => theme.gradients.gray};

  :hover {
    background: ${({ theme }) => theme.gradients.grayHover}
  }
`;
