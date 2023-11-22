import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosReturnRight } from "react-icons/io";
import { useRef, useState } from "react";
import axios from "axios";

const Login = () => {
   const [error, setError] = useState()
   const loginEmailRef = useRef("");
   const loginPwRef = useRef("");
   const navigate = useNavigate()

   const login = async() => {
      try {
         const result = await axios.post("http://localhost:5000/auth/login", {
            username: loginEmailRef.current.value,
            password: loginPwRef.current.value,
         })
         if (result.status === 200) {
           const token = JSON.stringify(result.data.token)
           localStorage.setItem("token", token)
            navigate("/")
         };
      } catch (error) {
         setError(error.response.data.message);
      }
   }

   const onLogin = () => {
      login()
   };

   return (
      <Box
         width={"100%"}
         height={"100vh"}
         display={"flex"}
         alignItems={"center"}
         justifyContent={"center"}
      >
         <Box width={"500px"}>
            <Input
               size={"lg"}
               width={"100%"}
               placeholder="Type your Email"
               ref={loginEmailRef}
            />
            <Input
               size={"lg"}
               placeholder="Password"
               my={"20px"}
               ref={loginPwRef}
            />
            <Flex direction={"column"} gap={"10px"}>
               <Button
                  letterSpacing={"5px"}
                  size={"lg"}
                  width={"100%"}
                  colorScheme="facebook"
                  onClick={onLogin}
               >
                  Login
               </Button>
                  <Text color={"red"}>{error}</Text>
               <Flex alignItems={"center"} gap={"5px"}>
                  <Link to={"/registration"}>
                     <IoIosReturnRight color="blue" fontSize={"36px"} />
                  </Link>
                  <Link to={"/registration"} style={{ color: "blue" }}>
                     {" "}
                     or Registrate
                  </Link>
               </Flex>
            </Flex>
         </Box>
      </Box>
   );
};

export default Login;
