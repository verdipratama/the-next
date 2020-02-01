import Link from 'next/link';
import { Heading, Flex, IconButton, useColorMode } from '@chakra-ui/core';

export default () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Heading
      as="nav"
      display="flex"
      justifyContent="space-between"
      padding="0.7rem"
      bg="red.500"
      color="white"
      boxShadow="lg"
    >
      <Link href="/">
        <Flex align="center" ml={8} cursor="pointer">
          <Heading as="h1" size="lg" letterSpacing={'-.1rem'}>
            > THENEXT
          </Heading>
        </Flex>
      </Link>

      <IconButton
        mr={8}
        bg="red"
        aria-label="Toggle dark mode"
        onClick={toggleColorMode}
        icon={colorMode === 'light' ? 'moon' : 'sun'}
      />
    </Heading>
  );
};
