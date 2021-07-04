import React from "react";
import "style.css"
import "tailwindcss/dist/base.css"
import Header from "components/headers/light";
import ContactForm from "components/forms/TwoColContactUsWithIllustrationFullForm";
import Footer from "components/footers/MiniCenteredFooter";

const ContactUs = () => {
     return (
    <div>
        <Header/>
        <ContactForm/>
        <Footer/>
   </div>
  )
}

export default ContactUs;