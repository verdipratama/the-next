import Router from 'next/router';
import { ThemeProvider, CSSReset, Box, ColorModeProvider } from '@chakra-ui/core';

import theme from '../../theme';
import * as gtag from '../../utils/gtag';

Router.events.on('routeChangeComplete', url => gtag.pageview(url));

export default props => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <Box as="main" width="100%" margin="auto">
          {props.children}
        </Box>
      </ColorModeProvider>
    </ThemeProvider>
  );
};
