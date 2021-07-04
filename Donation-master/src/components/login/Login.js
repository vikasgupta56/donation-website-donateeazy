import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink } from "react-router-dom";
import { useHistory } from 'react-router';
import "./Login.css";


const Login = ({loggedIn}) => {

    const history = useHistory();

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    
    const userLogin= async(e)=>{
       
        e.preventDefault();
        const res = await fetch ('/login',{
            method : "POST",
            headers :{
                "Content-Type": "application/json"

            },
            body:JSON.stringify({
               email, password
            })
        });
         const data = await res.json();
         if(res.status === 404 || !data ){
            window.alert("Login unsuccessfull");
         }
         else{
            
             window.alert("Login successfull");
           localStorage.setItem("loggedIn","true")
             history.push('/')
             
         }

      

    }
    return (
        <>{
         <div className="App">
      <div className="outer">
        <div className="inner">
        <NavLink exact to="/"><div className="cross">&#10008;</div></NavLink>
            <form>

                <h3>Log In</h3>

                <div className="form-group">
                    <label>EMAIL</label>
                    <input type="email"  value={email} onChange={(e)=>{setEmail(e.target.value)}} className="form-control" required="required"/>
                </div>

                <div className="form-group">
                    <label>PASSWORD</label>
                    <input type="password"  value={password} onChange={(e)=>{setPassword(e.target.value)}} className="form-control" required="required"/>
                </div>

                <div class="form-group">
                <label class="form-remember">
                  <input type="checkbox"/>Remember Me
                </label>
                </div>

                <button type="submit" className="signbtn" required onClick={userLogin}>Sign in</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
            <NavLink exact to='Signup' className="signupa"><div className="signuplink">Don't have an account? Sign up</div></NavLink>
            </div>
            
      </div>
    </div>
}
   
            
        </>
    )
}

export default Login
