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
      buttonFont: string,
      filterButtonBackground: string,
      filterButtonBackgroundSelected: string,
      filterButtonFont: string,
      filterButtonFontSelected: string,
      techIconBackground: string,
      tooltipBackground: string,
      tooltipFont: string,
      lightGray: string,
      mediumGray: string,
      blueLink: string,
      blueLinkHover: string,
      green: string,
      red: string,
    },
    gradients: {
      blue: string,
      blueHover: string,
      gray: string,
      grayHover: string,
    },
    boxShadow: {
      form: string,
      button: string,
    },
  }
}
