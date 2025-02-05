/*
author: Levin Pamay
Version: 1.
The `Signup` component manages a sign-up form in React, validating user inputs for name, email, and password using local state, sending a POST request upon valid inputs, and providing error feedback while allowing navigation to a login page and displaying terms and policies.
*/ 
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Validation from './SignupValidation';
import axios from 'axios'

import { useNavigate } from'react-router-dom';


function Signup() {

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    })
    const navigate = useNavigate();
    const[errors, setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({...prev,    [event.target.name]: [event.target.value]}))
    }
    const handleSubmit = (event) => {
         event.preventDefault();
        setErrors(Validation(values));
        if(errors.name === "" && errors.email ==="" && errors.password === ""){
            axios.post('http://localhost:8081/signup', values)
            .then(res => {
               navigate('/home') 
            }) 
            .catch(err =>console.log(err));
            }
    }

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Sign-Up </h2>
                <form action = "" onSubmit={handleSubmit}>
                     <div className='mb-3'>
                        <label htmlFor="name"><strong>Name</strong></label>
                        <input type="text" placeholder='Enter Name' name='name'
                        onChange={handleInput} className='form-control rounded-0'/>
                        {errors.name && <span className='text-damger'> {errors.name}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" placeholder='Enter Email max.musterman@gmail.com' name='email'
                        onChange={handleInput} className='form-control rounded-0'/>
                        {errors.email && <span className='text-damger'> {errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" placeholder='Enter Password' name='password'
                        onChange={handleInput} className='form-control rounded-0'/>
                        {errors.password && <span className='text-damger'> {errors.password}</span>}
                    </div>
                    <button type='submit'className='btn btn-success w-100 rounded-0'>Sign up</button>
                    <p>You are agree to oure terms and policies</p>
                    <Link to="/" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
                </form>
             </div>
        </div>
  )
}

export default Signup
