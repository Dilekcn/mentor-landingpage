import { ChakraProvider, theme } from "@chakra-ui/react";
import EarlyAccess from "./pages/EarlyAccess";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import NeedSupport from "./pages/NeedSupport";
import ProductTour from "./pages/ProductTour";
import Success from "./pages/Success";
import TraineeData from "./pages/TraineeData";
import LinkForm from "./components/LinkForm";

export const App = () => (
  <ChakraProvider theme={theme}>
    <LinkForm />
    <Navbar />
    <Home />
    <Success />
    <NeedSupport />
    <TraineeData />
    <ProductTour />
    <EarlyAccess />
  </ChakraProvider>
);
