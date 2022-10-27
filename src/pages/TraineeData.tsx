import { Flex, Link, Image, VStack } from "@chakra-ui/react";
import HeaderCart from "../components/HeaderCart";

function LinkItem(props: { alt: string; src: string }) {
  return (
    <Link>
      <Image
        src={props.src}
        alt={props.alt}
        boxSize={{ base: "60px", md: "100px" }}
      />
    </Link>
  );
}

function TraineeData() {
  return (
    <VStack
      w="full"
      display="flex"
      justifyContent="center"
      alignItems="center"
      mt={{ base: "150px", md: "100px" }}
    >
      <HeaderCart
        text=" Automatically enrich trainee data with pre-built or custom integrations"
        color="#2A87A9"
      />
      <Flex
        bg="#EFFAFE"
        maxW="940px"
        width={"full"}
        h={{ base: "140px", md: "180px" }}
        justifyContent="space-evenly"
        alignItems="center"
      >
        <LinkItem src="/classroom.png" alt="classroom" />
        <LinkItem src="/github.png" alt="github" />
        <LinkItem src="/codewars.png" alt="codewars" />
        <LinkItem src="/schoology.png" alt="schoology" />
      </Flex>
    </VStack>
  );
}

export default TraineeData;
