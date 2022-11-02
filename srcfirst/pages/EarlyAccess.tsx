import { useState } from "react";
import { Flex, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";

function EarlyAccess() {
  const [email, setIEmail] = useState("");
  const handleSubmit = () => {
    fetch(
      "https://hooks.slack.com/workflows/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",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      }
    )
      .then((response) => response.json())
      .catch((err) => console.log(err));
  };

  return (
    <Flex
      alignItems={"center"}
      id="pricing"
      direction={"column"}
      bg={"#4E5462"}
      color="#FFFFFF"
      h="100vh"
      justifyContent={"center"}
      mt="100px"
    >
      <FormControl
        w={{ base: "90%", md: "50%" }}
        display="flex"
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <FormLabel
          width={{ base: "380px", md: "460px" }}
          fontSize={{ base: "3xl", md: "3xl" }}
        >
          Mentor is invite-only, sign up now for early access
        </FormLabel>
        <Input
          value={email}
          onChange={(e) => setIEmail(e.target.value)}
          type="email"
          variant="unstyled"
          borderRadius={"none"}
          placeholder="you@email.com"
          fontSize="xl"
          m="40px"
          p="15px"
          width={{ base: "380px", md: "460px" }}
          bg={"#000000"}
        />
        <Button
          type="submit"
          bg="#2D9CDB"
          borderRadius={"none"}
          fontSize="xl"
          p="25px"
          width={{ base: "380px", md: "360px" }}
          onClick={handleSubmit}
          pointerEvents="none"
        >
          Request early access
        </Button>
      </FormControl>
    </Flex>
  );
}

export default EarlyAccess;
