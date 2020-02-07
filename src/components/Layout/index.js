import Router from 'next/router';
import { ThemeProvider, CSSReset, Box, ColorModeProvider } from '@chakra-ui/core';
import Header from './Header';
import theme from '../../theme';
import * as gtag from '../../utils/gtag';

Router.events.on('routeChangeComplete', url => gtag.pageview(url));

export default props => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <Header />
        <Box
          as="main"
          width="100%"
          margin="auto"
          maxWidth={['100%', '100%', '64vw']}
          padding={['1rem 2rem', '1rem 2rem']}
        >
          {props.children}
        </Box>
      </ColorModeProvider>
    </ThemeProvider>
  );
};
