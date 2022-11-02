import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Inner, Title, strings } from "../App";

const WhoIsMentor = () => {
  return (
    <>
      <Inner>
        <Box bg="gray.900" p="30px" mt={{ base: 24, md: 32 }}>
          <Text
            color={"white"}
            maxW={"400px"}
            mx={"auto"}
            fontSize={{ base: 26, md: 32 }}
            textAlign={"center"}
          >
            {strings.mentor.title}
          </Text>
        </Box>
      </Inner>
    </>
  );
};

const Image = () => {
  return (
    <Box
      backgroundImage="/images/crowded.png"
      backgroundSize="cover"
      width={"full"}
      height="350px"
      mt="-100px"
    />
  );
};

function Mentor() {
  return (
    <>
      <WhoIsMentor />
      <Image />
    </>
  );
}

export default Mentor;
