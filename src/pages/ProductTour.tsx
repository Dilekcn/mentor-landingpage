import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import HeaderCart from "../components/HeaderCart";

function ProductTour() {
  return (
    <VStack
      w="full"
      display="flex"
      justifyContent="center"
      alignItems="center"
      mt="150px"
    >
      <HeaderCart
        text=" Mentor’s chatbot lives right inside Slack for instant check-ins"
        color="#2A87A9"
      />
      <Flex
        bg="#F5F5F5"
        w="full"
        maxW="940px"
        justifyContent="center"
        alignItems="center"
        py="50px"
      >
        <Box
          w={{ base: "400px", md: "500px" }}
          h={{ base: "300px", md: "400px" }}
          position={"relative"}
          bgImage="/frame.png"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
        >
          <Box
            top="0"
            left="0"
            position="absolute"
            as="iframe"
            src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
            width="100%"
            sx={{
              aspectRatio: "17/10",
            }}
          />
        </Box>
      </Flex>
      <Box>
        <Text>Mentor for Slack, Product Tour (5 mins)</Text>
      </Box>
    </VStack>
  );
}

export default ProductTour;
