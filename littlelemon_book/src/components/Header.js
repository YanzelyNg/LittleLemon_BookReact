import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Image,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
  Grid,
  GridItem
} from '@chakra-ui/react';
//import logo from 'images/logo.png';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

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
    href={'/reservations'}>
    {children}
  </Link>
);

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Grid templateColumns='repeat(12, 1fr)' gap={2} m={[10,10,10,10]}>
        <GridItem colSpan={2}/>
        <GridItem colSpan={2}>
          <Box alignItems={'center'}>
            <Image height="100%" width="100%" src={require("../images/LogoY1.png")} alt='Logo' />
          </Box>
        </GridItem>
        <GridItem colSpan={1}/>
        <GridItem colSpan={5}>
          <Box >
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
              <IconButton
                size={'md'}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label={'Open Menu'}
                display={{ md: 'none' }}
                onClick={isOpen ? onClose : onOpen}
              />
              <HStack spacing={4} alignItems={'center'} display="flex" justifyContent="space-between">
                <HStack
                  as={'nav'}
                  spacing={15}
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between">
                    <Text color="#333333" fontFamily="Markazi Text" fontSize="20pt" fontWeight="bold">
                      {Links.map((link) => (
                        <Link px={2} py={1} rounded={'md'} href={link}
                        _hover={{textDecoration: 'none', bg: 'gray.200',}}>{link}
                        </Link>
                      ))}
                    </Text>
                </HStack>
              </HStack>
              <Flex alignItems={'center'}>
                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={'full'}
                    variant={'link'}
                    cursor={'pointer'}
                    minW={0}>
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Link 1</MenuItem>
                    <MenuItem>Link 2</MenuItem>
                    <MenuDivider />
                    <MenuItem>Link 3</MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
            </Flex>

          {isOpen ? (
            <Box display={{ md: 'none' }}>
              <Stack as={'nav'} spacing={4}>
                {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
              </Stack>
            </Box>
          ) : null}
          </Box>
        </GridItem>
        <GridItem colSpan={2}/>
      </Grid>
    </>
  );
}