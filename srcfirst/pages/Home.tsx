import {
  Heading,
  Stack,
  Text,
  Button,
  Image,
  Flex,
  HStack,
  Avatar,
  Spacer,
  Link,
} from "@chakra-ui/react";

function Home() {
  return (
    <Flex
      alignItems={{ base: "start", md: "center" }}
      justifyContent="center"
      w="full"
      bg="#202020"
      height={"85vh"}
    >
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        maxW="940px"
        mt={{ base: "70px", md: "0px" }}
        width={{ base: "70%", md: "100%" }}
        p="15px"
      >
        <Stack
          height={"390px"}
          w={{ base: "full", md: "380px" }}
          color="white"
          spacing={8}
        >
          <Heading
            fontSize={{ base: "38px", md: "40px" }}
            fontWeight={700}
            fontStyle="bold"
          >
            Help your trainees stay on track
          </Heading>
          <Text fontSize={{ base: "28px", md: "22px" }} fontWeight={400}>
            The automated mentorship platform for companies and schools.
          </Text>
          <HStack spacing="20px" direction="row" align="center">
            <Link href="#pricing">
              <Button
                width={{ base: "140px", md: "150px" }}
                bgImage="/addtoslack.png"
                bgPosition="center"
                bgRepeat="no-repeat"
                bgSize="cover"
                height={{ base: "40px", md: "45px" }}
                pointerEvents="none"
              ></Button>
            </Link>
            <Link href="#features">
              <Button
                width={{ base: "140px", md: "150px" }}
                fontSize={{ base: "18px", md: "24px" }}
                bg="rgba(196, 196, 196, 0.22)"
                height={{ base: "40px", md: "45px" }}
                pointerEvents="none"
              >
                <Text textDecoration={"none"}>Learn More</Text>
              </Button>
            </Link>
          </HStack>
        </Stack>
        <Spacer />
        <Stack
          height={"390px"}
          w={{ base: "full", md: "400px" }}
          position="relative"
          mt={{ base: "60px", md: "0px" }}
          fontSize="14px"
        >
          <Image
            src="/imghome.png"
            boxSize="400px"
            width={{ base: "80%", md: "300px" }}
            objectFit="cover"
          />
          <Flex
            flexDirection="column"
            pos="absolute"
            top="100"
            p="2"
            right="0"
            width={{ base: "220px", md: "230px" }}
            height="130px"
            bg="#FFF"
            borderRadius="xl"
          >
            <HStack>
              <Avatar src="/mockbot.png" p="2" />
              <Text fontWeight="bold">To Coach Sadia</Text>
            </HStack>
            <Text pl="2" pb="2">
              How is Trainee Maria doing?
            </Text>
            <HStack>
              <Button
                ml="2"
                width={{ base: "90px", sm: "110px" }}
                bg="gray.200"
                color="black"
                fontSize={"12px"}
                height="25px"
              >
                👍 On Track
              </Button>
              <Button
                width={{ base: "90px", sm: "110px" }}
                bg="#CE365C"
                color="white"
                fontSize={"12px"}
                height="25px"
                pointerEvents="none"
              >
                Needs Support
              </Button>
            </HStack>
          </Flex>
          <Flex
            flexDirection="column"
            pos="absolute"
            top={{ base: "250", md: "240" }}
            p="2"
            right={{ base: "30", md: "35" }}
            width={{ base: "220px", md: "230px" }}
            height="130px"
            bg="#FFF"
            borderRadius="xl"
          >
            <HStack>
              <Avatar src="/class.png" p="2" />
              <Text fontWeight="bold"> Google Classroom</Text>
            </HStack>
            <Text pl="2" pb="2">
              Trainee Jose is falling behind
            </Text>
            <Button
              ml="2"
              width="180px"
              bg="gray.200"
              color="black"
              height="25px"
            >
              Request catch-up
            </Button>
          </Flex>
        </Stack>
      </Flex>
    </Flex>
  );
}

export default Home;
