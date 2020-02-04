import { NextSeo } from 'next-seo';
import Layout from '../components/Layout';
import Header from '../components/Layout/Header';
import QuoteBox from '../components/QuoteBox';

function SEO() {
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
  />;
}

export default () => {
  return (
    <>
      <SEO />
      <Layout>
        <Header />
        <QuoteBox />
      </Layout>
    </>
  );
};
