import React,{ useState} from 'react'
import { NavLink } from 'react-router-dom';

const Signup = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msgalert,setMsgAlert] = useState('');
    const [msgdisp,setMsgDisp] = useState("none");

    const handleSubmit = async(e) => {
        e.preventDefault();
        const res = await fetch ('/Signup',{
            method : "POST",
            headers :{
                "Content-Type": "application/json"

            },
            body:JSON.stringify({
               
                firstName,lastName, email, password
            })
        });
         const data = await res.json();
         if(res.status===402 || !data){
             window.alert("invalid registration or email already registered");
         }
         else{
           
            window.alert("Activation email sent")
            setMsgAlert("Activation email has been sent to your email. Kindly check your email and activate your account");
            setMsgDisp("flex");  


           
         }
      };

    return (
        <>
         <div className="msgalertdiv" style={{display:msgdisp}}>{msgalert}</div>
             <div className="App">
      <div className="outer">
        <div className="inner">
        <NavLink exact to="/"><div className="cross">&#10008;</div></NavLink>
        <form method="/POST">
        <h3>Register</h3>

        <div className="form-group">
            <label>First name</label>
            <input type="text" className="form-control"  onChange={e => setFirstName(e.target.value)} />
        </div>

        <div className="form-group">
            <label>Last name</label>
            <input type="text" className="form-control"  onChange={e => setLastName(e.target.value)}/>
        </div>

        <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control"  onChange={e => setEmail(e.target.value)} required="required" />
        </div>

        <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control"  onChange={e => setPassword(e.target.value)} required="required"/>
        </div>

        <button type="submit" className="signbtn regbtn" onClick={handleSubmit}>Register</button>
        <p className="forgot-password text-right signlog alreadyreg">
            Already registered ? <NavLink exact to="/Login">Log In</NavLink>
        </p>
    </form>
    </div>
      </div>
    </div>
        </>
    )
}

export default Signup
