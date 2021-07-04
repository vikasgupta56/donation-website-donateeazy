export default function validateInfo1(values) {
    let errors = {};
   /* var pattern = new RegExp(/^[0-9\b]+$/);*/
    var patternA = new RegExp(/^[A-Za-z]+/)
    var emailPattern = new RegExp(/\S+@\S+\.\S+/)
  
    //for NGOtable and Individual Table

    if (!values.nameNGO.trim()) {
      errors.nameNGO = 'name required';
    } else if (!patternA.test(values.nameNGO.trim())) {
        errors.nameNGO = 'Enter a valid name';
    }

    if (!values.emailNGO.trim()) {
      errors.emailNGO = 'email required';
    }else if (!emailPattern.test(values.emailNGO)) {
      errors.emailNGO = 'Email address is invalid';
    }

    if (!values.phoneNGO.trim()) {
      errors.phoneNGO = 'phone number required';
    }else if(isNaN(values.phoneNGO)) {
      errors.phoneNGO = 'Enter a number';
  } else if(values.phoneNGO.length!==10) {
    errors.phoneNGO = 'Phone Number should have 10 digits';
}

    if (!values.orgNGO.trim()) {
      errors.orgNGO = 'The field cannot be empty!';
    }

    if (!values.msgNGO.trim()) {
      errors.msgNGO = 'please write a brief about your cause';
    }else if(values.msgNGO.length<30){
      errors.msgNGO = 'Please enter atleast 30characters';
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