import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string,
      imageBackground: string,
      font: string,
      lightGray: string,
      blueLink: string,
      blueLinkHover: string,
    }
  }
}
