import {
  useDisclosure,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody
} from '@chakra-ui/core';

const About = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen} borderRadius="15px" my={4}>
        About
      </Button>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">About Me</DrawerHeader>
          <DrawerBody>
            <p>Hello Dear,</p>
            <p>
              My name is Verdi Pratama, and I also enjoy more general IT things like configuring and
              running servers, networking devices, and storage stuff.
            </p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default About;
