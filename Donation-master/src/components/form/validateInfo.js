export default function validateInfo1(values) {
    let errors = {};
   var pattern = new RegExp(/^[0-9\b]+$/);
    var patternA = new RegExp(/^[A-Za-z]+/)
    /*var emailPattern = new RegExp(/\S+@\S+\.\S+/)*/
  
    //PayPage 

    if (!values.amount.trim()) {
        errors.amount = 'Amount required';
     }else if(isNaN(values.amount)) {
        errors.amount = 'Enter a number';
    }

   if (!values.nameEl.trim()) {
      errors.nameEl = 'name required';
    } else if (!patternA.test(values.nameEl.trim())) {
        errors.nameEl = 'Enter a valid name';
    }

    if (!values.phone.trim()) {
        errors.phone = 'Phone number required';
     }else if(!pattern.test(values.phone)){
        errors.phone = 'Please enter numerical values';
    }else if(values.phone.length!==10) {
        errors.phone = 'Phone Number should have 10 digits';
    } 

    
    return errors;

    



    

   
  
   /* if (!values.email) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password needs to be 6 characters or more';
    }
  
    if (!values.password2) {
      errors.password2 = 'Password is required';
    } else if (values.password2 !== values.password) {
      errors.password2 = 'Passwords do not match';
    }*/
   

   
  }