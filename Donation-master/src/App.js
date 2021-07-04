import React,{useState} from "react";
import { useEffect } from "react";
import "./style.css"
import "./App.css"
import "tailwindcss/dist/base.css"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
import AnimationRevealPage from "helpers/AnimationRevealPage"
import Home from "./Home"
import ContactUs from "./ContactUs"
import About from "./components/About/About"
import Login from "./components/login/Login"
import Signup from "components/signup/Signup";
import ActivateEmail from "components/ActivateEmail";
import Explore from "components/campaigns/Explore";
import StartCampaign from "components/startcamapign/StartCampaign";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import IndividualPage from "IndividualPage";
import PaymentPage from './components/form/Form';
import PostPayment from "components/postpayment/PostPayment";




function App() {
  let loggedIn;
  let loginfoapp = localStorage.getItem("loggedIn")
  if (loginfoapp==undefined){
    loggedIn = false;
  }
  else{
   loggedIn = true;
  }


  return (
    <>
    <AnimationRevealPage>
      
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/ContactUs' exact component={ContactUs} />
          <Route path='/HowItWorks' exact component={HowItWorks} />
           <Route path='/About' exact component={About} />
           <Route path='/Explore' exact component={Explore} /> 
           <Route path='/Startcampaign' exact component={StartCampaign} />       
           <Route path='/Login' exact>
             <Login loggedIn={loggedIn}/>
             </Route>
           <Route path='/Signup' exact component={Signup} />
           <Route path='/IndividualPage' exact component={IndividualPage} />
           <Route path='/PostPayment' exact component={PostPayment} />
           <Route path='/PaymentPage' exact>
             <PaymentPage loggedIn={loggedIn} />
           </Route>
           <Route path="/auth/activate/:activation_token" exact component={ActivateEmail} />
           

        </Switch>
      </Router>
      
    </AnimationRevealPage>
    </>
  )
}

export default App;