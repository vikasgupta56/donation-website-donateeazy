import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { NavLink } from 'react-router-dom'


function ActivationEmail() {
    const {activation_token} = useParams()
    const [msg, setMsg] = useState('')
    const [link, setlink] = useState('#')
 

    useEffect(() => {
        if(activation_token){
            console.log(activation_token);

            const activationEmail = async()=>{
                try{
                    const res = await fetch ('/activateEmail',{
                        method : "POST",
                        headers :{
                            "Content-Type": "application/json"
            
                        },
                        body:JSON.stringify({  
                         activation_token
                        })
                    });
                     const data = await res.json();
                     if(res.status===402 || !data){
                        setMsg("Some error has been occured. Please try once again")
                    }
                     else if(res.status===201){
                        setMsg("User verified. Now you can login to the website.")
                        setlink("http://localhost:5000/")
                     }            
                }catch(error){
                    console.log(error)
                }

            }

            activationEmail()
        }

     
    }, [activation_token])

    return (
        <div className="active_page">
        <NavLink exact to={link}><div className="activateresult" style={{position:'absolute',display:"flex",justifyContent:"center",alignItems:"center",top:"50px",textAlign:"center",color:"#8f2c10",width:"84vw",height:"74px",fontSize:"24px",backgroundColor:"#f9a37b"}}>{msg}</div></NavLink>
       </div>
    )
}

export default ActivationEmail
