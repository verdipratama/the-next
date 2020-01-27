import { theme } from '@chakra-ui/core';

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    brand: {
      400: '#ff8fb4',
      500: '#ff6699',
      600: '#e65c8a'
    }
  },
  fonts: {
    body: 'Poppins, sans-serif',
    heading: 'system-ui, sans-serif',
    mono: 'Menlo, monospace'
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700
  },
  lineHeights: {
    normal: 'normal',
    none: '1',
    shorter: '1.25',
    short: '1.375',
    base: '1.5',
    tall: '1.625',
    taller: '2'
  },
  letterSpacings: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em'
  }
};

export default customTheme;
