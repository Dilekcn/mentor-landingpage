import { Box, Flex, VStack } from "@chakra-ui/react";
import TraineeCart from "../components/TraineeCart";
import HeaderCart from "../components/HeaderCart";

function Success() {
  return (
    <Box id="features" mt={{ base: "150px", md: "100px" }}>
      <Flex justifyContent="center" alignItems="center" direction="column">
        <HeaderCart
          text="Get automatic trainee updates from mentors, coaches and teachers"
          color="rgba(27, 123, 69, 1)"
        />
        <Box
          maxW="940px"
          width="100%"
          height={{ base: "240px", md: "395px", lg: "430px" }}
          bg="rgba(185, 222, 204, 0.46)"
        >
          <VStack spacing={4}>
            <TraineeCart
              bg="#A7CCB7"
              src="/maria.png"
              name="Maria"
              arrowsrc="/arrow.png"
              text="Helping other trainees with their coursework"
              avatarimg="/dom.png"
              texttime="2 hours ago"
            />
            <TraineeCart
              bg="#A7CCB7"
              src="/luca.png"
              name="Luca"
              arrowsrc="/arrow.png"
              text="Showing excellent leadership skills"
              avatarimg="/mentor2.png"
              texttime="6 hours ago"
            />
            <TraineeCart
              bg="#A7CCB7"
              src="/dawn.png"
              name="Dawn"
              arrowsrc="/arrow.png"
              text="Completed professional development workshop"
              avatarimg="/mentor4.png"
              texttime="2 days ago"
            />
            <TraineeCart
              bg="#A7CCB7"
              src="/Mylo.png"
              name="Mylo"
              arrowsrc="/arrow.png"
              text="Personal study work is up to date"
              avatarimg="/mentor2.png"
              texttime="14 hours ago"
            />
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
}

export default Success;
