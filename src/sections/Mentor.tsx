import { Center, Flex, Text, AspectRatio, Image } from "@chakra-ui/react";
import { Inner, strings } from "../App";

function Mentor() {
  return (
    <>
      <Flex
        mt={{ base: 24, md: 32 }}
        alignItems={{ base: "Start", md: "Center" }}
      >
        <Inner>
          <Center
            bg="gray.900"
            position="relative"
            zIndex={"3"}
            px="40px"
            height={"200px"}
            pb="10px"
          >
            <Text
              textAlign="center"
              color="white"
              fontSize={{ base: 26, md: 32 }}
              maxWidth={"400px"}
            >
              {strings.mentor.title}
            </Text>
          </Center>
        </Inner>
      </Flex>
      <AspectRatio ratio={4 / 1} mt="-100px" minH="300px">
        <Image src="/images/crowded.png" alt="img" objectFit="cover" />
      </AspectRatio>
    </>
  );
}

export default Mentor;
