import {
    Box,
    HStack,
    Text,
    Card, 
    CardBody, 
    Image,
    Heading,
    Grid,
    GridItem,
    Center,
    Divider,
    Avatar,
  } from '@chakra-ui/react';
  import "@fontsource/markazi-text";

  export default function Testimonials() {
    return (
      <>
      <Divider orientation='horizontal' mt="60px"/>
      <Center>
        <Heading m={[10,10,10,10]}>TESTIMONIALS</Heading> 
      </Center>
     
      <Grid templateColumns='repeat(12, 1fr)' gap={2} m={[10,10,10,10]}>
        <GridItem colSpan={2}/>
        <GridItem colSpan={8} >
          <HStack >
            <Box width="100%">
                <Card maxW='sm' bg="#EDEFEE" height="300px">
                  <CardBody>
                    <Image
                    src={require("../images/Star5.png")}
                    alt='Person Image'
                    borderRadius='lg'
                    width='100%'
                    height='50px'
                    />
                    <HStack mt="20px">
                      <Avatar size='2xl' name='Juan Perez' src={require("../images/Person3.png")}/>
                      <Heading color="#333333" fontFamily="Markazi Text" fontSize="18pt" fontWeight="bold">Juan Perez</Heading>
                    </HStack>                  
                    <Text fontSize="16pt" lineHeight="1" color="#333333" fontFamily="Markazi Text" mt="10px">
                      I love this restaurant, its food is great!
                    </Text>
                  </CardBody>
                </Card>
            </Box>
            <Box width="100%">
                <Card maxW='sm' bg="#EDEFEE" height="300px">
                  <CardBody>
                    <Image
                    src={require("../images/Star5.png")}
                    alt='Person Image'
                    borderRadius='lg'
                    width='100%'
                    height='50px'
                    />
                    <HStack mt="20px">
                      <Avatar size='2xl' name='María Martínez' src={require("../images/Person1.png")}/>
                      <Heading color="#333333" fontFamily="Markazi Text" fontSize="18pt" fontWeight="bold">María Martínez</Heading>
                    </HStack>                  
                    <Text fontSize="16pt" lineHeight="1" color="#333333" fontFamily="Markazi Text" mt="10px">
                      My family and me really like this restaurant's food.
                    </Text>
                  </CardBody>
                </Card>
            </Box>
            <Box width="100%">
                <Card maxW='sm' bg="#EDEFEE" height="300px">
                  <CardBody>
                    <Image
                    src={require("../images/Star4.png")}
                    alt='Person Image'
                    borderRadius='lg'
                    width='100%'
                    height='50px'
                    />
                    <HStack mt="20px">
                      <Avatar size='2xl' name='Ana Smith' src={require("../images/Person2.png")}/>
                      <Heading color="#333333" fontFamily="Markazi Text" fontSize="18pt" fontWeight="bold">Ana Smith</Heading>
                    </HStack>                  
                    <Text fontSize="16pt" lineHeight="1" color="#333333" fontFamily="Markazi Text" mt="10px">
                      The food is good, there are no baby's chair.
                    </Text>
                  </CardBody>
                </Card>
            </Box>
            <Box width="100%">
                <Card maxW='sm' bg="#EDEFEE" height="300px">
                  <CardBody>
                    <Image
                    src={require("../images/Star3.png")}
                    alt='Person Image'
                    borderRadius='lg'
                    width='100%'
                    height='50px'
                    />
                    <HStack mt="20px">
                      <Avatar size='2xl' name='Mario Ortega' src={require("../images/Person4.png")}/>
                      <Heading color="#333333" fontFamily="Markazi Text" fontSize="18pt" fontWeight="bold">Mario Ortega</Heading>
                    </HStack>                  
                    <Text fontSize="16pt" lineHeight="1" color="#333333" fontFamily="Markazi Text" mt="10px">
                      The food is good, but the portion is small.
                    </Text>
                  </CardBody>
                </Card>
            </Box>                                  
          </HStack>
        </GridItem>
        <GridItem colSpan={2}/>
      </Grid>
      </>
    );
  }