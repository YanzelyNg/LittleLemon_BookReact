import {
  Box,
  Text,
  Image,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import "@fontsource/markazi-text";



export default function Mainblock() {


  return (
    <Box bg='#495E57' maxW='100%' maxH='350px' m={[100,5,5,5]} borderWidth='1px' >
      <Grid templateColumns='repeat(12, 1fr)' gap={6} m={[10,10,10,10]}>
        <GridItem colSpan={2}/>
        <GridItem colSpan={4}>          
          <Box>
              <Text fontWeight="bold" lineHeight="1" fontSize="64pt" m={[0, 0, 0, 0]} p={[0, 0, 0, 0]} fontFamily="Markazi Text" color="#F4CE14">Little Lemon</Text>
              <Text fontSize="40pt" lineHeight="1" m={[0, 0, 0, 0]} p={[0, 0, 0, 0]} fontFamily="Markazi Text" color="#EDEFFF">Chicago</Text>
              <Text fontSize="20pt" lineHeight="1" m={[0, 0, 0, 0]} p={[0, 0, 0, 0]} fontFamily="Markazi Text" color="#EDEFFF">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</Text>
          </Box>
        </GridItem>
        <GridItem colSpan={1}/>
        <GridItem colSpan={3}>
          <Box>
            <Image borderRadius='lg' marginTop={50} height={"210pt"} width={"230pt"} mb={100} src={require("../images/restauranfood.jpg")} alt='Logo' />
          </Box>
        </GridItem> 
        <GridItem colSpan={2}/>
      </Grid>
    </Box>
  );
}