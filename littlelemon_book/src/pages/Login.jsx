import React from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import About from "../components/About";
import Mainblock from "../components/Mainblock";
import Body from "../components/Body";
import CardSection from "../components/CardSection";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

function Home() {
    return (
    <ChakraProvider>
        <main>
            <Mainblock/>
            <Body mt={200}/>
            <CardSection/>
            <Testimonials/>
            <About/>
            <Footer/>
        </main>

    </ChakraProvider>    
    );
}

export default Home;