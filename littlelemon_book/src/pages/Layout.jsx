import React from "react";
import {Outlet} from "react-router-dom";
import Header from "../components/Header";
import { ChakraProvider } from "@chakra-ui/react";

const Layout = () => {
  return (
    <>
    <ChakraProvider>
        <main>
            <meta name="description" content="Little Lemon Restaurant Web Page"/>
            <meta name="og:title" content="Little Lemon"/>
            <meta name="og:description" content="Little Lemon Restaurant Web Page for Menu and Booking"/>
            <meta name="og:image" content="../images/LogoLL.png"/>
            <Header />
            <Outlet />
        </main>

    </ChakraProvider>        


    </>
  );
};

export default Layout;