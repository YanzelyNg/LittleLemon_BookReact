import {
    Text,
    Button,
    Grid,
    GridItem,
    Center,
  } from '@chakra-ui/react';
  import "@fontsource/markazi-text";

  export default function Body() {
    return (
      <>
      <Grid templateColumns='repeat(12, 1fr)' gap={6} m={[10,10,10,10]}>
        <GridItem colSpan={2}/>
        <GridItem colSpan={6} >        
            <Text alignItems={'center'} fontWeight="extrabold" lineHeight="1" fontSize="24pt" fontFamily="Markazi Text" color="#333333">This weeks Specials!</Text>
        </GridItem>
        <GridItem colSpan={2}>
          <Center>
            <Button bg="#F4CE14" borderColor="#F4CE14" size='lg' marginRight={"10"}>
              <Text fontWeight="bold" lineHeight="1" fontSize="18pt" fontFamily="Markazi Text" color="#333333">Online Menu</Text>
            </Button>
          </Center>
        </GridItem>
        <GridItem colSpan={2}/>
      </Grid>
      </>
    );
  }