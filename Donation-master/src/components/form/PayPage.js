import React, { useState } from 'react';
import {useEffect} from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './PayPage.css';
import Header from '../headers/light'
import { useHistory } from 'react-router-dom';

  const PayPage = ({ loggedIn,submitForm }) => {
    const history = useHistory();
    const { handleChange, handleSubmit, values, errors } = useForm(
      submitForm,
      validate
    );

    const options = {
      key: 'rzp_test_5KGxnd0vyAJWYl',
      // key_secret:"sch7sKwcBhvlCLNFq4QCOUIp",
      amount: values.amount*100, //  = INR 1
      name:`Welcome ${values.nameEl} `,
      description: 'Select a payment method',
      image: 'https://razorpay.com/assets/razorpay-glyph.svg',
      handler: function (response) {
          // alert(response.razorpay_payment_id);
          console.log("payment made successfully")
          let orderId = response.razorpay_payment_id;

          history.push('/PostPayment')
         
  
      },
      prefill: {
          name:values.nameEl,
          contact: values.phone,
          email:""
      },
      notes: {
          address: 'some address'
      },
      theme: {
          color: '#f9a37b',
          hide_topbar: false
      }
  };
  
  const donatefunc = () => {
    
    if(loggedIn.loggedIn==true){
      var rzp1 = new window.Razorpay(options);
      rzp1.open();
    }
    else(history.push('/Login'))
  };

  useEffect(() => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      document.body.appendChild(script);
      console.log(loggedIn)
  }, []);

    
    return (
        <>
        <Header />
        <h2 class="head1">One step away from making the difference</h2>
        <div class="head2">
        <br/><br/>
        <table class="paytable" cellSpacing="0">
           <div class="th1">
           <th> <p className="myButton1"><b>Currency</b><br/>
             <select id="t"><option>INR - Indian Rupee</option>
            <option>USD - U.S. Dollar </option> 
            <option>EUR - European Euro</option>
            <option>JPY - Japanese Yen</option>
            <option>GBP - British Pound</option>
            <option>CHF - Swiss Franc</option>
            <option>CAD - Canadian Dollar</option>
            <option>Australian/New Zealand Dollar</option>
            <option>ZAR - South African Rand</option>
            <option>Other</option></select>
                  </p>
            </th>
            <th>
            <p className="myButton1"><b>Amount</b><br/>
            <input 
            type="text" 
            id="t" 
            name='amount'
            value={values.amount}
            onChange={handleChange}/></p>
            {errors.amount && <p class="error-msg">{errors.amount}</p>}
           
            </th>
            </div>
        <tr>
            <td colSpan="2">
            <form onSubmit={handleSubmit} class="paytable" noValidate>
              <input
              class="ppinput" 
              type="text" 
              placeholder="Name" 
              name='nameEl'
              value={values.nameEl}
              onChange={handleChange}
                />
              {errors.nameEl && <p class="error-msg">{errors.nameEl}</p>}
              <label>
              <input type="checkbox" />
              Make donations anonymous?
              </label>
              <input
               class="ppinput"
               type="text"
               placeholder="Phone Number" 
               name='phone'
               value={values.phone}
               onChange={handleChange}
                />
              {errors.phone && <p class="error-msg">{errors.phone}</p>}
              <label>
              <input type="checkbox" id="terms_and_conditions"  />
              By continuing, I agree to the 
              <a href="#">Terms of Service and Privacy Policy</a>.
              </label>
              <button type="submit" className="myButton" id="submit_button" onClick={donatefunc}>Continue to Pay</button>
            </form>
            </td>
        </tr>
       </table>
       <br/><br/><br/><br/>
       </div>
       </>
     );
  }

  export default PayPage;