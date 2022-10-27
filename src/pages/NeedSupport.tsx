import { Box, Flex, VStack } from "@chakra-ui/react";
import TraineeCart from "../components/TraineeCart";
import HeaderCart from "../components/HeaderCart";

function NeedSupport() {
  return (
    <Box id="features" mt={{ base: "150px", md: "100px" }}>
      <Flex justifyContent="center" alignItems="center" direction="column">
        <HeaderCart
          text=" Automatically flag when trainees are falling behind or need support"
          color="#CB4D4D"
        />
        <Box
          maxW="940px"
          width="100%"
          height={{ base: "80px", md: "170px" }}
          bg="#FEF0EF"
        >
          <VStack spacing={4}>
            <TraineeCart
              bg="#EFDCDB"
              src="/jose.png"
              name="Jose"
              arrowsrc="/redarrow.png"
              text="Did not submit latest task on time"
              avatarimg="/one.png"
              texttime="4 days ago"
            />
            <TraineeCart
              bg="#EFDCDB"
              src="/dom.png"
              name="Dom"
              arrowsrc="/redarrow.png"
              text=" Needs help with time management"
              avatarimg="/mentor2.png"
              texttime=" 20 mins ago"
            />
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
}

export default NeedSupport;
