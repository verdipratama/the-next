import Head from 'next/head';
import Router from 'next/router';
import { ThemeProvider, CSSReset, Box, ColorModeProvider } from '@chakra-ui/core';

import theme from '../../theme';
import * as gtag from '../../utils/gtag';

Router.events.on('routeChangeComplete', url => gtag.pageview(url));

export default props => {
  return (
    <>
      <Head>
        <title>The Next App</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <CSSReset />
          <Box
            as="main"
            width="100%"
            margin="auto"
            maxWidth={['100%', '100%', '64vw']}
            padding={['4rem 1rem', '4rem 2rem']}
          >
            {props.children}
          </Box>
        </ColorModeProvider>
      </ThemeProvider>
    </>
  );
};
