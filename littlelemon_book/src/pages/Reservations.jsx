import React from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import Mainblock from "../components/Mainblock";
import Footer from "../components/Footer";

function Reservations() {
    return (
    <ChakraProvider>
        <main>
            <Mainblock/>

            <Footer/>
        </main>

    </ChakraProvider>    
    );
}

export default Reservations;