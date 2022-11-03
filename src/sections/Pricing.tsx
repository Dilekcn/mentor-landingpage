import { Button, FormControl, Flex } from "@chakra-ui/react";
import { Inner, Title, strings } from "../App";

const Form = () => {
  return (
    <form
      method="post"
      action="https://docs.google.com/forms/d/1wmWTxdjLZW8lrPzWuQ0Rzv4EGGtITFpKAcjEF63W5E0/prefill"
    >
      <FormControl
        display="flex"
        alignItems={"center"}
        flexDirection={"column"}
        mt={"-20vh"}
      >
        <Title color="white" text={strings.form.title} />

        <Button
          type="submit"
          bg="#2D9CDB"
          borderRadius={"none"}
          fontSize="xl"
          p="25px"
          width={{ base: "350px", md: "380px" }}
          children={strings.form.button}
          // children={strings.form.button}
        />
      </FormControl>
    </form>
  );
};

const Pricing = () => (
  <Flex
    id="pricing"
    h={"100vh"}
    background="grey.900"
    alignItems={"center"}
    // mt={{ base: 32, md: 48 }}
  >
    <Inner>
      <Form />
    </Inner>
  </Flex>
);

export default Pricing;
