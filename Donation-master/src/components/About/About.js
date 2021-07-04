import React from "react";
import "style.css"
import "tailwindcss/dist/base.css"
import Header from "../headers/light";
import Footer from "../footers/MiniCenteredFooter";
import Hero from "./SimpleWithSideImageHeroAbout";
import Features from "./ThreeColAbout";
import Team from "./ProfileThreeColGrid";
import Divider from "./ImageDivider";


const About = () => {
     return (
    <div>
        <Header/>
        <Hero/>
        <Features/>
        <Team/>
        <Divider/>
        <Footer/>
   </div>
  )
}

export default About;