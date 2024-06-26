/*
author: Levin Pamay
Version: 1.
The `Validation` function checks and returns error messages for fields such as name, email, and password based on specific criteria including non-empty requirements and format validations using regular expressions.
*/ 
function Validation(values) {

    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;


    if (values.name === "") {
      error.name = "Name should not be empty";
    } 
     else {
      error.name = ""
    }

    if (values.email === "") { // Assuming there's an email field in values
        error.email = "Email should not be empty or Password should contain Capital letter and Number";
    } else if (!email_pattern.test(values.email)) {
        error.email = "Invalid email format";
    } else {
        error.email = "";
    }
    
    


    if (values.password === "") {
      error.password = "Password should not be empty";

    } 
    else if (!password_pattern.test(values.password)) {
      error.password = "Password didn't match";
    } else {
      error.password = "";
    }
    return error;
  }
  export default Validation;