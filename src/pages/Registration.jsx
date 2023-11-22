import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Registration = () => {
   const [error, setError] = useState("")
   const loginRef = useRef("");
   const pwRef = useRef("");
   const navigate = useNavigate()

   const auth = async () => {
      try {
         const res = await axios.post("http://localhost:5000/auth/register", {
            username: loginRef.current.value,
            password: pwRef.current.value,
         });
         if (res.status === 200){
          navigate("/login")
         };
      } catch (error) {
        setError(error.response.data.message);
      }
   };

   const onRegister = () => {
      auth();
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
               ref={loginRef}
            />
            <Input size={"lg"} placeholder="Password" my={"20px"} ref={pwRef} />
            <Flex direction={"column"} gap={"10px"}>
               <Button
                  letterSpacing={"5px"}
                  size={"lg"}
                  width={"100%"}
                  colorScheme="facebook"
                  onClick={onRegister}
               >
                  Registrate
               </Button>
               <Text color={"red"}>{error}</Text>
            </Flex>
         </Box>
      </Box>
   );
};

export default Registration;
