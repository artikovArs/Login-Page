import { Box, Container, Flex } from "@chakra-ui/react";
import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
   return (
      <>
         <Box display={"flex"} bg={"black"} py={"20px"} color={"white"} justifyContent={"center"}>
            <Flex gap={"30px"}>
               <Link to={"/"}>Home</Link>
               <Link to={"/login"}>Login</Link>
            </Flex>
         </Box>
            <Container maxW={"container.lg"}>
               <Outlet />
            </Container>
      </>
   );
};

export default Layout;
