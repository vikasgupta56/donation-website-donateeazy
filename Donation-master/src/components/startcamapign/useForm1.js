import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    /*nameEl: '',
    phone:'',
    amount:'',*/
    nameNGO:'',
    emailNGO:'',
    phoneNGO:'',
    orgNGO:'',
    webNGO:'',
    fbNGO:'',
    msgNGO:'',
    /*email: '',
    password: '',
    password2: ''*/
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
   
    setErrors(validate(values));
    const res = await fetch ('/StartCampaign',{
      method : "POST",
      headers :{
          "Content-Type": "application/json"

      },
      body:JSON.stringify(values)
  });
   const data = await res.json();
   console.log(res.status)
   if(res.status===402 || !data){
       window.alert("data not sent to owner");
       console.log("data not send")
   }
   else if(res.status===200){
     setIsSubmitting(true);
   }
   else{
     window.alert("some unknown error or you filled up some invalid inputs")
   }
    
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;