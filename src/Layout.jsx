import { Box, Button, Container, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
   const [isAuth, setIsAuth] = useState(false)
   const token = JSON.parse(localStorage.getItem("token"))
   const navigate = useNavigate()

   useEffect(() => {
      if (token?.length) {
         setIsAuth(true)
      } else {
         setIsAuth(false)
      }
   },[isAuth,token])

   const signOut = () => {
      localStorage.removeItem("token")
      navigate("/login")
   }

   return (
      <>
         <Box
            display={"flex"}
            bg={"black"}
            py={"20px"}
            color={"white"}
            justifyContent={"center"}
         >
            <Flex gap={"30px"} alignItems={"center"}>
               <Link to={"/"}>Home</Link>
               {isAuth ? (
                  <Button colorScheme="facebook" onClick={signOut}>Sign out</Button>
               ) : (
                  <Link to={"/login"}>Login</Link>
               )}
            </Flex>
         </Box>
         <Container maxW={"container.lg"}>
            <Outlet />
         </Container>
      </>
   );
};

export default Layout;
