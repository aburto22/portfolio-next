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
