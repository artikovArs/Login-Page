import { Box, Button, Flex, Input } from "@chakra-ui/react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { IoIosReturnRight } from "react-icons/io";

const Login = () => {
  const loginRef = useRef("")
  const pwRef = useRef("")
   return (
      <Box
         width={"100%"}
         height={"100vh"}
         display={"flex"}
         alignItems={"center"}
         justifyContent={"center"}
      >
         <Box width={"500px"}>
            <Input size={"lg"} width={"100%"} placeholder="Type your Email" ref={loginRef}/>
            <Input size={"lg"} placeholder="Password" my={"20px"} ref={pwRef}/>
            <Flex direction={"column"} gap={"10px"}>
               <Button letterSpacing={"5px"} size={"lg"} width={"100%"} colorScheme="facebook">
                  Registrate
               </Button>
               <Flex alignItems={"center"} gap={"5px"}>
                  <Link to={"/registration"}>
                     <IoIosReturnRight color="blue" fontSize={"36px"} />
                  </Link>
                  <Link to={"/registration"} style={{color:"blue"}} > or Registrated</Link>
               </Flex>
            </Flex>
         </Box>
      </Box>
   );
};

export default Login;
