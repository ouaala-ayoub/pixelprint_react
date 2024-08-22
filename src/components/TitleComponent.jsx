import { Box, Image, Text, VStack } from '@chakra-ui/react';

const TitleComponent = ({ title, content, image }) => {
  return (
    <Box 
      position="relative" 
      height={["300px", "400px", "500px", "700px"]} 
      width="100%"
      overflow="hidden" // Prevent overflow from large images or text
    >
      <Image 
        src={image} 
        alt={title} 
        objectFit="cover" 
        width="100%" 
        height="100%" 
      />
      <Box 
        position="absolute" 
        top="0" 
        left="0" 
        width="100%" 
        height="100%" 
        bg="rgba(0, 0, 0, 0.5)" 
        display="flex" 
        alignItems="center" 
        justifyContent="center" 
        p={4}
        overflow="hidden" // Prevent overflow of content
      >
        <VStack 
          spacing={4} 
          maxW="80%" // Use a percentage to ensure responsiveness
          textAlign="center" 
          color="white" 
          px={{ base: 4, md: 6 }} // Adjust padding for smaller screens
        >
          <Text 
            fontSize={["xl", "2xl", "3xl"]} 
            fontWeight="bold" 
            // isTruncated 
            maxW="full" // Ensure text takes full width
          >
            {title}
          </Text>
          <Text 
            fontSize={["sm", "md", "lg"]} 
            noOfLines={6} 
            maxW="full" // Ensure text takes full width
            overflow="hidden" 
            // textOverflow="ellipsis"
            px={2} // Add padding to prevent text from touching edges
          >
            {content}
          </Text>
        </VStack>
      </Box>
    </Box>
  );
};

export default TitleComponent;
