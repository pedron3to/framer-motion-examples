import { rgba } from 'polished';
import { breakpoints } from './breakpoints';

const defaultColors = {
  primary: '#fa824c',
  secondary: '#fa824c',
  white: '#ffffff',
  offwhite: '#FFFAF2',
  dark: '#192124',
  black: '#333',
  yellow: '#FDB321',
  ash: '#6C9A8B',
  green: '#77bf41',
  info: '#0e567c',
};

const colors = {
  primary: defaultColors.primary,
  secondary: defaultColors.secondary,
  offwhite: defaultColors.offwhite,
  light: defaultColors.white,
  lightShade: rgba(defaultColors.white, 0.75),
  dark: defaultColors.dark,
  darkShade: rgba(defaultColors.dark, 0.75),
  ash: defaultColors.ash,
  bg: defaultColors.white,
  border: rgba(defaultColors.ash, 0.115),
  shadow: rgba(defaultColors.ash, 0.175),
  heading: defaultColors.dark,
  text: rgba(defaultColors.dark, 0.75),
  warning: defaultColors.yellow,
  success: defaultColors.green,
  info: defaultColors.info,

  modes: {
    dark: {
      primary: defaultColors.primary,
      secondary: defaultColors.secondary,
      light: defaultColors.white,
      lightShade: rgba(defaultColors.white, 0.75),
      dark: defaultColors.dark,
      darkShade: rgba(defaultColors.dark, 0.75),
      ash: defaultColors.ash,
      bg: defaultColors.dark,
      border: rgba(defaultColors.ash, 0.115),
      shadow: rgba(defaultColors.ash, 0.175),
      heading: defaultColors.white,
      text: rgba(defaultColors.white, 0.75),
      warning: defaultColors.yellow,
      success: defaultColors.green,
      info: defaultColors.info,
    },
  },
};

const theme = {
  initialColorModeName: 'light',
  colors,
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  breakpoints: [
    `${breakpoints.sm}px`,
    `${breakpoints.md}px`,
    `${breakpoints.lg}px`,
    `${breakpoints.xl}px`,
  ],
};

export default theme;
