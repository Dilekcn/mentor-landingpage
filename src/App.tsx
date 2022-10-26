import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react";
import EarlyAccess from "./components/EarlyAccess";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NeedSupport from "./components/NeedSupport";
import ProductTour from "./components/ProductTour";
import Success from "./components/Success";
import TraineeData from "./components/TraineeData";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Navbar />
    <Home />
    <Success />
    <NeedSupport />
    <TraineeData />
    <ProductTour />
    <EarlyAccess />
  </ChakraProvider>
);
