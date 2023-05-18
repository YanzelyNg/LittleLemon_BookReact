import {
  Box,
  Text,
  Image,
  Grid,
  GridItem,
  Divider,
  HStack,
} from '@chakra-ui/react';
import "@fontsource/markazi-text";



export default function About() {
  return (
    <>
    <Divider orientation='horizontal' mt="60px"/>
    <Box bg='#495E57' maxW='100%' height='500px' m={[100,5,5,5]} borderWidth='1px' >
      <Grid templateColumns='repeat(12, 1fr)' gap={6} m={[50,10,10,10]}>
        <GridItem colSpan={2}/>
        <GridItem colSpan={4}>          
          <Box>
              <Text fontWeight="bold" lineHeight="1" fontSize="64pt" mt="50px" p={[0, 0, 0, 0]} fontFamily="Markazi Text" color="#F4CE14">Little Lemon</Text>
              <Text fontSize="40pt" lineHeight="1" m={[0, 0, 0, 0]} p={[0, 0, 0, 0]} fontFamily="Markazi Text" color="#EDEFFF">Chicago</Text>
              <Text fontSize="20pt" lineHeight="1" m={[0, 0, 0, 0]} p={[0, 0, 0, 0]} fontFamily="Markazi Text" color="#EDEFFF">Mario and Adrian are two renowned chefs who love to cook and share the results of their delicious dishes with others. They decided to open this restaurant in 2015, and they are always innovating with their dishes. In addition, they always try to listen to the comments of their clients in order to satisfy the tastes of adults and children.</Text>
          </Box>
        </GridItem>        
        <GridItem colSpan={4}>
          <HStack>
            <Image borderRadius='lg' marginTop={"90px"} height={"210pt"} width={"230pt"} src={require("../images/restaurant chef B.jpg")} alt='Logo' />
            <Image borderRadius='lg' marginTop={"55px"} marginLeft={50} height={"210pt"} width={"230pt"} src={require("../images/Mario and Adrian A.jpg")} alt='Logo' />
          </HStack>
        </GridItem> 
        <GridItem colSpan={2}/>
      </Grid>
    </Box>
    </>
  );
}