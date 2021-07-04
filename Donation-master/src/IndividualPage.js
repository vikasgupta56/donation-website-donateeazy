import React from 'react';
import { useEffect } from 'react';
// import './style.css';
// import './style1.css';
// the above two styles i have included in App.css 
import i9 from './images/img8.jpg';
import i10 from './images/img9.PNG';
import i8 from './images/icon.png';
import Header from './components/headers/light'
import "IndividualPage.css";
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import App from 'App';



function IndividualPage(){

    const history  = useHistory();

    
   let cardtitleip = localStorage.getItem('cardtitleip');

    return(
        <>
         <Header/>
        <div className="indpage">
            <p className="page">{cardtitleip}</p>
            <table className="t3 indpagetable">
            <tr><td><img src= {i9} width="600" height="350" alt="img8" className="indpageimg"/></td>  
            <td><img src={i10} width="50" height="350" alt="img9"/></td>
                <td><h2 >Our Mission</h2><p className="page1 page1ip"> "Chocolate bar pie chupa chups liquorice chocolate 
                cake caramels. Gummi bears caramels sweet roll candy canes bonbon candy toffee chocolate bar. Cake oat 
                cake croissant cake chupa chups muffin cheesecake chocolate danish. 
                Pudding bonbon caramels marshmallow powder ice cream marzipan oat cake. Powder cupcake marshmallow. 
                Tart sweet lemon drops jelly-o liquorice muffin."</p></td>
                </tr>
                </table>

        {/* //     <table className="t4ipage">
            
        //     <tr><td><img className="icon" src={i8} width="50" height="50" /></td>
        //     <td><p className="page2">by Halle Tucker</p></td><br></br><br></br>
        //     <td><img src={i10} width="280" height="50" alt="img9"/></td>
        //     <td><p className="page3" >128 days Left</p></td><br></br>
        //                 </tr></table>
                      
        //    <tr> <td><p className="page3" >3,71,143 raised</p></td></tr>
        //    <table>
        //    <tr><td><img src={i10} width="450" height="50" alt="img9"/></td>
        //    <td><img className="icon" src={i8} width="50" height="50" /></td>
        //     <td><p className="page2">Tax Benefit</p></td><br></br><br></br>
        //     <td><img src={i10} width="300" height="50" alt="img9"/></td>
            
        //    <td><button className="btn2" onClick={donate}>DONATE NOW</button></td></tr>
        

            
            </table> */}
            

        </div>
        <div className="donatedivip">
            <div className="leftip">
                <div className="donationinfoip">
                    <img src={i8} />
                    <p>by Halle Tucker</p>
                    <div className="daysleftip"><span>226</span> days left</div>
                </div>
                <div className="donationcountip">6,46,408 raised</div>
                <div className="donationbar"><div className="donationbarpercip"></div></div>
            </div>
            <div className="rigthip">
                <div className="buttoncontip"><NavLink exact to="/PaymentPage"><button>Donate Now</button></NavLink></div>
            </div>
        </div>
        </>
    )
}

export default IndividualPage;