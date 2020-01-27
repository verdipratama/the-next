import { Heading, IconButton, useColorMode } from '@chakra-ui/core';
import Layout from '../components/Layout';
import Tes from '../components/Content/index';
import { NextSeo } from 'next-seo';

const SEO = () => (
  <NextSeo
    title="The Next"
    description="The Next App Boilerplate"
    canonical="https://the-next.now.sh/"
    openGraph={{
      url: 'https://the-next.now.sh/',
      title: 'TheNext',
      description: 'The Next App Boilerplate, Build, Run, Deploy',
      images: [
        {
          url: 'https://the-next.now.sh/favicon.ico'
        }
      ],
      site_name: 'thenext'
    }}
    twitter={{
      handle: '@verdipratama',
      site: '@verdipratama',
      cardType: 'summary_large_image'
    }}
  />
);

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Heading as="h1" mb={8} display="flex" justifyContent="space-between">
      <div>
        <h1>The Next App</h1>
      </div>
      <IconButton
        aria-label="Toggle dark mode"
        onClick={toggleColorMode}
        icon={colorMode === 'light' ? 'moon' : 'sun'}
      />
    </Heading>
  );
};

const index = () => {
  return (
    <>
      <SEO />
      <Layout>
        <Header />
        <Tes />
      </Layout>
    </>
  );
};

export default index;
