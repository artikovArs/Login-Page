import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import Routers from "./Routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
   <BrowserRouter>
      <ChakraProvider>
        <Routers/>
      </ChakraProvider>
   </BrowserRouter>
);
