import React from "react";
import "style.css"
import "tailwindcss/dist/base.css"

import Hero from "components/hero/TwoColumnWithVideo"
import Features from "components/features/ThreeColWithSideImage"
import Third from "components/faqs/SimpleWithSideImage"
import Fourth from "components/cards/ThreeColSlider"
import Fifth from "components/features/FullWidthBackgroundImageWithCenteredContent"
import Faqs from "components/faqs/SimpleWithSideImageFAQs"
import Testimonials from "components/testimonials/ThreeColumnWithProfileImage"
import Thankyou from "components/features/FullWidthBackgroundImageWithCenteredContentThankyou"
import Footer from "components/footers/MiniCenteredFooter"

const Home = () => {
     return (
    <div>
        <Hero />
        <Features/>
        <Third/>
        <Fourth/>
        <Fifth/>
        <Faqs/>
        <Testimonials/>
        <Thankyou/>
        <Footer/>
   </div>
  )
}

export default Home;