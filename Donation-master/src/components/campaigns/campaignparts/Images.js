import React from 'react';
import i1 from '../../../images/opone.jpg';
import '../../charityappcss/style.css';
import { useHistory } from 'react-router';


function Images(){
  const history = useHistory();
  let campaignredirect =()=>{
    history.push('/Startcampaign')
  }
        return (
          <div className="containercampimg">
            <img src= {i1} style={{width:"100%",height:"563px"}} alt="Hello" />
            <button className="btn" onClick={campaignredirect}>Start A New Campaign</button>
              
          </div>
        )
      }
export default Images;
