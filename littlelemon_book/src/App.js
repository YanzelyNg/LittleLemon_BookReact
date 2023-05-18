
// import { ChakraProvider } from "@chakra-ui/react";
// import About from "./components/About";
// import Header from "./components/Header";
// import Mainblock from "./components/Mainblock";
// import Body from "./components/Body";
// import CardSection from "./components/CardSection";
// import Testimonials from "./components/Testimonials";
// import Footer from "./components/Footer";

// import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Reservations from "./pages/Reservations";

import './App.css';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<Home />} />
          <Route path="menu" element={<Home />} />
          <Route path="reservations" element={<Reservations />} />
          <Route path="order online" element={<Home />} />
          <Route path="login" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App;