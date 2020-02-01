import { NextSeo } from 'next-seo';
import { Box, Text } from '@chakra-ui/core';
import useRandomQuotes from '../hooks/useRandomQuotes';
import Layout from '../components/Layout';
import Header from '../components/Layout/Header';

const SEO = () => (
  <NextSeo
    title="The Next App"
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

export default () => {
  const { loading, data } = useRandomQuotes();

  const renderQuote = () => {
    if (loading) return <span>Loading...</span>;
    if (!data.content) return null;

    return (
      <>
        <h1>&quot;{data.content}&quot;</h1>
        <span>{` - ${data.author} via Quotable`}</span>
      </>
    );
  };

  return (
    <>
      <SEO />
      <Layout>
        <Header />
        <Box
          as="main"
          width="100%"
          margin="auto"
          maxWidth={['100%', '100%', '64vw']}
          padding={['4rem 1rem', '4rem 2rem']}
          textAlign="center"
          bg="blue.700"
          mt={8}
          color="white"
          boxShadow="xl"
        >
          <div>
            <Text fontSize="28px" color="tomato" fontWeight="bold">
              Welcome to The Next Level ... :)
            </Text>
          </div>
          <Text mt={2}>{renderQuote()}</Text>
        </Box>
      </Layout>
    </>
  );
};
