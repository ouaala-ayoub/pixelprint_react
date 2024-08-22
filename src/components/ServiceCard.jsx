import { Box, Image, Text, VStack, AspectRatio } from '@chakra-ui/react';

const ServiceCard = ({ service }) => {
  return (
    <Box borderWidth="2px" borderRadius="lg" overflow="hidden" p={4} h="full">
      <VStack align="stretch" h="full">
        <AspectRatio ratio={16 / 9}>
          <Image src={`${service.image}.jpg`} alt={service.title} objectFit="cover" />
        </AspectRatio>
        <Box flex="1" d="flex" flexDirection="column" justifyContent="space-between">
          <Text fontSize={["md", "lg"]} fontWeight="bold" isTruncated>
            {service.title}
          </Text>
          <Text fontSize={["sm", "md"]} noOfLines={4} flex="1">
            {service.content}
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default ServiceCard;
