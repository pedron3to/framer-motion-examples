import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  textStyles: {},

  colors: {
    white: {
      '50': '#fff',
    },
    gray: {
      '500': '#e4e4e4',
    },
    red: {
      '500': '#DF1F26',
    },
    black: {
      '300': '#141414',
      '900': '#181818',
    },
  },
  fonts: {},
  styles: {
    global: {
      body: {
        background: '#0055ff',
        overflow: 'hidden',
        width: '100vw',
        height: '100vh',
        color: 'white',
      },
    },
  },
});
