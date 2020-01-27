import React from 'react';
import { Flex, Text, List, ListItem, ListIcon } from '@chakra-ui/core';
import About from '../About';

const Tes = () => {
  return (
    <Flex>
      <div>
        <Text fontSize="30px" color="tomato" fontWeight="bold">
          I'm using a custom fonts value for this text.
        </Text>
        <About />
      </div>
      <List spacing={4}>
        <ListItem>
          <ListIcon icon="check-circle" color="green.500" />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit
        </ListItem>
        <ListItem>
          <ListIcon icon="check-circle" color="green.500" />
          Assumenda, quia temporibus eveniet a libero incidunt suscipit
        </ListItem>
        <ListItem>
          <ListIcon icon="check-circle" color="green.500" />
          Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
        </ListItem>
      </List>
    </Flex>
  );
};

export default Tes;
