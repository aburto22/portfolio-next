import { createGlobalStyle } from 'styled-components';
import { fonts } from './variables';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Open Sans';
    src: url('/fonts/open_sans/OpenSans-Bold.ttf');
    font-weight: bold;
    font-display: fallback;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url('/fonts/open_sans/OpenSans-BoldItalic.ttf');
    font-weight: bold;
    font-style: italic;
    font-display: fallback;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url('/fonts/open_sans/OpenSans-ExtraBold.ttf');
    font-weight: 800;
    font-display: fallback;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url('/fonts/open_sans/OpenSans-ExtraBoldItalic.ttf');
    font-weight: 800;
    font-style: italic;
    font-display: fallback;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url('/fonts/open_sans/OpenSans-Italic.ttf');
    font-style: italic;
    font-display: fallback;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url('/fonts/open_sans/OpenSans-Light.ttf');
    font-weight: 300;
    font-display: fallback;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url('/fonts/open_sans/OpenSans-LightItalic.ttf');
    font-weight: 300;
    font-style: italic;
    font-display: fallback;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url('/fonts/open_sans/OpenSans-Medium.ttf');
    font-weight: 500;
    font-display: fallback;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url('/fonts/open_sans/OpenSans-MediumItalic.ttf');
    font-weight: 500;
    font-style: italic;
    font-display: fallback;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url('/fonts/open_sans/OpenSans-Regular.ttf');
    font-display: fallback;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url('/fonts/open_sans/OpenSans-SemiBold.ttf');
    font-weight: 600;
    font-display: fallback;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url('/fonts/open_sans/OpenSans-SemiBoldItalic.ttf');
    font-weight: 600;
    font-style: italic;
    font-display: fallback;
  }

  @font-face {
    font-family: 'Quicksand';
    src: url('/fonts/quicksand/Quicksand-Bold.ttf');
    font-weight: bold;
  }

  @font-face {
    font-family: 'Quicksand';
    src: url('/fonts/quicksand/Quicksand-Light.ttf');
    font-weight: 300;
    font-display: fallback;
  }

  @font-face {
    font-family: 'Quicksand';
    src: url('/fonts/quicksand/Quicksand-Medium.ttf');
    font-weight: 500;
    font-display: fallback;
  }

  @font-face {
    font-family: 'Quicksand';
    src: url('/fonts/quicksand/Quicksand-Regular.ttf');
  }

  @font-face {
    font-family: 'Quicksand';
    src: url('/fonts/quicksand/Quicksand-SemiBold.ttf');
    font-weight: 600;
    font-display: fallback;
  }

  @font-face {
    font-family: 'Satisfy';
    src: url('/fonts/satisfy/Satisfy-Regular.ttf');
    font-display: fallback;
  }

  body {
    font-family: ${fonts.fontBody};
  }

  a {
    color: ${({ theme }) => theme.colors.blueLink};
    text-decoration: none;

    :hover {
      color: ${({ theme }) => theme.colors.blueLinkHover};
    }
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: inherit;
    font-family: ${fonts.fontBody};
    font-size: 1rem;
  }

  a {
    text-decoration: none;
  }

  input {
    border: none;
  }

  ul {
    list-style: none;
  }
`;

export default GlobalStyle;
