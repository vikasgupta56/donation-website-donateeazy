import React from 'react';
import '../../charityappcss/style.css';
import i2 from '../../../images/img5.PNG';
import i3 from '../../../images/img6.PNG';
import i4 from '../../../images/img7.PNG';
import i5 from '../../../images/img3.png';
import i6 from '../../../images/img2.png';
import i7 from '../../../images/img4.png';
import i8 from '../../../images/icon.png';

function Campaigns(){
    return(
        
        <div className="campaigns"><br></br><br></br>
        <table className="t2">
           <tr><td> <button className="btn3"><img src= {i2} width="350" height="330" alt="Hello" />
           <p style={{color:'#481A00'}}>Global Climate Change Rally</p>
           <td><img className="icon" src={i8} width="50" height="50" alt="Hello"/></td><td></td><td>
           <p className="p">by Thomas Crane</p></td><br></br>
            <td><p className="p1">1,73,200 raised</p></td><br></br>
            <td><p className="p2">42 days Left</p></td>
           <td> <button className="btn1">KNOW MORE</button></td></button> 
           </td><td></td><td></td>


           <td><button className="btn3"> <img src= {i3} width="350" height="330" alt="Hello" />
           <p style={{color:'#481A00'}}>Help Animals in Distress-FunandFur</p>
           <td><img className="icon" src={i8} width="50" height="50" alt="Hello"/></td><td></td><td>
           <p className="p">by Halle Tucker</p></td><br></br>
           <td><p className="p1">3,71,143 raised</p></td><br></br>
           <td><p className="p2">128 days Left</p></td>
           <td><button className="btn1">KNOW MORE</button></td></button> </td><td><td></td></td>


           <td> <button className="btn3"><img src= {i4} width="350" height="330" alt="Hello" />
           <p style={{color:'#481A00'}}>#Great Global Cleanup-Community Event</p>
           <td><img className="icon" src={i8} width="50" height="50" alt="Hello" /></td><td></td><td>
           <p className="p">by Myra Warner</p></td><br></br>
           <td><p className="p1">30,065 raised</p></td><br></br>
           <td><p className="p2">1 days Left</p></td>
          <td> <button className="btn1">KNOW MORE</button></td></button></td></tr><br></br><br></br>


           <tr><td><button className="btn3"> <img src= {i5} width="350" height="330" alt="Hello" />
           <p style={{color:'#481A00'}}>Care India - NGO Empowering Women & Girls</p>
           <td><img className="icon" src={i8} width="50" height="50" alt="Hello" /></td><td></td><td>
           <p className="p">by Jocelyn Ogley</p></td><br></br>
           <td><p className="p1">6,43,432 raised</p></td><br></br>
           <td><p className="p2">226 days Left</p></td>
           <td><button className="btn1">KNOW MORE</button></td></button></td><td></td><td></td>


           <td> <button className="btn3"><img src= {i6} width="350" height="330" alt="Hello" />
           <p style={{color:'#481A00'}}>Help Supply Oxygen Tanks For The Needy </p>
           <td><img className="icon" src={i8} width="50" height="50" alt="Hello" /></td><td></td><td>
           <p className="p">by Jasmine Gilbert</p></td><br></br>
           <td><p className="p1">60,532 raised</p></td><br></br>
           <td><p className="p2">17 days Left</p></td>
           <td><button className="btn1">KNOW MORE</button></td></button></td><td><td></td></td>


           <td> <button className="btn3"><img src= {i7} width="350" height="330" alt="Hello" />
           <p style={{color:'#481A00'}}>Artists For Conservation (AFC)</p>
           <td><img className="icon" src={i8} width="50" height="50" alt="Hello"/></td><td></td><td>
           <p className="p">by Wynne Hansen</p></td><br></br>
           <td><p className="p1">33,654 raised</p></td><br></br>
           <td><p className="p2">634 days Left</p></td>
          <td> <button className="btn1">KNOW MORE</button></td></button></td></tr>

           
        
        </table>
       <div className="camp"><br></br><br></br> <button className="btn2">Explore All</button>
        <p>Need help? <a href ="#">How it Works</a></p></div>
        
        </div>
    )
}

export default Campaigns;