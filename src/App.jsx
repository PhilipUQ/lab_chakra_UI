
import React from 'react';

import { Box, Button, Center, Heading, VStack, Stack, useBreakpointValue } from "@chakra-ui/react";




function App() {

  const imageUrl = "https://images.pexels.com/photos/2669601/pexels-photo-2669601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";


  
  const direction = useBreakpointValue({ base: "column", md: "row" });



  return (

    <Box
      w="100vw"
      h="100vh"
      backgroundImage={`url(${imageUrl})`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat" 
      font-family="Montserrat, sans-serif"
    >


      <Center h="100vh">

        <VStack spacing={5}>

          <Heading 

            color="white" 
            size="2xl" 
            fontWeight="regular" 
            textShadow="6px 6px 7px rgba(0,0,0,0.6)" 

          >

            Domina el terreno

          </Heading>

          <Stack direction={direction} spacing={4}>

            <Button
              variant="outline"
              borderColor="white"
              color="white"
              mx={3}
              boxShadow="lg"
              _hover={{
                bg: "white",
                color: "black",
                borderColor: "white"
              }}
            >


              Ver detalles




            </Button>

            <Button
              variant="outline"
              borderColor="white"
              color="white"
              mx={3}
              boxShadow="lg" 
              _hover={{
                bg: "white",
                color: "black",
                borderColor: "white"
              }}



            >
              Ver video

            </Button>


          </Stack>

        </VStack>


      </Center>




    </Box>



  );



}




export default App;








