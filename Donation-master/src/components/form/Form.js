import React, { useState } from 'react';
import { useEffect } from 'react';
import './Form.css';
//import FormSignup from './FormSignup';
import PayPage from './PayPage';
import FormSuccess from './FormSuccess';
import PayPage1 from './PayPage1';

const Form = (loggedIn) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    console.log(loggedIn);
  }, [])

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
          <PayPage submitForm={submitForm} loggedIn={loggedIn}/>
        
        )
    </>
  );
};

export default Form;