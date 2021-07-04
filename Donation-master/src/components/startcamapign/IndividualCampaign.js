import React from 'react';
import validate1 from './validateInfo1';
import useForm1 from './useForm1';

const IndividualCampaign = ({ submitForm }) => {
    const { handleChange,handleSubmit, values, errors } = useForm1(
      submitForm,
      validate1
    );
   
/*
    const nameEl = React.useRef(null);
    const phoneEl = React.useRef(null);
    const emailEl = React.useRef(null);
    const orgEl = React.useRef(null);
    const webEl = React.useRef(null);
    const fbEl = React.useRef(null);

    const handleSubmit = e => {
        e.preventDefault();
        const formData = {
          name: nameEl.current.value,
          email: emailEl.current.value,
          phone: phoneEl.current.value,
          org: orgEl.current.value,
          web: webEl.current.value,
          fb:fbEl.current.value,
        }
    }*/

    return(
        <table class="sctable" cellPadding="10" cellSpacing="16" style={{boxShadow:"none"}}>
                <tr>
                    <td class="tdef" colSpan='2'>
                    <input class="tb" 
                    type="text" size="60" 
                    placeholder="Full Name:* " 
                    name='nameNGO'
                    value={values.nameNGO}
                    onChange={handleChange}/>
                    {errors.nameNGO && <p class="error-msg">{errors.nameNGO}</p>}
                    </td>
                </tr>
                <tr>
                    <td class="tdef" >
                    <input class="tb" 
                    type='text' 
                    placeholder="Email:* " 
                    name='emailNGO'
                    value={values.emailNGO}
                    onChange={handleChange}/>
                    {errors.emailNGO && <p class="error-msg">{errors.emailNGO}</p>}
                    </td>
                    <td class="tdef">
                    <input class="tb" 
                    type='text'  
                    placeholder="Phone:* " 
                    name='phoneNGO'
                    value={values.phoneNGO}
                    onChange={handleChange}/>
                    {errors.phoneNGO && <p class="error-msg">{errors.phoneNGO}</p>}
                    </td>
                </tr>

                 <tr>
                    <td class="tdef" colSpan='2'>
                    <input class="tb" 
                    type="text" size="60" 
                    placeholder="Facebook Page* (for identity verification): " 
                    name='orgNGO'
                    value={values.orgNGO}
                    onChange={handleChange}/>
                    {errors.orgNGO && <p class="error-msg">{errors.orgNGO}</p>}
                    
                    </td>
                </tr>
                <tr>
                    <td class="tdef" colSpan='2'>
                    <textarea 
                    class="tb" 
                    rows="4"cols="45" 
                    placeholder="Message:* (A brief about the cause and the product you want to raise) "
                    name='msgNGO'
                    value={values.msgNGO}
                    onChange={handleChange}>
                    </textarea>
                    {errors.msgNGO && <p class="error-msg">{errors.msgNGO}</p>}
                    </td>
                </tr>
                <tr>
                    <td class="tdef1"colSpan="2">
                        <button class="scbutton" onClick={handleSubmit}>Request Campaign</button>
                    </td>
                </tr>
                </table>
    )
}

export default IndividualCampaign;