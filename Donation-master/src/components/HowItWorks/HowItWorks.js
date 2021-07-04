import React from "react";
import "style.css"
import "tailwindcss/dist/base.css"

import Hero from "../hero/TwoColumnWithVideoHowItWorks"
import Divider from "../features/ImageDividerHowItWorks";
import Footer from "../footers/MiniCenteredFooter";
import Third from "../faqs/SimpleWithSideImageHowItWorks";
import Fourth from "../faqs/SimpleWithSideImageHowItWorks2";
import Fifth from "../faqs/SimpleWithSideImageHowItWorks3";
import Team from "../cards/ProfileThreeColGrid";




const HowItWorks = () => {
     return (
    <div>
        <Hero />
        <Divider/>
        <Third/>
        <Fourth/>
        <Fifth/>
       <Team/>
       <Footer/>
        
   </div>
  )
}

export default HowItWorks;