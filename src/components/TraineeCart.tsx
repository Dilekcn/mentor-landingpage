import { Avatar, Box, Text, HStack, Image } from "@chakra-ui/react";

function TraineeCart(props: {
  text?: string;
  bg?: string;
  name: string;
  src?: string;
  arrowsrc?: string;
  avatarimg?: any;
  texttime?: string;
}) {
  return (
    <HStack spacing={0} w={{ base: "70%", md: "90%" }} mt="-30px">
      <Box
        w={{ base: "60px", md: "110px" }}
        h={{ base: "60px", md: "110px" }}
        bg={props.bg}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Avatar
          name={props.name}
          src={props.src}
          p={{ base: "0", md: "2" }}
          boxSize={{ base: "60px", md: "100px" }}
        />
      </Box>
      <Box
        pl={{ base: "4px", md: "8px" }}
        w={{ base: "430px", md: "630px" }}
        h={{ base: "60px", md: "110px" }}
        bg="#F5F5F5"
        display="flex"
        flexDirection="column"
        alignItems="start"
        justifyContent="center"
        fontSize={{ base: "14px", md: "20px" }}
      >
        <Text fontWeight="bold">{props.name}</Text>
        <Text display="flex" flexDirection="row" alignItems="center">
          <Image
            src={props.arrowsrc}
            boxSize={{ base: "10px", md: "18px" }}
            mr={{ base: "4px", md: "8px" }}
          />
          {props.text}
        </Text>
      </Box>

      <Box
        position="relative"
        bg="#F5F5F5"
        w={{ base: "50px", md: "110px" }}
        h={{ base: "60px", md: "110px" }}
      >
        <Avatar
          src={props.avatarimg}
          position="absolute"
          top="35%"
          left="20%"
          boxSize={{ base: "25px", md: "40px" }}
        />
        <Text
          fontSize={{ base: "6px", md: "10px" }}
          position="absolute"
          bottom={"11%"}
          left="18%"
        >
          {props.texttime}
        </Text>
      </Box>
    </HStack>
  );
}

export default TraineeCart;
