import {
    Box,
    HStack,
    Text,
    Button,
    Card,
    CardBody,
    CardFooter,
    Image,
    Stack,
    Heading,
    Grid,
    GridItem,
  } from '@chakra-ui/react';
  import "@fontsource/markazi-text";

  export default function CardSection() {
    return (
      <Grid templateColumns='repeat(12, 1fr)' gap={2} m={[10,10,10,10]}>
        <GridItem colSpan={2}/>
        <GridItem colSpan={8} >
          <HStack >
            <Box width="100%">
                <Card maxW='sm' bg="#EDEFEE" height="530px">
                  <CardBody>
                    <Image
                    src={require("../images/greek salad.jpg")}
                    alt='Greek salad'
                    borderRadius='lg'
                    m={[0,0,0,0]}
                    p={[0,0,0,0]}
                    width='100%'
                    height='250px'
                    />
                    <Stack mt='6' spacing='3'>
                      <Grid templateColumns='repeat(6, 1fr)' gap={6}>
                        <GridItem colSpan={4}>
                          <Heading size='md' color="#333333" fontFamily="Markazi Text" fontSize="18pt" fontWeight="bold" aria-describedby="Greek Salad">Greek Salad</Heading>
                        </GridItem>
                        <GridItem colSpan={2}>
                          <Heading size='md' color="#EE9972" fontFamily="Markazi Text" fontSize="18pt" fontWeight="bold" aria-describedby="12.99">12.99</Heading>
                        </GridItem>
                      </Grid>
                      <Text fontSize="16pt" lineHeight="1" color="#333333" fontFamily="Markazi Text" aria-describedby="Greek salad of crispy lettuce, peppers, olives">
                      The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
                      </Text>
                    </Stack>
                  </CardBody>
                  <CardFooter>
                    <Button variant='ghost' fontSize="16pt" color="#333333" fontFamily="Markazi Text" fontWeight="bold" aria-describedby="Order a Delivery">
                        Order a Delivery
                    </Button>
                  </CardFooter>
                </Card>
            </Box>
            <Box width="100%">
                <Card maxW='sm' bg="#EDEFEE" height="530px">
                  <CardBody>
                    <Image
                    src={require("../images/bruschetta.png")}
                    alt='Greek salad'
                    borderRadius='lg'
                    m={[0,0,0,0]}
                    p={[0,0,0,0]}
                    width='100%'
                    height='250px'
                    />
                    <Stack mt='6' spacing='3'>
                      <Grid templateColumns='repeat(6, 1fr)' gap={6}>
                        <GridItem colSpan={4}>
                          <Heading size='md' color="#333333" fontFamily="Markazi Text" fontSize="18pt" fontWeight="bold" aria-describedby="Bruschetta">Bruschetta</Heading>
                        </GridItem>
                        <GridItem colSpan={2}>
                          <Heading size='md' color="#EE9972" fontFamily="Markazi Text" fontSize="18pt" fontWeight="bold" aria-describedby="5.99">5.99</Heading>
                        </GridItem>
                      </Grid>
                      <Text fontSize="16pt" lineHeight="1" color="#333333" fontFamily="Markazi Text" aria-describedby="Our Bruschetta is made from grilled bread">
                      Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
                      </Text>
                    </Stack>
                  </CardBody>
                  <CardFooter>
                    <Button variant='ghost' fontSize="16pt" color="#333333" fontFamily="Markazi Text" fontWeight="bold" aria-describedby="Order a Delivery">
                        Order a Delivery
                    </Button>
                  </CardFooter>
                </Card>
            </Box>
            <Box width="100%">
                <Card maxW='sm' bg="#EDEFEE" height="530px">
                  <CardBody>
                    <Image
                    src={require("../images/lemon dessert.jpg")}
                    alt='Greek salad'
                    borderRadius='lg'
                    m={[0,0,0,0]}
                    p={[0,0,0,0]}
                    width='100%'
                    height='250px'
                    />
                    <Stack mt='6' spacing='3'>
                      <Grid templateColumns='repeat(6, 1fr)' gap={6}>
                        <GridItem colSpan={4}>
                          <Heading size='md' color="#333333" fontFamily="Markazi Text" fontSize="18pt" fontWeight="bold" aria-describedby="Lemon Dessert">Lemon Dessert</Heading>
                        </GridItem>
                        <GridItem colSpan={2}>
                          <Heading size='md' color="#EE9972" fontFamily="Markazi Text" fontSize="18pt" fontWeight="bold" aria-describedby="5.00">5.00</Heading>
                        </GridItem>
                      </Grid>
                      <Text fontSize="16pt" lineHeight="1" color="#333333" fontFamily="Markazi Text" aria-describedby="Every last ingredient has been sourced and is as authentic">
                      This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
                      </Text>
                    </Stack>
                  </CardBody>
                  <CardFooter>
                    <Button variant='ghost' fontSize="16pt" color="#333333" fontFamily="Markazi Text" fontWeight="bold" aria-describedby="Order a Delivery">
                        Order a Delivery
                    </Button>
                  </CardFooter>
                </Card>
            </Box>
          </HStack>
        </GridItem>
        <GridItem colSpan={2}/>
      </Grid>
    );
  }