import {
  AspectRatio,
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { Inner, breakpointPx, strings } from "../App";

const Left = () => {
  return (
    <Flex
      height={{ base: "", md: "300px" }}
      width={{ base: "100%", md: "%50" }}
    >
      <Image
        src="/images/human.png"
        alt="img"
        height={{ base: "300px", md: "500px" }}
        mt={{ base: "", md: "-200px" }}
      />
    </Flex>
  );
};
const Right = () => {
  const { title, caption } = strings.humanFirst;
  return (
    <Flex
      width={{ base: "100%", md: "50%" }}
      //   bg="yellow.700"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Box width="70%" textAlign="center">
        <Heading fontSize={"5xl"} fontWeight={700} children={title} />
        <Text fontSize={"2xl"} fontWeight={400} children={caption} />
      </Box>
    </Flex>
  );
};

function HumanFirst() {
  return (
    <Flex
      maxH="100vh"
      h="full"
      px={{ base: "", md: "100px" }}
      bgImage="/images/sky.png"
      bgSize="cover"
      direction={{ base: "column-reverse", md: "row" }}
    >
      <Left />
      <Spacer />

      <Right />
    </Flex>
  );
}

export default HumanFirst;
