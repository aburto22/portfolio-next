import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string,
      imageBackground: string,
      backgroundGray: string,
      font: string,
      spinnerLight: string,
      spinnerDark: string,
      lightGray: string,
      mediumGray: string,
      blueLink: string,
      blueLinkHover: string,
      green: string,
      red: string,
    }
  }
}
