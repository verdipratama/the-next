import { Heading, IconButton, useColorMode } from '@chakra-ui/core';
import Layout from '../components/Layout';
import Tes from '../components/Content/index';

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
    <Layout>
      <Header />
      <Tes />
    </Layout>
  );
};

export default index;
