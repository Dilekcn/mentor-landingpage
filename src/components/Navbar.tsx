import { Flex, VStack, Image, Link } from "@chakra-ui/react";

function LinkItem(props: { text: string; href?: string }) {
  return (
    <Link
      href={props.href}
      fontSize={{ base: "22px", md: "22px" }}
      display={{ base: "none", md: "inline" }}
    >
      {props.text}
    </Link>
  );
}

function Navbar() {
  return (
    <VStack bg="#202020" color="#FFFFFF">
      <Flex
        maxW="950px"
        w="full"
        justifyContent={"space-between"}
        alignItems="center"
        h={"15vh"}
        px="15px"
      >
        <Link href="/">
          <Image src="/mentorforslack.png" h={{ base: "18px", md: "22px" }} />
        </Link>
        <LinkItem text={"Home"} />
        <LinkItem text={"Features"} href="#features" />
        <LinkItem text={"Pricing"} href="#pricing" />
        <Link fontSize={{ base: "22px", md: "22px" }}>Log In</Link>
      </Flex>
    </VStack>
  );
}

export default Navbar;
