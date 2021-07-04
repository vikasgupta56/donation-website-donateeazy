import React,{useState} from 'react';
import './StartCampaign.css';
import './PayPage.css';
import NgoTable from './NgoTable';
import img from "../../images/footer.PNG"
import IndividualCampaign from './IndividualCampaign';
import ImageSlider from './ImageSlider';
import {SliderData} from './SliderData';
import FormSuccess from './FormSuccess';
import Header from "../headers/light"

function StartCampaign(){  
  const [value, setValue]= React.useState(true);

  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

 return(
    <>
     <Header />
    {!isSubmitted ? (
    <div>
    <h2 class="head1" id="startcamp">Start a Campaign</h2>
    <table class="mtable">
        <th></th>
        <th> <div class="schead"><br/>Please fill this form in order to start a campaign.</div></th>
        <tr>
            <td class="mtabletb"><ImageSlider slides={SliderData} /></td>
            <td class="mtabletb"> 
                <table class="sctable" cellPadding="10" cellSpacing="10">
                    <tr>
                        <td class="thead"><button class="scbutton" onClick={()=>setValue(!value)} >        NGO        </button></td>
                        <td class="thead"><button class="scbutton" onClick={()=>setValue(!value)}>Individual Campaign</button></td>
                    </tr>
                    <tr>
                        <td class="tdef" colSpan="2">
                            <div>
                                {value ? (<NgoTable submitForm={submitForm}/>)
                                       : (<IndividualCampaign submitForm={submitForm}/>)}
                            </div> 
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr><td class="mtabletb" colSpan="2"><br/><br/><img src={img} alt="footer"></img></td></tr>
        <br/><br/>
    </table>
    </div>
    )
    : (
        <FormSuccess/>
      )}
 </>
 )
}


export default StartCampaign;
