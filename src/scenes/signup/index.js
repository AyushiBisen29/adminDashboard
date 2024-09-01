import React, { useState } from 'react';

import "../../style.css"
import 'bootstrap/dist/css/bootstrap.min.css';


const Signup = () => {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
  }

  return (
    <div className='d-flex justify-content-center align-items-center vh-100 signupPage'>
      <div className='p-3 rounded w-25 border loginForm'>
        <div className='text-warning'>
          
        </div>
        <h2  style={{color:'black'}}>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='firstName'><strong>First Name:</strong></label>
            <input type="text" name="firstName" placeholder="Enter First Name" 
                   onChange={(e) => setValues({...values, firstName: e.target.value})} className='form-control rounded-0' />
          </div>
          <div className='mb-3'>
            <label htmlFor='lastName'><strong>Last Name:</strong></label>
            <input type="text" name="lastName" placeholder="Enter Last Name" 
                   onChange={(e) => setValues({...values, lastName: e.target.value})} className='form-control rounded-0' />
          </div>
          <div className='mb-3'>
            <label htmlFor='email'><strong>Email:</strong></label>
            <input type="email" name="email" placeholder="Enter Email" 
                   onChange={(e) => setValues({...values, email: e.target.value})} className='form-control rounded-0' />
          </div>
          <div className='mb-3'>
            <label htmlFor='phoneNumber'><strong>Phone Number:</strong></label>
            <input type="tel" name="phoneNumber" placeholder="Enter Phone Number" 
                   onChange={(e) => setValues({...values, phoneNumber: e.target.value})} className='form-control rounded-0' />
          </div>
          <div className='mb-3'>
            <label htmlFor='password'><strong>Password:</strong></label>
            <input type="password" name="password" placeholder="Enter Password" 
                   onChange={(e) => setValues({...values, password: e.target.value})} className='form-control rounded-0' />
          </div>
          <div className='mb-1'>
            <input type='checkbox' name='tick' id="tick" className='me-2' />
            <label htmlFor='password'  ><h6 style={{color:'black'}}> You are Agree with our terms & conditions </h6></label>
            <br/>
          </div>
          <button className='btn btn-success w-100 rounded-0 mb-2'>Register</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;