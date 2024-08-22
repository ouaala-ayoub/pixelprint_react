import { Box, Image } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box as="header" bg="white" textAlign="center" >
      <Image
        src="logo.png"
        alt="Logo"
        width="300px" // Adjusted width
        height="100px" // Adjusted height
        // mx="auto"
        objectFit="contain" // Ensures the entire image is visible without distortion
      />
    </Box>
  );
};

export default Header;
