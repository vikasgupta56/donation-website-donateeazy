import React from 'react';
import {IoMdWallet} from 'react-icons/io';
import {AiFillCreditCard} from 'react-icons/ai'

function PayPage1(props) {
    const cnameEl = React.useRef(null);
    const cardEl = React.useRef(null);
    const expEl= React.useRef(null);
    const cvvEl = React.useRef(null);
 
    const handleSubmit = e => {
      e.preventDefault();
      const formData = {
        name: cnameEl.current.value,
        phone: cardEl.current.value,
        exp: expEl.current.value,
        cvv: cvvEl.current.value,
      }
     
      console.log(formData);
    };

    return(
        <form class="scform">
            <h4>How would you like to pay?</h4>
            <table class="pptable" cellSpacing="10" cellPadding="5" align="center">
                <tr>
                    <td><button className="myButton">{<AiFillCreditCard/>}  Card</button></td>
                    <td><button className="myButton">{<IoMdWallet/>}  PayTM</button></td>
                </tr>
                <tr>
                    <td class="tdef" colSpan="2">
                        <input type="text" class="tb" size="40" placeholder="Cardholder " ref={cnameEl} /></td>
                    </tr>
                <tr>
                    <td class="tdef" colSpan="2">
                        <input type="text" class="tb" size='40' placeholder="Card Number " ref={cardEl} /></td>
                </tr>
                <tr>
                    <td class="tdef">
                        <input type="text" class="tb" size="12" placeholder="Expiration Date " ref={expEl} /></td>
                    <td class="tdef">
                        <input type="text" class="tb" size="12" placeholder="CVV " ref={cvvEl} /></td>
                </tr>
                <tr>
                    <td colSpan="2" ><button className="myButton">DONATE NOW</button></td>
                </tr>
            </table>
            <br/>
        </form>
    );

}

export default PayPage1;