import React from 'react';
import img2 from '../../images/imgg.PNG';
import './PostPayment.css';
import {AiFillMail} from 'react-icons/ai';
import {IoMdDownload} from 'react-icons/io';
import {GrInstagram, GrTwitter, GrYoutube, GrFacebook} from 'react-icons/gr';


function PostPayment(props) {
    /*const amount= React.useRef(null);
    const ngoName = React.useRef(null);
 
    /*const handleSubmit = e => {
      e.preventDefault();
      const formData = {
        name: cnameEl.current.value,
        phone: cardEl.current.value,
        exp: expEl.current.value,
        cvv: cvvEl.current.value,
      }
     
      console.log(formData);
    };*/

    return(
      <table class="tq" cellSpacing="50px" cellPadding="15px"> 
        <tr>
          <td class="tq"><p class="para"><h1 class="head3">We Appreciate Your Support</h1>
                    Your gift has been received! Your efforts will not only improve lives; they will transform futures. 
                    Together we are bringing help for today,and hope for tomorrow!</p></td>
          <td class="tq"><img src={img2} alt="poster image" height="320px" width="280px"/></td>
        </tr>
        <tr>
          <td class="tq" colSpan="2">
            <table class="tq1">
              <tr class="tq1"><td class="tq1" colSpan="2"><h1>You have donated <br/>amount<br/>towards ngoName</h1></td></tr>
              <tr class="tq1"><td class="tdleft">Charged Amount</td><td class="tdright"><b>amount</b></td></tr>
              <tr class="tq1"><td class="tdleft">Donation Date</td><td class="tdright"><b>00/00/0000</b></td></tr>
              <tr class="tq1"><td class="tdleft">Donation Number</td><td class="tdright"><b>000</b></td></tr>
              <tr class="tq1">
                <td class="tdleft"><h3 class="pinkH"><IoMdDownload/> <a class="blackH" href="#">Download Invoice</a></h3></td>
                <td class="tdright"><h3 class="pinkH"><AiFillMail/> <a class="blackH" href="#">Receive through mail</a></h3></td></tr>
              
            </table>
            <h3><a class="blueH" href="#">Need help? Contact us.</a></h3>
          </td>
        </tr>
        <tr class="tq">
          <td class="tq"><iframe src={img2} title="description" height="280px" width="500px"></iframe></td>
          <td class="tq"><h3 class="blueH">Inspire those around you!</h3>
            <h2 >
            <a class="blueH" href="#"> <GrInstagram/> </a>
            <a class="blueH" href="#"> <GrTwitter/> </a>
            <a class="blueH" href="#"> <GrYoutube/> </a>
            <a class="blueH" href="#"> <GrFacebook/> </a>
            </h2>

          
          </td>
        </tr>
      </table>
    )
}

export default PostPayment;