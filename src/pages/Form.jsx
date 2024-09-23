import { useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
 
  Box,
  Link,
  FormControl,
  FormHelperText,
 useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const toast = useToast();
  const [data, setdata] = useState({
    email: "",
    passwor: "",
  });
  const navigate = useNavigate();
  const HandleSignIn = () => {
    const { email, password } = data;
    if (email == "" || !email.includes("@gmail")) {
      return toast({
        title: "fill valid email",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
    if (!password || password.length <= 0) {
      return toast({
        title: "fill valid password",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
    navigate("/home");
  };
  return (
    <Flex
      flexDirection="column"
      className="form"
      borderRadius={10}
      backgroundColor="white"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Box minW={{ base: "auto", md: "422.64px" }}>
          <form>
            <Stack
              spacing={4}
              p="2rem"
              backgroundColor="whiteAlpha.900"
              borderRadius={10}
            >
              <FormControl>
                <Box mb={"5px"}>Email address</Box>
                <InputGroup>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Johndoe@gmail.com"
                    onChange={(e) =>
                      setdata({ ...data, [e.target.name]: e.target.value })
                    }
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <Box mb={"5px"}>Password</Box>
                <InputGroup>
                  <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={(e) =>
                      setdata({ ...data, [e.target.name]: e.target.value })
                    }
                  />
                </InputGroup>
                <FormHelperText textAlign="left">
                  <Link color={"#605BFF"}>forgot password?</Link>
                </FormHelperText>
              </FormControl>
              <Button
                borderRadius={10}
                onClick={(e) => HandleSignIn(e)}
                variant="solid"
                backgroundColor="#605BFF"
                width="full"
                color="white"
              >
                Sign In
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Form;
