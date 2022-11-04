import { Box, Divider, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { strings } from "../App";

const Left = () => {
  return (
    <Flex
      w={{ base: "full", md: "420px" }}
      alignItems="center"
      justifyContent="center"
      height={{ base: "", md: "250px" }}
    >
      <Image
        src="/images/human.png"
        alt="img"
        height={{ base: "300px", md: "400px" }}
        mt={{ base: "40px", md: "-150px" }}
      />
    </Flex>
  );
};
const Right = () => {
  const { title, caption } = strings.humanFirst;
  return (
    <Flex
      w={{ base: "full", md: "420px" }}
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      mt={{ base: "80px", md: "0px" }}
    >
      <Box textAlign="center" px={{ base: "60px", md: "30px" }}>
        <Heading fontSize={"5xl"} fontWeight={700} children={title} />
        <Text fontSize={"2xl"} fontWeight={400} children={caption} />
      </Box>
    </Flex>
  );
};

const Progress = () => {
  const { title } = strings.realTime;
  return (
    <Box>
      <Box
        width={{ base: "80%", md: "600px" }}
        mx="auto"
        my="40px"
        textAlign={"center"}
      >
        <Heading
          fontSize={{ base: "3xl", md: "5xl" }}
          fontWeight={700}
          children={title}
        />
      </Box>
      <Box width={{ base: "100%", md: "80%" }} mx="auto">
        <Divider orientation="horizontal" />
      </Box>
    </Box>
  );
};

function HumanFirst() {
  return (
    <>
      <Flex
        maxH="100vh"
        h="full"
        // px={{ base: "0px", md: "100px" }}
        bgImage="/images/sky.png"
        bgSize="cover"
        direction={{ base: "column-reverse", md: "row" }}
        justifyContent="space-evenly"
      >
        <Left />

        <Right />
      </Flex>
      <Progress />
    </>
  );
}

export default HumanFirst;
