import React, { Component } from "react"
import Navbar from "../components/Nav/Navbar"
import Carousel from "../components/Carousel/Carousel"
import AboutUs from "../components/AboutUs/AboutUs"
import Services from "../components/Services/Services"
import VisionSection from "../components/VisionSection/VisionSection"
import PartnersSection from "../components/PartnersSection/PartnersSection"
import ContacUs from "../components/ContactUs/ContactUs"
import Footer from "../components/Footer/Footer"
import { Helmet } from "react-helmet"
import ReactDelayRender from 'react-delay-render';
class Home extends Component {
  render() {
    return (
      <div>
       
        <Navbar />
        <Carousel />
        <AboutUs />
        <Services />
        <VisionSection/>
        <PartnersSection/>
        <ContacUs/>
        <Footer/>
      </div>
    )
  }
}

export default ReactDelayRender({ delay: 1000 })(Home);
