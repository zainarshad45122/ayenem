import React from "react";
import Navbar from '../components/Nav/Navbar'
import Carousel from '../components/Carousel/Carousel'
import AboutUs from '../components/AboutUs/AboutUs'
import Services from '../components/Services/Services'
export default function Home(props) {
  
  return (
    <div>
     <Navbar/>
     <Carousel/>
     <AboutUs/>
     <Services/>
    </div>
  );
}
