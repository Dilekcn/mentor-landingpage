import { Box, Heading } from "@chakra-ui/react";
import React from "react";

function HeaderCart(props: { text: string; color: string }) {
  return (
    <Box maxW="940px" width={{ base: "400px", md: "660px" }}>
      <Heading
        size={{ base: "xl", md: "xl" }}
        textAlign={"center"}
        color={props.color}
        mb="65px"
      >
        {props.text}
      </Heading>
    </Box>
  );
}

export default HeaderCart;
