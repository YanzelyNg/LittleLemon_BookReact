import {
  Box,
  Text,
  Image,
  Grid,
  GridItem,
  Divider,
  Link,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import "@fontsource/markazi-text";

const Links = ['Home', 'About', 'Menu', 'Reservations', 'Order Online', 'Login'];

const NavLink = ({ children }: {children: ReactNode}) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}    
    href={'#'}>
    {children}
  </Link>
);

export default function Footer() {
  return (
    <>
    <Divider orientation='horizontal' mt="60px"/>
    <Box maxW='100%' height='500px'  >
      <Grid templateColumns='repeat(12, 1fr)' gap={6} m={[5,5,5,5]}>
        <GridItem colSpan={2}/>
        <GridItem colSpan={2}>          
          <Box>
          <Image borderRadius='lg' align="right" maxW='200px' src={require("../images/LogoLL.png")} alt='Logo' />              
          </Box>
        </GridItem>          
        <GridItem colSpan={2} align="left">          
          <Box alignItems={'flex-start'}>
              <Text fontWeight="extrabold" lineHeight="2" fontSize="18pt" p={[0, 0, 0, 0]} fontFamily="Markazi Text" color="#333333">Doormat Navigation</Text>
              <Text textAlign={'left'} color="#333333" fontFamily="Markazi Text" fontSize="14pt" fontWeight="bold">
                <VStack align={'left'}>
                      {Links.map((link) => (
                        <NavLink textAlign={'left'} key={link}>{link}</NavLink>
                      ))}
                </VStack>
              </Text>
          </Box>
        </GridItem>
        <GridItem colSpan={2} align="left">          
          <Box alignItems={'flex-start'}>
              <Text fontWeight="extrabold" lineHeight="2" fontSize="18pt" p={[0, 0, 0, 0]} fontFamily="Markazi Text" color="#333333">Contact</Text>
              
                <VStack align={'left'}>
                <Text textAlign={'left'} color="#333333" fontFamily="Markazi Text" fontSize="14pt" fontWeight="bold">
                  Address: Panamá City
                </Text>
                <Text textAlign={'left'} color="#333333" fontFamily="Markazi Text" fontSize="14pt" fontWeight="bold">
                  Phone Number: +(507) 61471111
                </Text>
                <Text textAlign={'left'} color="#333333" fontFamily="Markazi Text" fontSize="14pt" fontWeight="bold">
                  E-mail: mario_adrian@littlelemon.com
                </Text>                
                </VStack>
              
          </Box>
        </GridItem> 
        <GridItem colSpan={2} align="left">          
          <Box alignItems={'flex-start'}>
              <Text fontWeight="extrabold" lineHeight="2" fontSize="18pt" p={[0, 0, 0, 0]} fontFamily="Markazi Text" color="#333333">Social Media Links</Text>              
                <VStack align={'left'}>
                <Text textAlign={'left'} color="#333333" fontFamily="Markazi Text" fontSize="14pt" fontWeight="bold">
                  LinkedIn: @LittleLemon507 
                </Text>
                <Text textAlign={'left'} color="#333333" fontFamily="Markazi Text" fontSize="14pt" fontWeight="bold">
                  Facebook: LittleLemon507 
                </Text>
                <Text textAlign={'left'} color="#333333" fontFamily="Markazi Text" fontSize="14pt" fontWeight="bold">
                  Twitter: LittleLemon507 
                </Text>                
                </VStack>              
          </Box>
        </GridItem>                
        <GridItem colSpan={2}/>
      </Grid>
    </Box>
    </>
  );
}