import "./App.css";
import {
  Box,
  Button,
  Image,
  VStack,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { services, titleInfo, products, phoneNumber } from "./constants"; // Your constant values
import ServiceCard from "./components/ServiceCard";
import TitleComponent from "./components/TitleComponent";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaWhatsapp } from "react-icons/fa";
import Header from "./components/Header";
import { Carousel } from "react-responsive-carousel";

const App = () => {
  return (
    <Box>
      <Header />

      <VStack spacing={8}>
        <TitleComponent {...titleInfo} />

        <Box w="full">
          <Carousel
            autoPlay
            interval={45000}
            infiniteLoop
            showThumbs={false}
            // showArrows={true} // Show navigation arrows for manual scrolling
            swipeable={true} // Enable swipe gestures for touch devices
            dynamicHeight={true} // Adjust carousel height based on content
          >
            {services.map((content, index) => (
              <TitleComponent key={index} {...content} />
            ))}
          </Carousel>
        </Box>

        <Text fontSize={["2xl", "3xl"]} fontWeight="bold" textAlign="center">
          Nos produits
        </Text>
        <Box w="full" px={4}>
          <Grid
            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(1, 1fr)",
              "repeat(3, 1fr)",
            ]}
            gap={6}
          >
            {products.map((service, index) => (
              <GridItem key={index}>
                <ServiceCard service={service} />
              </GridItem>
            ))}
          </Grid>
        </Box>

        <Text fontSize={["2xl", "3xl"]} fontWeight="bold" textAlign="center">
          A propos
        </Text>
        {/* Add your "A propos" content here */}
      </VStack>

      <Button
        as="a"
        href={`https://wa.me/${phoneNumber}`}
        leftIcon={<FaWhatsapp />}
        colorScheme="whatsapp"
        position="fixed"
        bottom={4}
        right={4}
        size={["md", "lg"]}
        variant="solid"
        target="_blank" // Opens the link in a new tab/window
        rel="noopener noreferrer" // Security feature
      >
        Contactez-nous
      </Button>
    </Box>
  );
};

export default App;
