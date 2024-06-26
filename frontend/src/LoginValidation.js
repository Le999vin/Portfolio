/*
author: Levin Pamay
Version: 1.
The `Validation` function validates the `email` and `password` fields in `values`, returning an `error` object with respective error messages if the fields are empty or do not match specified patterns.
*/ 
function Validation(values) {

    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if (values.email === "") {
      error.email = "Name should not be empty";
    } 
    else if (!email_pattern.test(values.email)) {
      error.email = "Email Didn't match"
    } else {
      error.email = ""
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